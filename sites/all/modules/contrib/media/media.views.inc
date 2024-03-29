<?php

/**
 * @file
 * Provide Views data and handlers for media.module
 */

/**
 * Implements hook_views_plugins().
 */
function media_views_plugins() {
  $plugins = array();

  // Display plugin.
  $plugins['display']['media_browser'] = array(
    'title' => t('Media browser tab'),
    'help' => t('Display as a tab in the media browser.'),
    'handler' => 'media_views_plugin_display_media_browser',
    'theme' => 'views_view',
    'base' => array('file_managed'),
    'use ajax' => TRUE,
    'use pager' => TRUE,
    'accept attachments' => TRUE,
  );

  // Style plugin.
  $plugins['style']['media_browser'] = array(
    'title' => t('Media browser'),
    'help' => t('Displays rows as an HTML list.'),
    'handler' => 'media_views_plugin_style_media_browser',
    'theme' => 'media_views_view_media_browser',
    'base' => array('file_managed'),
    'uses row plugin' => FALSE,
    'uses row class' => FALSE,
    'uses options' => FALSE,
    'uses fields' => FALSE,
    'type' => 'normal',
    'help topic' => 'style-media-browser',
  );
  return $plugins;
}

/**
 * Display the view as a media browser.
 */
function template_preprocess_media_views_view_media_browser(&$vars) {
  // Load file objects for each View result.
  $fids = array();
  foreach ($vars['rows'] as $index => $row) {
    $fids[$index] = $row->fid;
  }
  $files = file_load_multiple($fids);

  // Render the preview for each file.
  foreach ($vars['rows'] as $index => $row) {
    $file = $files[$row->fid];
    $preview = media_get_thumbnail_preview($file);
    $preview = drupal_render($preview);
    $vars['rows'][$index]->preview = $preview;
    $vars['rows'][$index]->file = $file;
    // @todo Remove this hacky way of 'linking' each item to select it in the browser.
    $vars['rows'][$index]->preview = l($preview, 'media/browser', array('html' => TRUE, 'query' => array('render' => 'media-popup', 'fid' => $row->fid)));
  }

  // Add classes and wrappers from the style plugin.
  $handler  = $vars['view']->style_plugin;

  $class = explode(' ', $handler->options['class']);
  $class = array_map('drupal_clean_css_identifier', $class);

  $wrapper_class = explode(' ', $handler->options['wrapper_class']);
  $wrapper_class = array_map('drupal_clean_css_identifier', $wrapper_class);

  $vars['class'] = implode(' ', $class);
  $vars['wrapper_class'] = implode(' ', $wrapper_class);
  $vars['wrapper_prefix'] = '<div id="container">';
  $vars['wrapper_suffix'] = '</div>';
  $vars['list_type_prefix'] = '<' . $handler->options['type'] . ' id="media-browser-library-list">';
  $vars['list_type_suffix'] = '</' . $handler->options['type'] . '>';

  if ($vars['wrapper_class']) {
    $vars['wrapper_prefix'] = '<div id="container" class="' . $vars['wrapper_class'] . '">';
  }

  if ($vars['class']) {
    $vars['list_type_prefix'] = '<' . $handler->options['type'] . ' id="media-browser-library-list" class="' . $vars['class'] . '">';
  }

  // Run the prepared theming variables through a standard Views preprocess
  // function.
  template_preprocess_views_view_unformatted($vars);

  // Add media browser javascript and CSS.
  drupal_add_js(drupal_get_path('module', 'media') . '/js/plugins/media.library.js');
  drupal_add_css(drupal_get_path('module', 'media') . '/js/plugins/media.library.css');
}
