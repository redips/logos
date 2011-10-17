/* ------------------------------------------------------------------------
Main Navigation
 * ------------------------------------------------------------------------- */
jQuery(document).ready(function(){
    initTabs();
    jQuery('ul.accordion').accordion({
        active:".selected",
        autoHeight:false,
        header:".opener",
        collapsible:true,
        event:"click"
    });
    initScrollTop()
    });
function initNav(){
    var nav=jQuery("#menu-main-nav");
    var duration=260;
    jQuery(nav).find(".sub-menu").css({
        left:0
    });
    jQuery(nav).find("> li").each(function(){
        var height=jQuery(this).find("> .drop").height();
        jQuery(this).find("> .drop").css({
            display:"none",
            height:0,
            overflow:"hidden"
        });
        jQuery(this).find(".drop li > .drop").css({
            display:"none",
            width:0
        });
        if(!jQuery.browser.msie){
            jQuery(this).find("> .drop").css({
                "opacity":0
            });
            jQuery(this).find(".drop li > .drop").css({
                "opacity":0
            })
            }
            jQuery(this).mouseenter(function(){
            jQuery(this).addClass("hover");
            var drop=jQuery(this).find("> .drop");
            if(jQuery.browser.msie){
                jQuery(drop).css({
                    display:"block"
                }).stop().animate({
                    "height":height
                },duration,function(){
                    jQuery(this).css({
                        "overflow":"visible"
                    })
                    })
                }else{
                jQuery(drop).css({
                    display:"block"
                }).stop().animate({
                    "height":height,
                    "opacity":1
                },duration,function(){
                    jQuery(this).css({
                        "overflow":"visible"
                    })
                    })
                }
            }).mouseleave(function(){
        var _this=jQuery(this);
        if(jQuery.browser.msie){
            jQuery(this).find("> .drop").stop().css({
                "overflow":"hidden"
            }).animate({
                "height":0
            },duration,function(){
                jQuery(_this).removeClass("hover")
                })
            }else{
            jQuery(this).find("> .drop").stop().css({
                "overflow":"hidden"
            }).animate({
                "height":0,
                "opacity":0
            },duration,function(){
                jQuery(_this).removeClass("hover")
                })
            }
        });
    jQuery(this).find(".drop ul > li ").mouseenter(function(){
        jQuery(this).addClass("hover");
        var pageW=getPageSize()[2];
        if(pageW<jQuery(this).offset().left+236*2){
            jQuery(this).find("> .drop").css({
                left:'auto',
                right:236
            })
            }
            if(jQuery.browser.msie){
            jQuery(this).find("> .drop").css({
                display:'block'
            }).stop().animate({
                "width":236
            },duration,function(){
                jQuery(this).css({
                    overflow:'visible'
                })
                })
            }else{
            jQuery(this).find("> .drop").css({
                display:'block'
            }).stop().animate({
                "width":236,
                "opacity":1
            },duration,function(){
                jQuery(this).css({
                    overflow:'visible'
                })
                })
            }
        }).mouseleave(function(){
    jQuery(this).removeClass("hover");
    if(jQuery.browser.msie){
        jQuery(this).find("> .drop").stop().css({
            overflow:'hidden'
        }).animate({
            width:0
        },duration,function(){
            jQuery(this).css({
                display:'none'
            })
            })
        }else{
        jQuery(this).find("> .drop").stop().css({
            overflow:'hidden'
        }).animate({
            width:0,
            "opacity":0
        },duration,function(){
            jQuery(this).css({
                display:'none'
            })
            })
        }
    })
})
}



(function(B){
    B(document).ready(function(){
        var mainNav=B('#menu-main-nav');
        var lis=mainNav.find('li');
        var shownav=jQuery("#menu-main-nav");
        lis.children('ul').wrap('<div class="c" / >');
        var cElems=B('.c');
        cElems.wrap('<div class="drop" / >');
        cElems.before('<div class="t"></div>');
        cElems.after('<div class="b"></div>');
        jQuery(shownav).find(".sub-menu").css({
            display:"block"
        });
        initNav()
        })
    })(jQuery);
(function(C){
    C(document).ready(function(){
        jQuery("#menu-main-nav li:has(ul)").addClass("parent")
        })
    })(jQuery);





function getPageSize(){
    var xScroll,yScroll;
    if(window.innerHeight&&window.scrollMaxY){
        xScroll=document.body.scrollWidth;
        yScroll=window.innerHeight+window.scrollMaxY
        }else if(document.body.scrollHeight>document.body.offsetHeight){
        xScroll=document.body.scrollWidth;
        yScroll=document.body.scrollHeight
        }else if(document.documentElement&&document.documentElement.scrollHeight>document.documentElement.offsetHeight){
        xScroll=document.documentElement.scrollWidth;
        yScroll=document.documentElement.scrollHeight
        }else{
        xScroll=document.body.offsetWidth;
        yScroll=document.body.offsetHeight
        }
        var windowWidth,windowHeight;
    if(self.innerHeight){
        windowWidth=self.innerWidth;
        windowHeight=self.innerHeight
        }else if(document.documentElement&&document.documentElement.clientHeight){
        windowWidth=document.documentElement.clientWidth;
        windowHeight=document.documentElement.clientHeight
        }else if(document.body){
        windowWidth=document.body.clientWidth;
        windowHeight=document.body.clientHeight
        }
        if(yScroll<windowHeight){
        pageHeight=windowHeight
        }else{
        pageHeight=yScroll
        }
        if(xScroll<windowWidth){
        pageWidth=windowWidth
        }else{
        pageWidth=xScroll
        }
        return[pageWidth,pageHeight,windowWidth,windowHeight]
    }





/* ------------------------------------------------------------------------
Portfolio Image Fade
 * ------------------------------------------------------------------------- */
(function(jQuery){
    jQuery(document).ready(function(){});
    jQuery(window).bind("load",function(){
        var t=jQuery('[class^="attachment"]').length,i=0;
        var init=setInterval(function(){
            jQuery('[class^="attachment"]').eq(i).fadeIn(500);
            i++;
            if(i==t){
                clearInterval(init);
                delete init
                }
            },200)
    })
})(jQuery);





/* ------------------------------------------------------------------------
Portfolio Image Hover
 * ------------------------------------------------------------------------- */
(function(jQuery){
    jQuery(document).ready(function(){
        jQuery('.preload').hover(function(){
            jQuery(this).children().first().children().first().stop(true);
            jQuery(this).children().first().children().first().fadeTo('normal',.90)
            },function(){
            jQuery(this).children().first().children().first().stop(true);
            jQuery(this).children().first().children().first().fadeTo('normal',0)
            })
        })
    })(jQuery);





