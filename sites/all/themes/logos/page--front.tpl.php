<div id="wrapper" class="big-banner">
  <div id="header">
    <div class="top-block">
      <div class="top-holder">
        <!-- ***************** - Top Toolbar Left Side - ***************** -->
        <div class="sub-nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Galleria immagini</a></li>
            <li><a href="#">Galleria video</a></li>
            <li><a href="#">Archivio</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Contatti / Dove siamo</a></li>
          </ul>
        </div>
        <!-- end sub-nav -->
        <!-- ***************** - END Top Toolbar Left Side - ***************** -->
        <!-- ***************** - Top Toolbar Right Side - ***************** -->
        <div class="sub-nav2">
          <ul>
            <li><?php print l('Accedi all\'area riservata', 'user'); ?></li>
          </ul>
        </div>
        <!-- end sub-nav2 -->
        <!-- ***************** - END Top Toolbar Right Side - ***************** -->
      </div>
      <!-- end top-holder -->
    </div>
    <!-- end top-block -->
    <div class="header-holder">
      <div class="rays">
        <div class="header-area">
          <!-- ***************** - LOGO - ***************** -->
          <a href="#" class="logo"><img src="images/Logos/logo.png" alt="Logos Genova" /></a>
          <!-- ***************** - END LOGO - ***************** -->
          <!-- ***************** - Main Navigation - ***************** -->
          <ul id="menu-main-nav">
             <?php
            //print_r($main_menu);
            foreach($main_menu as $key=>$item) { 
              print '<li>' . l('<span><strong>'.$item['title'].'</strong><span class="navi-description">'.$item['attributes']['title'].'</span></span>', $item['href'], array('html' => true)) . '</li>';
            }      
            ?>
              <ul class="sub-menu">
               <?php print $offerta_menu; ?>
              </ul>
            </li>
          </ul>
          <!-- ***************** - END Main Navigation - ***************** -->
          <!-- ***************** - Homepage jQuery Slider - ***************** -->
          <div class="home-banner-wrap">
            <ul>
              <li class="jqslider">
                <div class="home-banner-sub-full">
                  <div class="home-banner-sub-content-full"> <img src="images/Logos/home_strillo.jpg" alt="Logos Genova" width="920" height="360" /> </div>
                  <!-- end home-banner-sub-content-full -->
                </div>
                <!-- end home-banner-sub-full -->
              </li>
              <li class="jqslider">
                <div class="home-banner-main">
                  <h2>Notizia Logos in evidenza</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <!-- end home-banner-main -->
                <div class="home-banner-sub">
                  <div class="home-banner-sub-content"> <a href="#"><img src="images/Logos/Neri-img42-01-1.jpg" alt="Logos Genova" width="436" height="270" /></a> </div>
                  <!-- end home-banner-sub-content -->
                </div>
                <!-- end home-banner-sub -->
              </li>
              <li class="jqslider">
                <div class="home-banner-main">
                  <h2>Notizia Logos in evidenza</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <!-- end home-banner-main -->
                <div class="home-banner-sub">
                  <div class="home-banner-sub-content"> <a href="#"><img src="images/Logos/aims.jpg" alt="Logos Genova" width="436" height="270" /></a> </div>
                  <!-- end home-banner-sub-content -->
                </div>
                <!-- end home-banner-sub -->
              </li>
            </ul>
          </div>
          <!-- end home-banner-wrap -->
          <!-- ***************** - END Homepage jQuery Slider - ***************** -->
        </div>
        <!-- header-area -->
      </div>
      <!-- end rays -->
    </div>
    <!-- end header-holder -->
  </div>
  <!-- end header -->
 
 

 
<div id="main">  
<div class="main-area home-main-area">
  <div class="main-holder home-holder">
    <div class="content_full_width">
      <!-- ***************** - Homepage Content Area - ***************** -->
      <div class="callout-wrap"><span><img src="images/ultime.gif" alt="news Logos" width="940" height="64" /></span></div>
      <div class="one_fourth">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img1.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>scadenza iscrizioni counseling</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
      <div class="one_fourth">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img2.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>ritorno morti viventi</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
      <div class="one_fourth">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img3.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>collisione asteroide</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
      <div class="one_fourth_last">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img4.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>seminario rocco siffredi</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
