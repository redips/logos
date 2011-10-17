<?php


function logos_preprocess_page(&$vars) {
    $query = db_select('taxonomy_term_data', 't');
    $query
        ->fields('t', array('name'))
        ->condition('vid', 2)
        ->orderBy('weight');
    $result = $query->execute();
    $output = '';
    foreach ($result as $row) {
        /*
        <li><a href="#"><span>scuola di psicoterapia</span></a></li>
        <li><a href="#"><span>corsi di formazione</span></a></li>
        <li><a href="#"><span>seminari</span></a></li>
        <li><a href="#"><span>servizi</span></a></li>
        <li><a href="#"><span>corsi istituzionali</span></a></li>
        <li><a href="#"><span>consulenze e supervisioni</span></a></li>
        */
        $output .= '<li>'.l('<span>'.$row->name.'</span>', '#', array('html' => true)).'</li>';
    }
    $vars['offerta_menu'] = $output;
}