/* ------------------------------------------------------------------------
Button Hover
 * ------------------------------------------------------------------------- */
if (jQuery.browser.msie) { /* time to download a new browser */ } else {
    jQuery(document).ready(function(){
        jQuery(".ka_button, #ka-submit, #searchform #searchsubmit, .ka-form-submit, #mc_signup #mc_signup_submit, .fade-me").hover(function(){
            jQuery(this).stop().animate({
                opacity:0.7
            },250)
            },function(){
            jQuery(this).stop().animate({
                opacity:1.0
            },250)
            })
        });
    jQuery(document).ready(function(){
        jQuery(".social_icons a").hover(function(){
            jQuery(this).stop().animate({
                opacity:0.65
            },200)
            },function(){
            jQuery(this).stop().animate({
                opacity:1
            },200)
            })
        });
}




/* ------------------------------------------------------------------------
Tabs
 * ------------------------------------------------------------------------- */
function initTabs(){
    jQuery('ul.tabset').each(function(){
        var _list=jQuery(this);
        var _links=_list.find('a.tab');
        _links.eq(0).addClass('active');
        _links.each(function(){
            var _link=jQuery(this);
            var _href=_link.attr('href');
            var _tab=jQuery(_href);
            if(_link.hasClass('active'))_tab.css({
                "opacity":1,
                "display":"block"
            });else _tab.css({
                "opacity":0,
                "display":"none"
            });
            _link.click(function(){
                _links.filter('.active').each(function(){
                    jQuery(jQuery(this).removeClass('active').attr('href')).animate({
                        "opacity":0
                    },200,function(){
                        jQuery(this).css({
                            "display":"none"
                        });
                        _link.addClass('active');
                        _tab.css({
                            "display":"block"
                        }).animate({
                            "opacity":1
                        })
                        })
                    });
                return false
                })
            })
        })
    }





/* ------------------------------------------------------------------------
Scroll to Top
 * ------------------------------------------------------------------------- */
function initScrollTop(){
    var change_speed=1200;
    jQuery('a.link-top').click(function(){
        if(!jQuery.browser.opera){
            jQuery('body').animate({
                scrollTop:0
            },{
                queue:false,
                duration:change_speed
            })
            }
            jQuery('html').animate({
            scrollTop:0
        },{
            queue:false,
            duration:change_speed
        });
        return false
        })
    }




/* ------------------------------------------------------------------------
 * Class: prettyPhoto
 * Use: Lightbox clone for jQuery
 * Author: Stephane Caron (http://www.no-margin-for-errors.com)
 * Version: 3.0.1
 * ------------------------------------------------------------------------- */

