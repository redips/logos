<?php

/**
 * @file
 * Provide the media file selector widget and media field formatters to the
 * Fields API.
 */

/**
 * Implements hook_field_widget_info().
 */
function media_field_widget_info() {
  return array(
    'media_generic' => array(
      'label' => t('Media file selector'),
      'field types' => array('file', 'image'),
      'settings' => array(
        'progress_indicator' => 'throbber',
        'allowed_types' => array('image'),
        'browser_plugins' => array(),
        'allowed_schemes' => array('public', 'private'),
      ),
      'behaviors' => array(
        'multiple values' => FIELD_BEHAVIOR_DEFAULT,
        'default value' => FIELD_BEHAVIOR_NONE,
      ),
    ),
  );
}

/**
 * Implements hook_field_formatter_info().
 *
 * Provides legacy support for the "Large filetype icon" file field formatter.
 * This was originally used when media entities contained file fields. The
 * current file entity architecture no longer needs this, but people may
 * have used this formatter for other file fields on their website.
 *
 * @todo Some day, remove this.
 */
function media_field_formatter_info() {
  $formatters = array(
    'media_large_icon' => array(
      'label' => t('Large filetype icon'),
      'field types' => array('file'),
    ),
  );
  return $formatters;
}

/**
 * Implements hook_field_formatter_view().
 *
 * Legacy support for the "Large filetype icon" file field formatter.
 * @see media_field_formatter_info()
 */
function media_field_formatter_view($entity_type, $entity, $field, $instance, $langcode, $items, $display) {
  if ($display['type'] == 'media_large_icon') {
    foreach ($items as $delta => $item) {
      $element[$delta] = array(
        '#theme' => 'media_formatter_large_icon',
        '#file' => $item,
      );
    }
    return $element;
  }
}

/**
 * Implements hook_field_widget_settings_form().
 */
function media_field_widget_settings_form($field, $instance) {
  $widget = $instance['widget'];
  $settings = $widget['settings'];
  $form = array();

  if ($field['type'] == 'media') {
    // Make the extension list a little more human-friendly by comma-separation.
    $extensions = str_replace(' ', ', ', $instance['settings']['file_extensions']);
    $form['file_extensions'] = array(
      '#type' => 'textfield',
      '#title' => t('Allowed file extensions for uploaded files'),
      '#default_value' => $extensions,
      '#description' => t('Separate extensions with a space or comma and do not include the leading dot.'),
      '#element_validate' => array('_file_generic_settings_extensions'),
      // By making this field required, we prevent a potential security issue
      // that would allow files of any type to be uploaded.
      '#required' => TRUE,
    );
  }

  // Setup type selection form
  $types = media_type_get_types();
  $options = array();
  foreach ($types as $key => $definition) {
    $options[$key] = $definition->label;
  }

  $streams = file_get_stream_wrappers();

  $form['allowed_types'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Allowed remote media types'),
    '#options' => $options,
    '#default_value' => $settings['allowed_types'],
    '#description' => t('Media types which are allowed for this field when using remote streams.'),
    '#weight' => 1,
    '#access' => count(file_get_stream_wrappers(STREAM_WRAPPERS_LOCAL)) != count($streams),
  );

  $options = array();
  unset($streams['temporary']);
  foreach ($streams as $scheme => $data) {
    $options[$scheme] = t('@scheme (@name)', array('@scheme' => $scheme . '://', '@name' => $data['name']));
  }
  $form['allowed_schemes'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Allowed URI schemes'),
    '#options' => $options,
    '#default_value' => $settings['allowed_schemes'],
    '#description' => t('URI schemes include public:// and private:// which are the Drupal files directories, and may also refer to remote sites.'),
    '#weight' => 2,
  );

  ctools_include('plugins');
  $plugins = ctools_get_plugins('media', 'browser');
  $form['browser_plugins'] = array(
    '#type' => 'checkboxes',
    '#title' => t('Enabled browser plugins'),
    '#options' => array(),
    '#default_value' => $settings['browser_plugins'],
    '#description' => t('If no plugins are selected, they will all be available.'),
  );
  foreach ($plugins as $key => $plugin) {
    $form['browser_plugins']['#options'][$key] = !empty($plugin['title']) ? $plugin['title'] : $key;
  }

  return $form;
}

/**
 * Implements hook_field_widget_form().
 */
function media_field_widget_form(&$form, &$form_state, $field, $instance, $langcode, $items, $delta, $element) {
  $field_settings = $instance['settings'];
  $widget_settings = $instance['widget']['settings'];

  $permission = user_access('edit media');
  if (!$permission) {
    // @todo: show the default file upload field.
    return;
  }

  // @todo The Field API supports automatic serialization / unserialization, so
  //   this should no longer be needed. After verifying with a module that uses
  //   the 'data' column, remove this.
  // @see media_field_widget_value()
  $current_value = array();
  if (isset($items[$delta])) {
    $current_value = $items[$delta];
    // @todo $items[$delta] is sometimes a loaded media entity (an object)
    //   rather than an array. This conflicts with Field API expectations (for
    //   example, it results in fatal errors when previewing a node with a
    //   multi-valued media field), so should be fixed. In the meantime, don't
    //   assume that $current_value is an array.
    if (is_array($current_value) && isset($current_value['data']) && is_string($current_value['data'])) {
      $current_value['data'] = unserialize($current_value['data']);
    }
  }

  $element += array(
    '#type' => 'media', // Would like to make this a fieldset, but throws some weird warning about element_children... not sure what it is about yet.
    '#collapsed' => TRUE,
    '#default_value' => $current_value,
    '#required' => $instance['required'],
    '#media_options' => array(
      'global' => array(
        'types' => array_filter($widget_settings['allowed_types']),
        'enabledPlugins' => array_filter($instance['widget']['settings']['browser_plugins']),
        'schemes' => $widget_settings['allowed_schemes'],
        'file_directory' => isset($field_settings['file_directory']) ? $field_settings['file_directory'] : NULL,
        'file_extensions' => isset($field_settings['file_extensions']) ? $field_settings['file_extensions'] : media_variable_get('file_extensions'),
        'max_filesize' => isset($field_settings['max_filesize']) ? $field_settings['max_filesize'] : NULL,
        'uri_scheme' => !empty($field_settings['uri_scheme']) ? $field_settings['uri_scheme'] : file_default_scheme(),
      ),
    ),
  );

  if ($field['type'] == 'file') {
    $element['display'] = array(
      '#type' => 'value',
      '#value' => 1,
    );
  }

  // Add image field specific validators.
  if ($field['type'] == 'image') {
    if ($field_settings['min_resolution'] || $field_settings['max_resolution']) {
      $element['#media_options']['global']['min_resolution'] = $field_settings['min_resolution'];
      $element['#media_options']['global']['max_resolution'] = $field_settings['max_resolution'];
    }
  }

  return $element;
}

/**
 * @todo Is this function ever called? If not, remove it. The Field API now
 *   supports automatic serialization / unserialization, so this should no
 *   longer be needed. After verifying with a module that uses the 'data'
 *   column, remove this.
 *
 * @see media_field_widget_form()
 */
function media_field_widget_value($element, $input, $form_state) {
  $return = $input;

  if (!is_array($return)) {
    $return = array();
  }

  if (isset($return['data'])) {
    $return['data'] = serialize($return['data']);
  }

  $return += array(
    'fid' => 0,
    'title' => '',
    'data' => NULL,
  );

  return $return;
}
