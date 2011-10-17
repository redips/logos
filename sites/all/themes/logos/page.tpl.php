<div id="wrapper">
    <div id="header">
        <div class="top-block">
            <div class="top-holder">
                <!-- ***************** - Top Toolbar Left Side - ***************** -->
                <div class="sub-nav">          <ul>
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
                        <li><a href="#">Accedi all'area riservata</a></li>
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
                    <a href="index-jquery-1.html" class="logo"><img src="images/Logos/logo.png" alt="Karma Website Template" /></a>
                    <!-- ***************** - END LOGO - ***************** -->




                    <!-- ***************** - Main Navigation - ***************** -->
                    <ul id="menu-main-nav">
                        <?php
                        //print_r($main_menu);
                        foreach ($main_menu as $key => $item) {
                            print '<li>' . l('<span><strong>' . $item['title'] . '</strong><span class="navi-description">' . $item['attributes']['title'] . '</span></span>', $item['href'], array('html' => true)) . '</li>';
                        }
                        ?>
                        <ul class="sub-menu">
                            <?php print $offerta_menu; ?>
                        </ul>
                        </li>
                    </ul>
                    <!-- ***************** - END Main Navigation - ***************** -->




                </div><!-- header-area -->
            </div><!-- end rays -->
        </div><!-- end header-holder -->
    </div><!-- end header -->




    <div id="main">
        <div class="main-area">

            <!-- ***************** - START Title Bar - ***************** -->
            <div class="tools">
                <div class="holder">
                    <div class="frame">
                        <h1><img src="images/Logos/psi.gif" alt="Logos Genova" width="980" height="64" /></h1>
                    </div>
                    <!-- end frame -->

                </div><!-- end holder -->
            </div><!-- end tools -->
            <!-- ***************** - END Title Bar - ***************** -->




            <div class="main-holder">

                <!-- ***************** - START sub-nav - ***************** -->
                <?php if($page['sidebar_first']): ?>
                <div id="sub_nav">
                    <?php print render($page['sidebar_first']); ?>
                </div><!-- end sub_nav -->
                <?php endif; ?>

                <!-- ***************** - END sub-nav - ***************** -->



                <!-- ***************** - START Content - ***************** -->
                <div id="content" class="content_sidebar content_right_sidebar">
                    <?php print $messages; ?> 
                    <?php print render($page['content']); ?>
                </div><!-- end content -->

                <!-- ***************** - END content - ***************** -->





                <!-- ***************** - START sidebar - ***************** -->
                <?php if($page['sidebar_second']): ?>
                <div id="sidebar">
                    <?php print render($page['sidebar_second']); ?>
                </div><!-- end sub_nav -->
                <?php endif; ?>
                <!-- ***************** - END sidebar - ***************** -->




            </div><!-- end main-holder -->
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
            </div>
            <!-- end footer-area -->
        </div>
        <!-- end footer -->


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
        </div>
        <!-- end footer_bottom -->

        <!-- /***************** - END Bottom Footer - ***************** --> 




    </div><!-- end main -->
</div><!-- end wrapper -->