(function(jQuery){
    jQuery.prettyPhoto={
        version:'3.0'
    };
    
    jQuery.fn.prettyPhoto=function(pp_settings){
        pp_settings=jQuery.extend({
            animation_speed:'normal',
            slideshow:false,
            autoplay_slideshow:false,
            opacity:0.80,
            show_title:false,
            allow_resize:true,
            default_width:500,
            default_height:344,
            counter_separator_label:'/',
            theme:'light_square',
            hideflash:false,
            wmode:'transparent',
            autoplay:true,
            modal:false,
            overlay_gallery:false,
            keyboard_shortcuts:true,
            changepicturecallback:function(){},
            callback:function(){},
            markup:'<div class="pp_pic_holder"> \
      <div class="ppt">�</div> \
      <div class="pp_top"> \
       <div class="pp_left"></div> \
       <div class="pp_middle"></div> \
       <div class="pp_right"></div> \
      </div> \
      <div class="pp_content_container"> \
       <div class="pp_left"> \
       <div class="pp_right"> \
        <div class="pp_content"> \
         <div class="pp_loaderIcon"></div> \
         <div class="pp_fade"> \
          <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
          <div class="pp_hoverContainer"> \
           <a class="pp_next" href="#">next</a> \
           <a class="pp_previous" href="#">previous</a> \
          </div> \
          <div id="pp_full_res"></div> \
          <div class="pp_details clearfix"> \
           <p class="pp_description"></p> \
           <a class="pp_close" href="#">Close</a> \
           <div class="pp_nav"> \
            <a href="#" class="pp_arrow_previous">Previous</a> \
            <p class="currentTextHolder">0/0</p> \
            <a href="#" class="pp_arrow_next">Next</a> \
           </div> \
          </div> \
         </div> \
        </div> \
       </div> \
       </div> \
      </div> \
      <div class="pp_bottom"> \
       <div class="pp_left"></div> \
       <div class="pp_middle"></div> \
       <div class="pp_right"></div> \
      </div> \
     </div> \
     <div class="pp_overlay"></div>',
            gallery_markup:'<div class="pp_gallery"> \
        <a href="#" class="pp_arrow_previous">Previous</a> \
        <ul> \
         {gallery} \
        </ul> \
        <a href="#" class="pp_arrow_next">Next</a> \
       </div>',
            image_markup:'<img id="fullResImage" src="" />',
            flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup:'<div class="pp_inline clearfix">{content}</div>',
            custom_markup:''
        },pp_settings);
        var matchedObjects=this,percentBased=false,correctSizes,pp_open,pp_contentHeight,pp_contentWidth,pp_containerHeight,pp_containerWidth,windowHeight=jQuery(window).height(),windowWidth=jQuery(window).width(),pp_slideshow;
        doresize=true,scroll_pos=_get_scroll();
        jQuery(window).unbind('resize').resize(function(){
            _center_overlay();
            _resize_overlay();
        });
        if(pp_settings.keyboard_shortcuts){
            jQuery(document).unbind('keydown').keydown(function(e){
                if(typeof jQuerypp_pic_holder!='undefined'){
                    if(jQuerypp_pic_holder.is(':visible')){
                        switch(e.keyCode){
                            case 37:
                                jQuery.prettyPhoto.changePage('previous');
                                break;
                            case 39:
                                jQuery.prettyPhoto.changePage('next');
                                break;
                            case 27:
                                if(!settings.modal)
                                jQuery.prettyPhoto.close();
                            break;
                        };
                        
                        return false;
                    };
                
            };
            
        });
}
jQuery.prettyPhoto.initialize=function(){
    settings=pp_settings;
    if(jQuery.browser.msie&&parseInt(jQuery.browser.version)==6)settings.theme="light_square";
    _buildOverlay(this);
    if(settings.allow_resize)
        jQuery(window).scroll(function(){
            _center_overlay();
        });
    _center_overlay();
    set_position=jQuery.inArray(jQuery(this).attr('href'),pp_images);
    jQuery.prettyPhoto.open();
    return false;
}
jQuery.prettyPhoto.open=function(event){
    if(typeof settings=="undefined"){
        settings=pp_settings;
        if(jQuery.browser.msie&&jQuery.browser.version==6)settings.theme="light_square";
        _buildOverlay(event.target);
        pp_images=jQuery.makeArray(arguments[0]);
        pp_titles=(arguments[1])?jQuery.makeArray(arguments[1]):jQuery.makeArray("");
        pp_descriptions=(arguments[2])?jQuery.makeArray(arguments[2]):jQuery.makeArray("");
        isSet=(pp_images.length>1)?true:false;
        set_position=0;
    }
    if(jQuery.browser.msie&&jQuery.browser.version==6)jQuery('select').css('visibility','hidden');
    if(settings.hideflash)jQuery('object,embed').css('visibility','hidden');
    _checkPosition(jQuery(pp_images).size());
    jQuery('.pp_loaderIcon').show();
    if(jQueryppt.is(':hidden'))jQueryppt.css('opacity',0).show();
    jQuerypp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);
    jQuerypp_pic_holder.find('.currentTextHolder').text((set_position+1)+settings.counter_separator_label+jQuery(pp_images).size());
    jQuerypp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));
    (settings.show_title&&pp_titles[set_position]!=""&&typeof pp_titles[set_position]!="undefined")?jQueryppt.html(unescape(pp_titles[set_position])):jQueryppt.html('�');
    movie_width=(parseFloat(grab_param('width',pp_images[set_position])))?grab_param('width',pp_images[set_position]):settings.default_width.toString();
    movie_height=(parseFloat(grab_param('height',pp_images[set_position])))?grab_param('height',pp_images[set_position]):settings.default_height.toString();
    if(movie_width.indexOf('%')!=-1||movie_height.indexOf('%')!=-1){
        movie_height=parseFloat((jQuery(window).height()*parseFloat(movie_height)/100)-150);
        movie_width=parseFloat((jQuery(window).width()*parseFloat(movie_width)/100)-150);
        percentBased=true;
    }else{
        percentBased=false;
    }
    jQuerypp_pic_holder.fadeIn(function(){
        imgPreloader="";
        switch(_getFileType(pp_images[set_position])){
            case'image':
                imgPreloader=new Image();
                nextImage=new Image();
                if(isSet&&set_position>jQuery(pp_images).size())nextImage.src=pp_images[set_position+1];
                prevImage=new Image();
                if(isSet&&pp_images[set_position-1])prevImage.src=pp_images[set_position-1];
                jQuerypp_pic_holder.find('#pp_full_res')[0].innerHTML=settings.image_markup;
                jQuerypp_pic_holder.find('#fullResImage').attr('src',pp_images[set_position]);
                imgPreloader.onload=function(){
                correctSizes=_fitToViewport(imgPreloader.width,imgPreloader.height);
                _showContent();
            };
            
            imgPreloader.onerror=function(){
                alert('Image cannot be loaded. Make sure the path is correct and image exist.');
                jQuery.prettyPhoto.close();
            };
            
            imgPreloader.src=pp_images[set_position];
            break;
            case'youtube':
                correctSizes=_fitToViewport(movie_width,movie_height);
                movie='http://www.youtube.com/v/'+grab_param('v',pp_images[set_position]);
                if(settings.autoplay)movie+="&autoplay=1";
                toInject=settings.flash_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);
                break;
            case'vimeo':
                correctSizes=_fitToViewport(movie_width,movie_height);
                movie_id=pp_images[set_position];
                var regExp=/http:\/\/(www\.)?vimeo.com\/(\d+)/;
                var match=movie_id.match(regExp);
                movie='http://player.vimeo.com/video/'+match[2]+'?title=0&byline=0&portrait=0';
                if(settings.autoplay)movie+="&autoplay=1;";
                vimeo_width=correctSizes['width']+'/embed/?moog_width='+correctSizes['width'];
                toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,correctSizes['height']).replace(/{path}/g,movie);
                break;
            case'quicktime':
                correctSizes=_fitToViewport(movie_width,movie_height);
                correctSizes['height']+=15;
                correctSizes['contentHeight']+=15;
                correctSizes['containerHeight']+=15;
                toInject=settings.quicktime_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);
                break;
            case'flash':
                correctSizes=_fitToViewport(movie_width,movie_height);
                flash_vars=pp_images[set_position];
                flash_vars=flash_vars.substring(pp_images[set_position].indexOf('flashvars')+10,pp_images[set_position].length);
                filename=pp_images[set_position];
                filename=filename.substring(0,filename.indexOf('?'));
                toInject=settings.flash_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);
                break;
            case'iframe':
                correctSizes=_fitToViewport(movie_width,movie_height);
                frame_url=pp_images[set_position];
                frame_url=frame_url.substr(0,frame_url.indexOf('iframe')-1);
                toInject=settings.iframe_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{path}/g,frame_url);
                break;
            case'custom':
                correctSizes=_fitToViewport(movie_width,movie_height);
                toInject=settings.custom_markup;
                break;
            case'inline':
                myClone=jQuery(pp_images[set_position]).clone().css({
                'width':settings.default_width
                }).wrapInner('<div id="pp_full_res"><div class="pp_inline clearfix"></div></div>').appendTo(jQuery('body'));
                correctSizes=_fitToViewport(jQuery(myClone).width(),jQuery(myClone).height());
                jQuery(myClone).remove();
                toInject=settings.inline_markup.replace(/{content}/g,jQuery(pp_images[set_position]).html());
                break;
        };
        
        if(!imgPreloader){
            jQuerypp_pic_holder.find('#pp_full_res')[0].innerHTML=toInject;
            _showContent();
        };
    
    });
return false;
};

jQuery.prettyPhoto.changePage=function(direction){
    currentGalleryPage=0;
    if(direction=='previous'){
        set_position--;
        if(set_position<0){
            set_position=0;
            return;
        };
    
}else if(direction=='next'){
    set_position++;
    if(set_position>jQuery(pp_images).size()-1){
        set_position=0;
    }
}else{
    set_position=direction;
};

if(!doresize)doresize=true;
jQuery('.pp_contract').removeClass('pp_contract').addClass('pp_expand');
_hideContent(function(){
    jQuery.prettyPhoto.open();
});
};

jQuery.prettyPhoto.changeGalleryPage=function(direction){
    if(direction=='next'){
        currentGalleryPage++;
        if(currentGalleryPage>totalPage){
            currentGalleryPage=0;
        };
    
}else if(direction=='previous'){
    currentGalleryPage--;
    if(currentGalleryPage<0){
        currentGalleryPage=totalPage;
    };

}else{
    currentGalleryPage=direction;
};

itemsToSlide=(currentGalleryPage==totalPage)?pp_images.length-((totalPage)*itemsPerPage):itemsPerPage;
jQuerypp_pic_holder.find('.pp_gallery li').each(function(i){
    jQuery(this).animate({
        'left':(i*itemWidth)-((itemsToSlide*itemWidth)*currentGalleryPage)
        });
});
};