<div class="callout-wrap"><span><img src="images/Logos/articoli.gif" alt="news Logos" width="940" height="64" /></span> </div>
      <!-- end callout-wrap -->
      <br class="clear" />
      <div class="one_fourth">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img1.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>una nuova notizia</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
      <!-- end first one_fourth_column -->
      <div class="one_fourth">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img2.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>una nuova notizia</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
      <!-- end second one_fourth_column -->
      <div class="one_fourth">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img3.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>una nuova notizia</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
      <!-- end third one_fourth_column -->
      <div class="one_fourth_last">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img4.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>una nuova notizia</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
      <!-- end fourth one_fourth_column -->
      <div class="one_fourth">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img1.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>una nuova notizia</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
      <!-- end first one_fourth_column -->
      <div class="one_fourth">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img4.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>una nuova notizia</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
      <!-- end second one_fourth_column -->
      <div class="one_fourth">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img3.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>una nuova notizia</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
      <!-- end third one_fourth_column -->
      <div class="one_fourth_last">
        <div class="modern_img_frame modern_four_col_large">
          <div class="preload_four_col_large">
            <div class="attachment-fadeIn"><a href="#"><img src="images/Logos/img2.jpg" alt="Logos Genova" width="190" height="117" /></a></div>
          </div>
        </div>
        <!-- end modern_img_frame -->
        <h6>una nuova notizia</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <p><a href="#"><strong>Approfondisci →</strong></a></p>
      </div>
      <!-- end fourth one_fourth_column -->
      <br class="clear" />
      <!-- END testimonials -->
      <!-- ***************** - END Homepage Content Area - ***************** -->
    </div>
    <!-- end content -->
  </div>
  <!-- end main-holder -->
</div><!-- main-area -->





<!-- ***************** - Top Footer - ***************** --> 
<div id="footer">
<div class="footer-area">
  <div class="footer-wrapper">
    <div class="footer-holder">
      <!-- /***************** - Footer Content Starts Here - ***************** -->
      <div class="one_fourth">
        <h3>Ultime dal blog</h3>
        <div class="footer_post">
          <h4><a href="#">Blog Post 1</a></h4>
          <p><a href="#">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet...</a></p>
        </div>
        <!-- end footer_post -->
        <div class="footer_post">
          <h4><a href="#">Blog Post 2</a></h4>
          <p><a href="#">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet...</a></p>
        </div>
        <!-- end footer_post -->
      </div>
      <!-- end first one_fourth_column -->
      <div class="one_fourth">
        <h3>Ultime dal blog</h3>
        <div class="footer_post">
          <h4><a href="#">Blog Post 1</a></h4>
          <p><a href="#">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet...</a></p>
        </div>
        <!-- end footer_post -->
        <div class="footer_post">
          <h4><a href="#">Blog Post 2</a></h4>
          <p><a href="#">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet...</a></p>
        </div>
        <!-- end footer_post -->
      </div>
      <!-- end second one_fourth_column -->
      <div class="one_fourth">
        <h3>Follow Us</h3>
        <ul class="social_icons">
          <li><a href="#" onclick="window.open(this.href);return false;" class="rss">rss</a></li>
          <li><a href="#" class="twitter" onclick="window.open(this.href);return false;">Twitter</a></li>
          <li><a href="#" class="facebook" onclick="window.open(this.href);return false;">Facebook</a></li>
          <li><a href="#" class="flickr" onclick="window.open(this.href);return false;">Flickr</a></li>
          <li><a href="#" class="youtube" onclick="window.open(this.href);return false;">YouTube</a></li>
          <li><a href="#" class="linkedin" onclick="window.open(this.href);return false;">LinkedIn</a></li>
          <li><a href="#" class="foursquare" onclick="window.open(this.href);return false;">FourSquare</a></li>
          <li><a href="#" class="delicious" onclick="window.open(this.href);return false;">Delicious</a></li>
          <li><a href="#" class="digg" onclick="window.open(this.href);return false;">Digg</a></li>
        </ul>
      </div>
      <!-- end third one_fourth_column -->
      <div class="one_fourth_last">
        <h3>Links utili</h3>
        <ul class="blogroll">
          <li><a href="#">Eteropoiesi</a> to check out the over 100 built in code snippets.</li>
        </ul>
      </div>
      <!-- end mc_signup -->
    </div>
    <!-- end fourth one_fourth_column -->
    <!-- ***************** - END Footer Content - ***************** -->
  </div>
  <!-- end footer-wrapper -->
</div><!-- end footer-area -->
</div><!-- end footer -->


<!-- /***************** - END Top Footer Area - ***************** --> 






<!-- /***************** - Bottom Footer - ***************** --> 

<div id="footer_bottom">
  <div class="info">
    <div id="foot_left">
      <p>Copyright &copy; 2011 Logos Genova</p>
    </div>
    <!-- end foot_left -->
    <div id="foot_right">
      <div class="top-footer"><a href="#" class="link-top">sali</a></div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Pubblicazioni</a></li>
        <li><a href="#">Appuntamenti</a></li>
        <li><a href="#">Offerta</a></li>
        <li><a href="#">Contatti / Dove siamo</a></li>
      </ul>
    </div>
    <!-- end foot_right -->
  </div>
  <!-- end info -->
</div><!-- end footer_bottom -->

<!-- /***************** - END Bottom Footer - ***************** --> 




</div><!-- end main -->
</div><!-- end wrapper -->