jQuery.prettyPhoto.startSlideshow=function(){
    if(typeof pp_slideshow=='undefined'){
        jQuerypp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){
            jQuery.prettyPhoto.stopSlideshow();
            return false;
        });
        pp_slideshow=setInterval(jQuery.prettyPhoto.startSlideshow,settings.slideshow);
    }else{
        jQuery.prettyPhoto.changePage('next');
    };

}
jQuery.prettyPhoto.stopSlideshow=function(){
    jQuerypp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){
        jQuery.prettyPhoto.startSlideshow();
        return false;
    });
    clearInterval(pp_slideshow);
    pp_slideshow=undefined;
}
jQuery.prettyPhoto.close=function(){
    clearInterval(pp_slideshow);
    jQuerypp_pic_holder.stop().find('object,embed').css('visibility','hidden');
    jQuery('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){
        jQuery(this).remove();
    });
    jQuerypp_overlay.fadeOut(settings.animation_speed,function(){
        if(jQuery.browser.msie&&jQuery.browser.version==6)jQuery('select').css('visibility','visible');
        if(settings.hideflash)jQuery('object,embed').css('visibility','visible');
        jQuery(this).remove();
        jQuery(window).unbind('scroll');
        settings.callback();
        doresize=true;
        pp_open=false;
        delete settings;
    });
};

_showContent=function(){
    jQuery('.pp_loaderIcon').hide();
    jQueryppt.fadeTo(settings.animation_speed,1);
    projectedTop=scroll_pos['scrollTop']+((windowHeight/2)-(correctSizes['containerHeight']/2));
    if(projectedTop<0)projectedTop=0;
    jQuerypp_pic_holder.find('.pp_content').animate({
        'height':correctSizes['contentHeight']
        },settings.animation_speed);
    jQuerypp_pic_holder.animate({
        'top':projectedTop,
        'left':(windowWidth/2)-(correctSizes['containerWidth']/2),
        'width':correctSizes['containerWidth']
        },settings.animation_speed,function(){
        jQuerypp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(correctSizes['height']).width(correctSizes['width']);
        jQuerypp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed);
        if(isSet&&_getFileType(pp_images[set_position])=="image"){
            jQuerypp_pic_holder.find('.pp_hoverContainer').show();
        }else{
            jQuerypp_pic_holder.find('.pp_hoverContainer').hide();
        }
        if(correctSizes['resized'])jQuery('a.pp_expand,a.pp_contract').fadeIn(settings.animation_speed);
        if(settings.autoplay_slideshow&&!pp_slideshow&&!pp_open)jQuery.prettyPhoto.startSlideshow();
        settings.changepicturecallback();
        pp_open=true;
    });
    _insert_gallery();
};

function _hideContent(callback){
    jQuerypp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');
    jQuerypp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){
        jQuery('.pp_loaderIcon').show();
        callback();
    });
};

function _checkPosition(setCount){
    if(set_position==setCount-1){
        jQuerypp_pic_holder.find('a.pp_next').css('visibility','hidden');
        jQuerypp_pic_holder.find('a.pp_next').addClass('disabled').unbind('click');
    }else{
        jQuerypp_pic_holder.find('a.pp_next').css('visibility','visible');
        jQuerypp_pic_holder.find('a.pp_next.disabled').removeClass('disabled').bind('click',function(){
            jQuery.prettyPhoto.changePage('next');
            return false;
        });
    };
    
    if(set_position==0){
        jQuerypp_pic_holder.find('a.pp_previous').css('visibility','hidden').addClass('disabled').unbind('click');
    }else{
        jQuerypp_pic_holder.find('a.pp_previous.disabled').css('visibility','visible').removeClass('disabled').bind('click',function(){
            jQuery.prettyPhoto.changePage('previous');
            return false;
        });
    };
    (setCount>1)?jQuery('.pp_nav').show():jQuery('.pp_nav').hide();
};

function _fitToViewport(width,height){
    resized=false;
    _getDimensions(width,height);
    imageWidth=width,imageHeight=height;
    if(((pp_containerWidth>windowWidth)||(pp_containerHeight>windowHeight))&&doresize&&settings.allow_resize&&!percentBased){
        resized=true,fitting=false;
        while(!fitting){
            if((pp_containerWidth>windowWidth)){
                imageWidth=(windowWidth-200);
                imageHeight=(height/width)*imageWidth;
            }else if((pp_containerHeight>windowHeight)){
                imageHeight=(windowHeight-200);
                imageWidth=(width/height)*imageHeight;
            }else{
                fitting=true;
            };
            
            pp_containerHeight=imageHeight,pp_containerWidth=imageWidth;
        };
        
        _getDimensions(imageWidth,imageHeight);
    };
    
    return{
        width:Math.floor(imageWidth),
        height:Math.floor(imageHeight),
        containerHeight:Math.floor(pp_containerHeight),
        containerWidth:Math.floor(pp_containerWidth)+40,
        contentHeight:Math.floor(pp_contentHeight),
        contentWidth:Math.floor(pp_contentWidth),
        resized:resized
    };

};

function _getDimensions(width,height){
    width=parseFloat(width);
    height=parseFloat(height);
    jQuerypp_details=jQuerypp_pic_holder.find('.pp_details');
    jQuerypp_details.width(width);
    detailsHeight=parseFloat(jQuerypp_details.css('marginTop'))+parseFloat(jQuerypp_details.css('marginBottom'));
    jQuerypp_details=jQuerypp_details.clone().appendTo(jQuery('body')).css({
        'position':'absolute',
        'top':-10000
    });
    detailsHeight+=jQuerypp_details.height();
    detailsHeight=(detailsHeight<=34)?36:detailsHeight;
    if(jQuery.browser.msie&&jQuery.browser.version==7)detailsHeight+=8;
    jQuerypp_details.remove();
    pp_contentHeight=height+detailsHeight;
    pp_contentWidth=width;
    pp_containerHeight=pp_contentHeight+jQueryppt.height()+jQuerypp_pic_holder.find('.pp_top').height()+jQuerypp_pic_holder.find('.pp_bottom').height();
    pp_containerWidth=width;
}
function _getFileType(itemSrc){
    if(itemSrc.match(/youtube\.com\/watch/i)){
        return'youtube';
    }else if(itemSrc.match(/vimeo\.com/i)){
        return'vimeo';
    }else if(itemSrc.indexOf('.mov')!=-1){
        return'quicktime';
    }else if(itemSrc.indexOf('.swf')!=-1){
        return'flash';
    }else if(itemSrc.indexOf('iframe')!=-1){
        return'iframe';
    }else if(itemSrc.indexOf('custom')!=-1){
        return'custom';
    }else if(itemSrc.substr(0,1)=='#'){
        return'inline';
    }else{
        return'image';
    };

};

function _center_overlay(){
    if(doresize&&typeof jQuerypp_pic_holder!='undefined'){
        scroll_pos=_get_scroll();
        titleHeight=jQueryppt.height(),contentHeight=jQuerypp_pic_holder.height(),contentwidth=jQuerypp_pic_holder.width();
        projectedTop=(windowHeight/2)+scroll_pos['scrollTop']-(contentHeight/2);
        jQuerypp_pic_holder.css({
            'top':projectedTop,
            'left':(windowWidth/2)+scroll_pos['scrollLeft']-(contentwidth/2)
            });
    };

};

function _get_scroll(){
    if(self.pageYOffset){
        return{
            scrollTop:self.pageYOffset,
            scrollLeft:self.pageXOffset
            };
        
}else if(document.documentElement&&document.documentElement.scrollTop){
    return{
        scrollTop:document.documentElement.scrollTop,
        scrollLeft:document.documentElement.scrollLeft
        };
    
}else if(document.body){
    return{
        scrollTop:document.body.scrollTop,
        scrollLeft:document.body.scrollLeft
        };
    
};

};

function _resize_overlay(){
    windowHeight=jQuery(window).height(),windowWidth=jQuery(window).width();
    if(typeof jQuerypp_overlay!="undefined")jQuerypp_overlay.height(jQuery(document).height());
};

function _insert_gallery(){
    if(isSet&&settings.overlay_gallery&&_getFileType(pp_images[set_position])=="image"){
        itemWidth=52+5;
        navWidth=(settings.theme=="facebook")?58:38;
        itemsPerPage=Math.floor((correctSizes['containerWidth']-100-navWidth)/itemWidth);
        itemsPerPage=(itemsPerPage<pp_images.length)?itemsPerPage:pp_images.length;
        totalPage=Math.ceil(pp_images.length/itemsPerPage)-1;
        if(totalPage==0){
            navWidth=0;
            jQuerypp_pic_holder.find('.pp_gallery .pp_arrow_next,.pp_gallery .pp_arrow_previous').hide();
        }else{
            jQuerypp_pic_holder.find('.pp_gallery .pp_arrow_next,.pp_gallery .pp_arrow_previous').show();
        };
        
        galleryWidth=itemsPerPage*itemWidth+navWidth;
        jQuerypp_pic_holder.find('.pp_gallery').width(galleryWidth).css('margin-left',-(galleryWidth/2));
        jQuerypp_pic_holder.find('.pp_gallery ul').width(itemsPerPage*itemWidth).find('li.selected').removeClass('selected');
        goToPage=(Math.floor(set_position/itemsPerPage)<=totalPage)?Math.floor(set_position/itemsPerPage):totalPage;
        if(itemsPerPage){
            jQuerypp_pic_holder.find('.pp_gallery').hide().show().removeClass('disabled');
        }else{
            jQuerypp_pic_holder.find('.pp_gallery').hide().addClass('disabled');
        }
        jQuery.prettyPhoto.changeGalleryPage(goToPage);
        jQuerypp_pic_holder.find('.pp_gallery ul li:eq('+set_position+')').addClass('selected');
    }else{
        jQuerypp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');
        jQuerypp_pic_holder.find('.pp_gallery').hide();
    }
}
function _buildOverlay(caller){
    theRel=jQuery(caller).attr('rel');
    galleryRegExp=/\[(?:.*)\]/;
    isSet=(galleryRegExp.exec(theRel))?true:false;
    pp_images=(isSet)?jQuery.map(matchedObjects,function(n,i){
        if(jQuery(n).attr('rel').indexOf(theRel)!=-1)return jQuery(n).attr('href');
    }):jQuery.makeArray(jQuery(caller).attr('href'));
    pp_titles=(isSet)?jQuery.map(matchedObjects,function(n,i){
        if(jQuery(n).attr('rel').indexOf(theRel)!=-1)return(jQuery(n).find('img').attr('alt'))?jQuery(n).find('img').attr('alt'):"";
    }):jQuery.makeArray(jQuery(caller).find('img').attr('alt'));
    pp_descriptions=(isSet)?jQuery.map(matchedObjects,function(n,i){
        if(jQuery(n).attr('rel').indexOf(theRel)!=-1)return(jQuery(n).attr('title'))?jQuery(n).attr('title'):"";
    }):jQuery.makeArray(jQuery(caller).attr('title'));
    jQuery('body').append(settings.markup);
    jQuerypp_pic_holder=jQuery('.pp_pic_holder'),jQueryppt=jQuery('.ppt'),jQuerypp_overlay=jQuery('div.pp_overlay');
    if(isSet&&settings.overlay_gallery){
        currentGalleryPage=0;
        toInject="";
        for(var i=0;i<pp_images.length;i++){
            var regex=new RegExp("(.*?)\.(jpg|jpeg|png|gif)jQuery");
            var results=regex.exec(pp_images[i]);
            if(!results){
                classname='default';
            }else{
                classname='';
            }
            toInject+="<li class='"+classname+"'><a href='#'><img src='../Karma-HTML/js/"+pp_images[i]+"' width='50' alt='' /></a></li>";
        };
        
        toInject=settings.gallery_markup.replace(/{gallery}/g,toInject);
        jQuerypp_pic_holder.find('#pp_full_res').after(toInject);
        jQuerypp_pic_holder.find('.pp_gallery .pp_arrow_next').click(function(){
            jQuery.prettyPhoto.changeGalleryPage('next');
            jQuery.prettyPhoto.stopSlideshow();
            return false;
        });
        jQuerypp_pic_holder.find('.pp_gallery .pp_arrow_previous').click(function(){
            jQuery.prettyPhoto.changeGalleryPage('previous');
            jQuery.prettyPhoto.stopSlideshow();
            return false;
        });
        jQuerypp_pic_holder.find('.pp_content').hover(function(){
            jQuerypp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();
        },function(){
            jQuerypp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();
        });
        itemWidth=52+5;
        jQuerypp_pic_holder.find('.pp_gallery ul li').each(function(i){
            jQuery(this).css({
                'position':'absolute',
                'left':i*itemWidth
                });
            jQuery(this).find('a').unbind('click').click(function(){
                jQuery.prettyPhoto.changePage(i);
                jQuery.prettyPhoto.stopSlideshow();
                return false;
            });
        });
    };
    
    if(settings.slideshow){
        jQuerypp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
        jQuerypp_pic_holder.find('.pp_nav .pp_play').click(function(){
            jQuery.prettyPhoto.startSlideshow();
            return false;
        });
    }
    jQuerypp_pic_holder.attr('class','pp_pic_holder '+settings.theme);
    jQuerypp_overlay.css({
        'opacity':0,
        'height':jQuery(document).height(),
        'width':jQuery(document).width()
        }).bind('click',function(){
        if(!settings.modal)jQuery.prettyPhoto.close();
    });
    jQuery('a.pp_close').bind('click',function(){
        jQuery.prettyPhoto.close();
        return false;
    });
    jQuery('a.pp_expand').bind('click',function(e){
        if(jQuery(this).hasClass('pp_expand')){
            jQuery(this).removeClass('pp_expand').addClass('pp_contract');
            doresize=false;
        }else{
            jQuery(this).removeClass('pp_contract').addClass('pp_expand');
            doresize=true;
        };
        
        _hideContent(function(){
            jQuery.prettyPhoto.open();
        });
        return false;
    });
    jQuerypp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){
        jQuery.prettyPhoto.changePage('previous');
        jQuery.prettyPhoto.stopSlideshow();
        return false;
    });
    jQuerypp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){
        jQuery.prettyPhoto.changePage('next');
        jQuery.prettyPhoto.stopSlideshow();
        return false;
    });
    _center_overlay();
};

return this.unbind('click').click(jQuery.prettyPhoto.initialize);
};

function grab_param(name,url){
    name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS="[\\?&]"+name+"=([^&#]*)";
    var regex=new RegExp(regexS);
    var results=regex.exec(url);
    return(results==null)?"":results[1];
}
})(jQuery);
/*
 * jQuery UI 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jQueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jQuery.com/UI
 */
jQuery.ui||(function(c){
    var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);
    c.ui={
        version:"1.7.2",
        plugin:{
            add:function(k,l,n){
                var m=c.ui[k].prototype;
                for(var j in n){
                    m.plugins[j]=m.plugins[j]||[];
                    m.plugins[j].push([l,n[j]])
                    }
                },
        call:function(j,l,k){
            var n=j.plugins[l];
            if(!n||!j.element[0].parentNode){
                return
            }
            for(var m=0;m<n.length;m++){
                if(j.options[n[m][0]]){
                    n[m][1].apply(j.element,k)
                    }
                }
            }
    },
contains:function(k,j){
    return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)
    },
hasScroll:function(m,k){
    if(c(m).css("overflow")=="hidden"){
        return false
        }
        var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;
    if(m[j]>0){
        return true
        }
        m[j]=1;
    l=(m[j]>0);
    m[j]=0;
    return l
    },
isOverAxis:function(k,j,l){
    return(k>j)&&(k<(j+l))
    },
isOver:function(o,k,n,m,j,l){
    return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)
    },
keyCode:{
    BACKSPACE:8,
    CAPS_LOCK:20,
    COMMA:188,
    CONTROL:17,
    DELETE:46,
    DOWN:40,
    END:35,
    ENTER:13,
    ESCAPE:27,
    HOME:36,
    INSERT:45,
    LEFT:37,
    NUMPAD_ADD:107,
    NUMPAD_DECIMAL:110,
    NUMPAD_DIVIDE:111,
    NUMPAD_ENTER:108,
    NUMPAD_MULTIPLY:106,
    NUMPAD_SUBTRACT:109,
    PAGE_DOWN:34,
    PAGE_UP:33,
    PERIOD:190,
    RIGHT:39,
    SHIFT:16,
    SPACE:32,
    TAB:9,
    UP:38
}
};

if(d){
    var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;
    c.attr=function(k,j,l){
        var m=l!==undefined;
        return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))
        };
        
    c.fn.removeAttr=function(j){
        return(a.test(j)?this.each(function(){
            this.removeAttributeNS(h,j.replace(a,""))
            }):e.call(this,j))
        }
    }
c.fn.extend({
    remove:function(){
        c("*",this).add(this).each(function(){
            c(this).triggerHandler("remove")
            });
        return i.apply(this,arguments)
        },
    enableSelection:function(){
        return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")
        },
    disableSelection:function(){
        return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){
            return false
            })
        },
    scrollParent:function(){
        var j;
        if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){
            j=this.parents().filter(function(){
                return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))
                }).eq(0)
            }else{
            j=this.parents().filter(function(){
                return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))
                }).eq(0)
            }
            return(/fixed/).test(this.css("position"))||!j.length?c(document):j
        }
    });
c.extend(c.expr[":"],{
    data:function(l,k,j){
        return !!c.data(l,j[3])
        },
    focusable:function(k){
        var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");
        return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length
        },
    tabbable:function(k){
        var j=c.attr(k,"tabindex");
        return(isNaN(j)||j>=0)&&c(k).is(":focusable")
        }
    });
function g(m,n,o,l){
    function k(q){
        var p=c[m][n][q]||[];
        return(typeof p=="string"?p.split(/,?\s+/):p)
        }
        var j=k("getter");
    if(l.length==1&&typeof l[0]=="string"){
        j=j.concat(k("getterSetter"))
        }
        return(c.inArray(o,j)!=-1)
    }
    c.widget=function(k,j){
    var l=k.split(".")[0];
    k=k.split(".")[1];
    c.fn[k]=function(p){
        var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);
        if(n&&p.substring(0,1)=="_"){
            return this
            }
            if(n&&g(l,k,p,o)){
            var m=c.data(this[0],k);
            return(m?m[p].apply(m,o):undefined)
            }
            return this.each(function(){
            var q=c.data(this,k);
            (!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());
            (q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))
            })
        };
        
    c[l]=c[l]||{};
    
    c[l][k]=function(o,n){
        var m=this;
        this.namespace=l;
        this.widgetName=k;
        this.widgetEventPrefix=c[l][k].eventPrefix||k;
        this.widgetBaseClass=l+"-"+k;
        this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);
        this.element=c(o).bind("setData."+k,function(q,p,r){
            if(q.target==o){
                return m._setData(p,r)
                }
            }).bind("getData."+k,function(q,p){
        if(q.target==o){
            return m._getData(p)
            }
        }).bind("remove",function(){
    return m.destroy()
    })
};

c[l][k].prototype=c.extend({},c.widget.prototype,j);
c[l][k].getterSetter="option"
};

c.widget.prototype={
    _init:function(){},
    destroy:function(){
        this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")
        },
    option:function(l,m){
        var k=l,j=this;
        if(typeof l=="string"){
            if(m===undefined){
                return this._getData(l)
                }
                k={};
            
            k[l]=m
            }
            c.each(k,function(n,o){
            j._setData(n,o)
            })
        },
    _getData:function(j){
        return this.options[j]
        },
    _setData:function(j,k){
        this.options[j]=k;
        if(j=="disabled"){
            this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)
            }
        },
enable:function(){
    this._setData("disabled",false)
    },
disable:function(){
    this._setData("disabled",true)
    },
_trigger:function(l,m,n){
    var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);
    m=c.Event(m);
    m.type=j;
    if(m.originalEvent){
        for(var k=c.event.props.length,o;k;){
            o=c.event.props[--k];
            m[o]=m.originalEvent[o]
            }
        }
        this.element.trigger(m,n);
return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())
}
};

c.widget.defaults={
    disabled:false
};

c.ui.mouse={
    _mouseInit:function(){
        var j=this;
        this.element.bind("mousedown."+this.widgetName,function(k){
            return j._mouseDown(k)
            }).bind("click."+this.widgetName,function(k){
            if(j._preventClickEvent){
                j._preventClickEvent=false;
                k.stopImmediatePropagation();
                return false
                }
            });
    if(c.browser.msie){
        this._mouseUnselectable=this.element.attr("unselectable");
        this.element.attr("unselectable","on")
        }
        this.started=false
    },
_mouseDestroy:function(){
    this.element.unbind("."+this.widgetName);
    (c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))
    },
_mouseDown:function(l){
    l.originalEvent=l.originalEvent||{};
    
    if(l.originalEvent.mouseHandled){
        return
    }(this._mouseStarted&&this._mouseUp(l));
    this._mouseDownEvent=l;
    var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);
    if(!m||j||!this._mouseCapture(l)){
        return true
        }
        this.mouseDelayMet=!this.options.delay;
    if(!this.mouseDelayMet){
        this._mouseDelayTimer=setTimeout(function(){
            k.mouseDelayMet=true
            },this.options.delay)
        }
        if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){
        this._mouseStarted=(this._mouseStart(l)!==false);
        if(!this._mouseStarted){
            l.preventDefault();
            return true
            }
        }
    this._mouseMoveDelegate=function(n){
    return k._mouseMove(n)
    };
    
this._mouseUpDelegate=function(n){
    return k._mouseUp(n)
    };
    
c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
(c.browser.safari||l.preventDefault());
l.originalEvent.mouseHandled=true;
return true
},
_mouseMove:function(j){
    if(c.browser.msie&&!j.button){
        return this._mouseUp(j)
        }
        if(this._mouseStarted){
        this._mouseDrag(j);
        return j.preventDefault()
        }
        if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){
        this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);
        (this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))
        }
        return !this._mouseStarted
    },
_mouseUp:function(j){
    c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
    if(this._mouseStarted){
        this._mouseStarted=false;
        this._preventClickEvent=(j.target==this._mouseDownEvent.target);
        this._mouseStop(j)
        }
        return false
    },
_mouseDistanceMet:function(j){
    return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)
    },
_mouseDelayMet:function(j){
    return this.mouseDelayMet
    },
_mouseStart:function(j){},
_mouseDrag:function(j){},
_mouseStop:function(j){},
_mouseCapture:function(j){
    return true
    }
};

c.ui.mouse.defaults={
    cancel:null,
    distance:1,
    delay:0
}
})(jQuery);
;/*
 * jQuery UI Accordion 1.7.2
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	ui.core.js
 */
(function(a){
    a.widget("ui.accordion",{
        _init:function(){
            var d=this.options,b=this;
            this.running=0;
            if(d.collapsible==a.ui.accordion.defaults.collapsible&&d.alwaysOpen!=a.ui.accordion.defaults.alwaysOpen){
                d.collapsible=!d.alwaysOpen
                }
                if(d.navigation){
                var c=this.element.find("a").filter(d.navigationFilter);
                if(c.length){
                    if(c.filter(d.header).length){
                        this.active=c
                        }else{
                        this.active=c.parent().parent().prev();
                        c.addClass("ui-accordion-content-active")
                        }
                    }
            }
        this.element.addClass("ui-accordion ui-widget ui-helper-reset");
        if(this.element[0].nodeName=="UL"){
        this.element.children("li").addClass("ui-accordion-li-fix")
        }
        this.headers=this.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){
        a(this).addClass("ui-state-hover")
        }).bind("mouseleave.accordion",function(){
        a(this).removeClass("ui-state-hover")
        }).bind("focus.accordion",function(){
        a(this).addClass("ui-state-focus")
        }).bind("blur.accordion",function(){
        a(this).removeClass("ui-state-focus")
        });
    this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
        this.active=this._findActive(this.active||d.active).toggleClass("ui-state-default").toggleClass("ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
        this.active.next().addClass("ui-accordion-content-active");
        a("<span/>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);
        this.active.find(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);
        if(a.browser.msie){
        this.element.find("a").css("zoom","1")
        }
        this.resize();
        this.element.attr("role","tablist");
        this.headers.attr("role","tab").bind("keydown",function(e){
        return b._keydown(e)
        }).next().attr("role","tabpanel");
        this.headers.not(this.active||"").attr("aria-expanded","false").attr("tabIndex","-1").next().hide();
        if(!this.active.length){
        this.headers.eq(0).attr("tabIndex","0")
        }else{
        this.active.attr("aria-expanded","true").attr("tabIndex","0")
        }
        if(!a.browser.safari){
        this.headers.find("a").attr("tabIndex","-1")
        }
        if(d.event){
        this.headers.bind((d.event)+".accordion",function(e){
            return b._clickHandler.call(b,e,this)
            })
        }
    },
destroy:function(){
    var c=this.options;
    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role").unbind(".accordion").removeData("accordion");
    this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabindex");
    this.headers.find("a").removeAttr("tabindex");
    this.headers.children(".ui-icon").remove();
    var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active");
    if(c.autoHeight||c.fillHeight){
        b.css("height","")
        }
    },
_setData:function(b,c){
    if(b=="alwaysOpen"){
        b="collapsible";
        c=!c
        }
        a.widget.prototype._setData.apply(this,arguments)
    },
_keydown:function(e){
    var g=this.options,f=a.ui.keyCode;
    if(g.disabled||e.altKey||e.ctrlKey){
        return
    }
    var d=this.headers.length;
    var b=this.headers.index(e.target);
    var c=false;
    switch(e.keyCode){
        case f.RIGHT:case f.DOWN:
            c=this.headers[(b+1)%d];
            break;
        case f.LEFT:case f.UP:
            c=this.headers[(b-1+d)%d];
            break;
        case f.SPACE:case f.ENTER:
            return this._clickHandler({
            target:e.target
            },e.target)
        }
        if(c){
        a(e.target).attr("tabIndex","-1");
        a(c).attr("tabIndex","0");
        c.focus();
        return false
        }
        return true
    },
resize:function(){
    var e=this.options,d;
    if(e.fillSpace){
        if(a.browser.msie){
            var b=this.element.parent().css("overflow");
            this.element.parent().css("overflow","hidden")
            }
            d=this.element.parent().height();
        if(a.browser.msie){
            this.element.parent().css("overflow",b)
            }
            this.headers.each(function(){
            d-=a(this).outerHeight()
            });
        var c=0;
        this.headers.next().each(function(){
            c=Math.max(c,a(this).innerHeight()-a(this).height())
            }).height(Math.max(0,d-c)).css("overflow","auto")
        }else{
        if(e.autoHeight){
            d=0;
            this.headers.next().each(function(){
                d=Math.max(d,a(this).outerHeight())
                }).height(d)
            }
        }
},
activate:function(b){
    var c=this._findActive(b)[0];
    this._clickHandler({
        target:c
    },c)
    },
_findActive:function(b){
    return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===false?a([]):this.headers.filter(":eq(0)")
    },
_clickHandler:function(b,f){
    var d=this.options;
    if(d.disabled){
        return false
        }
        if(!b.target&&d.collapsible){
        this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
        this.active.next().addClass("ui-accordion-content-active");
        var h=this.active.next(),e={
            options:d,
            newHeader:a([]),
            oldHeader:d.active,
            newContent:a([]),
            oldContent:h
        },c=(this.active=a([]));
        this._toggle(c,h,e);
        return false
        }
        var g=a(b.currentTarget||f);
    var i=g[0]==this.active[0];
    if(this.running||(!d.collapsible&&i)){
        return false
        }
        this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
    this.active.next().addClass("ui-accordion-content-active");
    if(!i){
        g.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").find(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);
        g.next().addClass("ui-accordion-content-active")
        }
        var c=g.next(),h=this.active.next(),e={
        options:d,
        newHeader:i&&d.collapsible?a([]):g,
        oldHeader:this.active,
        newContent:i&&d.collapsible?a([]):c.find("> *"),
        oldContent:h.find("> *")
        },j=this.headers.index(this.active[0])>this.headers.index(g[0]);
    this.active=i?a([]):g;
    this._toggle(c,h,e,i,j);
    return false
    },
_toggle:function(b,i,g,j,k){
    var d=this.options,m=this;
    this.toShow=b;
    this.toHide=i;
    this.data=g;
    var c=function(){
        if(!m){
            return
        }
        return m._completed.apply(m,arguments)
        };
        
    this._trigger("changestart",null,this.data);
    this.running=i.size()===0?b.size():i.size();
    if(d.animated){
        var f={};
        
        if(d.collapsible&&j){
            f={
                toShow:a([]),
                toHide:i,
                complete:c,
                down:k,
                autoHeight:d.autoHeight||d.fillSpace
                }
            }else{
        f={
            toShow:b,
            toHide:i,
            complete:c,
            down:k,
            autoHeight:d.autoHeight||d.fillSpace
            }
        }
    if(!d.proxied){
    d.proxied=d.animated
    }
    if(!d.proxiedDuration){
    d.proxiedDuration=d.duration
    }
    d.animated=a.isFunction(d.proxied)?d.proxied(f):d.proxied;
d.duration=a.isFunction(d.proxiedDuration)?d.proxiedDuration(f):d.proxiedDuration;
var l=a.ui.accordion.animations,e=d.duration,h=d.animated;
if(!l[h]){
    l[h]=function(n){
        this.slide(n,{
            easing:h,
            duration:e||700
            })
        }
    }
l[h](f)
}else{
    if(d.collapsible&&j){
        b.toggle()
        }else{
        i.hide();
        b.show()
        }
        c(true)
    }
    i.prev().attr("aria-expanded","false").attr("tabIndex","-1").blur();
b.prev().attr("aria-expanded","true").attr("tabIndex","0").focus()
},
_completed:function(b){
    var c=this.options;
    this.running=b?0:--this.running;
    if(this.running){
        return
    }
    if(c.clearStyle){
        this.toShow.add(this.toHide).css({
            height:"",
            overflow:""
        })
        }
        this._trigger("change",null,this.data)
    }
});
a.extend(a.ui.accordion,{
    version:"1.7.2",
    defaults:{
        active:null,
        alwaysOpen:true,
        animated:"slide",
        autoHeight:true,
        clearStyle:false,
        collapsible:false,
        event:"click",
        fillSpace:false,
        header:"> li > :first-child,> :not(li):even",
        icons:{
            header:"ui-icon-triangle-1-e",
            headerSelected:"ui-icon-triangle-1-s"
        },
        navigation:false,
        navigationFilter:function(){
            return this.href.toLowerCase()==location.href.toLowerCase()
            }
        },
animations:{
    slide:function(j,h){
        j=a.extend({
            easing:"swing",
            duration:300
        },j,h);
        if(!j.toHide.size()){
            j.toShow.animate({
                height:"show"
            },j);
            return
        }
        if(!j.toShow.size()){
            j.toHide.animate({
                height:"hide"
            },j);
            return
        }
        var c=j.toShow.css("overflow"),g,d={},f={},e=["height","paddingTop","paddingBottom"],b;
        var i=j.toShow;
        b=i[0].style.width;
        i.width(parseInt(i.parent().width(),10)-parseInt(i.css("paddingLeft"),10)-parseInt(i.css("paddingRight"),10)-(parseInt(i.css("borderLeftWidth"),10)||0)-(parseInt(i.css("borderRightWidth"),10)||0));
        a.each(e,function(k,m){
            f[m]="hide";
            var l=(""+a.css(j.toShow[0],m)).match(/^([\d+-.]+)(.*)$/);
            d[m]={
                value:l[1],
                unit:l[2]||"px"
                }
            });
    j.toShow.css({
        height:0,
        overflow:"hidden"
    }).show();
    j.toHide.filter(":hidden").each(j.complete).end().filter(":visible").animate(f,{
        step:function(k,l){
            if(l.prop=="height"){
                g=(l.now-l.start)/(l.end-l.start)
                }
                j.toShow[0].style[l.prop]=(g*d[l.prop].value)+d[l.prop].unit
            },
        duration:j.duration,
        easing:j.easing,
        complete:function(){
            if(!j.autoHeight){
                j.toShow.css("height","")
                }
                j.toShow.css("width",b);
            j.toShow.css({
                overflow:c
            });
            j.complete()
            }
        })
},
bounceslide:function(b){
    this.slide(b,{
        easing:b.down?"easeOutBounce":"swing",
        duration:b.down?1000:200
        })
    },
easeslide:function(b){
    this.slide(b,{
        easing:"easeinout",
        duration:700
    })
    }
}
})
})(jQuery);
;


jQuery(document).ready(function(){
    jQuery("a[rel^='prettyPhoto']").prettyPhoto();
});
