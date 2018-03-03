(function(window, document) {"use strict";  /* Wrap code in an IIFE */

// Localize jQuery variables
var jQuery, $ = window.jQuery;
var app_url=getDsmAppUrl();

// loading animation
var el = document.getElementsByClassName('sk-ww-youtube-channel-videos')[0];
el.innerHTML = "<div class='first_loading_animation' style='text-align:center; width:100%;'><img src='" + app_url + "images/ripple.svg' class='loading-img' style='width:auto !important;' /></div>";

// load css
loadCssFile(app_url + "embed/youtube-channel-videos/libs/js/magnific-popup/magnific-popup.css");
loadCssFile(app_url + "embed/youtube-channel-videos/widget_css.php");
loadCssFile("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !=='3.1.1') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    scriptLoadHandler();
}

function loadScript(url, callback){

	/* Load script from url and calls callback once it's loaded */
	var scriptTag = document.createElement('script');
	scriptTag.setAttribute("type", "text/javascript");
	scriptTag.setAttribute("src", url);

	if (typeof callback !== "undefined") {
		if (scriptTag.readyState) {
			/* For old versions of IE */
			scriptTag.onreadystatechange = function(){
				if (this.readyState === 'complete' || this.readyState === 'loaded') {
					callback();
				}
			};
		} else {
			scriptTag.onload = callback;
		}
	}
	(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag);
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {

    loadScript(app_url + "embed/libs/js/magnific-popup/jquery.magnific-popup.js", function(){

        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        $ = jQuery = window.jQuery.noConflict(true);

        // initialize pop up plugin
        initManificPopupPlugin(jQuery);

        // Call our main function
        main();

    });

}

// load css file
function loadCssFile(filename){

    var fileref=document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);

    if(typeof fileref!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}

function loadYouTubeChannelVideos(jQuery, sk_youtube_channel_videos){

    var embed_id = getDsmEmbedId(sk_youtube_channel_videos);
    var json_url=app_url + "embed/youtube-channel-videos/widget_feed_json.php?embed_id=" + embed_id;

    // settings
    var show_profile_picture=sk_youtube_channel_videos.find('.show_profile_picture').text();
    var show_profile_username=sk_youtube_channel_videos.find('.show_profile_username').text();
    var show_profile_follow_button=sk_youtube_channel_videos.find('.show_profile_follow_button').text();
    var show_profile_posts_count=sk_youtube_channel_videos.find('.show_profile_posts_count').text();
    var show_profile_follower_count=sk_youtube_channel_videos.find('.show_profile_follower_count').text();
    var show_profile_following_count=sk_youtube_channel_videos.find('.show_profile_following_count').text();
    var show_profile_name=sk_youtube_channel_videos.find('.show_profile_name').text();
    var show_profile_description=sk_youtube_channel_videos.find('.show_profile_description').text();
    var show_profile_website=sk_youtube_channel_videos.find('.show_profile_website').text();
    var show_load_more_button=sk_youtube_channel_videos.find('.show_load_more_button').text();
    var show_bottom_follow_button=sk_youtube_channel_videos.find('.show_bottom_follow_button').text();
    var post_count=sk_youtube_channel_videos.find('.post_count').text();

    // text settings
    var posts_text=sk_youtube_channel_videos.find('.posts_text').text();
    var followers_text=sk_youtube_channel_videos.find('.followers_text').text();
    var following_text=sk_youtube_channel_videos.find('.following_text').text();
    var follow_text=sk_youtube_channel_videos.find('.follow_text').text();
    var load_more_posts_text=sk_youtube_channel_videos.find('.load_more_posts_text').text();
    var view_on_youtube_text=sk_youtube_channel_videos.find('.view_on_youtube_text').text();
    var videos_text=sk_youtube_channel_videos.find('.videos_text').text();
    var subscribers_text=sk_youtube_channel_videos.find('.subscribers_text').text();
    var views_text=sk_youtube_channel_videos.find('.views_text').text();
    var subscribe_text=sk_youtube_channel_videos.find('.subscribe_text').text();
    var load_more_videos_text=sk_youtube_channel_videos.find('.load_more_videos_text').text();
    var end_of_videos_text=sk_youtube_channel_videos.find('.end_of_videos_text').text();
    var use_youtube_channel_id=sk_youtube_channel_videos.find('.use_youtube_channel_id').text();

    // get events
    jQuery.getJSON(json_url, function(data){

        if(data.message=='load failed'){

            var sk_error_message="";
            sk_error_message+="<ul class='sk_error_message'>";
                sk_error_message+="<li>Unable to load YouTube channel.</li>";
                sk_error_message+="<li>Make sure your <a href='https://www.sociablekit.com/find-youtube-channel-id/' target='_blank'>YouTube Channel ID</a> or <a href='https://www.sociablekit.com/find-youtube-channel-custom-name/' target='_blanke'>YouTube Custom Name</a> is correct.</li>";
                sk_error_message+="<li>Make sure your YouTube channel is public.</li>";
                sk_error_message+="<li>If you need help, <a href='https://www.sociablekit.com/support' target='_blank'>contact support here</a>.</li>";
            sk_error_message+="</ul>";

            sk_youtube_channel_videos.find(".first_loading_animation").hide();
            sk_youtube_channel_videos.append(sk_error_message);

        }else{

            var post_items="";

            if(
                show_profile_picture==0 && show_profile_username==0 && show_profile_follow_button==0
                && show_profile_posts_count==0  && show_profile_follower_count==0 && show_profile_following_count==0
                && show_profile_name==0 && show_profile_description==0 && show_profile_website==0
            ){
                // do not display buttons
            }else{
                post_items+="<div class='youtube-user-root-container'>";
                    if(show_profile_picture==1){
                        post_items+="<div class='youtube-profile-pic' style='background-image:url(" + data.bio.thumbnail + ");'></div>";
                    }
                    post_items+="<div class='sk-yt-profile-info'>";
                        post_items+="<div>";
                            if(show_profile_name==1){
                                post_items+="<span class='sk-yt-profile-usename'>" + data.bio.title + "</span>";
                            }

                            if(show_profile_follow_button==1){
                                if(use_youtube_channel_id=="1"){
                                    post_items+="<button type='button' onclick=\"window.open('https://www.youtube.com/channel/" + data.bio.username + "?sub_confirmation=1');\" class='youtube-user-container'>";
                                }else{
                                    post_items+="<button type='button' onclick=\"window.open('https://www.youtube.com/user/" + data.bio.username + "?sub_confirmation=1');\" class='youtube-user-container'>";
                                }
                                    post_items+="<i class='fa fa-youtube-play' aria-hidden='true'></i> " + subscribe_text;
                                post_items+="</button>";
                            }
                        post_items+="</div>";
                        post_items+="<div class='sk-yt-profile-counts'>";

                            if(show_profile_posts_count==1){
                                post_items+="<span class='sk-yt-profile-count-item'><span class='f-w-b'>" + data.bio.video_count + "</span> " + videos_text + "</span>";
                            }

                            if(show_profile_follower_count==1){
                                post_items+="<span class='sk-yt-profile-count-item'><span class='f-w-b'>" + data.bio.subscriber_count + "</span> " + subscribers_text + "</span>";
                            }

                            if(show_profile_following_count==1){
                                post_items+="<span><span class='f-w-b'>" + data.bio.view_count + "</span> " + views_text + "</span>";
                            }
                        post_items+="</div>";
                        post_items+="<div>";

                            if(show_profile_description==1){
                                post_items+="<div class='sk-yt-channel-description'>" + data.bio.description + "</div>";
                            }

                        post_items+="</div>";
                    post_items+="</div>";
                post_items+="</div>";
            }

            post_items+="<div class='sk-yt-all-posts'>";
                var item_counter=1;
                jQuery.each(data.posts, function(key, val){

                    post_items+=item_counter<=post_count
                        ? "<span class='sk-yt-post-item-holder'>"
                        : "<span class='sk-yt-post-item-holder display-none'>";
                        post_items+=getFeedItem(val, sk_youtube_channel_videos);
                    post_items+="</span>";

                    item_counter++;
                });
            post_items+="</div>";

            if(show_load_more_button==0 && show_bottom_follow_button==0){
                // do not display buttons
            }else{
                post_items+="<div class='sk-yt-bottom-btn-container'>";
                    if(show_load_more_button==1 && (data.next_page!="" || item_counter>post_count)){
                        post_items+="<button type='button' class='sk-yt-load-more-posts'>" + load_more_videos_text + "</button>";
                    }

                    if(show_bottom_follow_button==1){

                        if(use_youtube_channel_id=="1"){
                            post_items+="<button type='button' class='sk-yt-bottom-follow-btn' onclick=\"window.open('https://www.youtube.com/channel/" + data.bio.username + "?sub_confirmation=1');\">";
                        }else{
                            post_items+="<button type='button' class='sk-yt-bottom-follow-btn' onclick=\"window.open('https://www.youtube.com/user/" + data.bio.username + "?sub_confirmation=1');\">";
                        }
                            post_items+="<i class='fa fa-youtube-play' aria-hidden='true'></i> " + subscribe_text;
                        post_items+="</button>";
                    }
                post_items+="</div>";
            }

            post_items+="<div class='sk-yt-next-page display-none'>" + data.next_page + "</div>";
            sk_youtube_channel_videos.append(post_items);
            applyCustomUi(jQuery, sk_youtube_channel_videos);
        }
    });

}

function getFeedItem(val, sk_youtube_channel_videos){

    var thumbnail_size = sk_youtube_channel_videos.find('.thumbnail_size').text();
    var show_pop_up = sk_youtube_channel_videos.find('.show_pop_up').text();

    var post_items="";
    post_items+="<div class='sk-ww-youtube-channel-videos-item'>";
        if(show_pop_up==0){
            post_items+="<iframe class='sk_inline_youtube_player' width='853' height='480' src='https://www.youtube.com/embed/" + val.id + "?showinfo=1&autoplay=0&enablejsapi=1' frameborder='0' allowfullscreen></iframe>";
        }

        else{
            post_items+="<div class='sk-play-btn'>";
                post_items+="<div class='yt-icon-white-bg'></div>";
                post_items+="<div class='yt-icon-container'><i class='fa fa-youtube-play' aria-hidden='true'></i></div>";
            post_items+="</div>";
            post_items+="<div class='sk-yt-post-hover' data-video-id='" + val.id + "'>";
                post_items+="<div class='sk-yt-title'>";
                    post_items+=val.title;
                post_items+="</div>";
            post_items+="</div>";
            post_items+="<img src='" + val.thumbnail + "' class='sk-yt-post-img' />";
        }
    post_items+="</div>"; // END sk-ww-youtube-channel-videos-item

    return post_items;
}

function showDsmYouTubeChannelFeedPopUp(jQuery, content_src, clicked_element){

    var show_pop_up_on_middle=jQuery(clicked_element).closest('.sk-ww-youtube-channel-videos').find('.show_pop_up_on_middle').text();
    var clicked_element_pos=jQuery(clicked_element).offset().top;
    var relative_pos=clicked_element_pos - jQuery(window).scrollTop() - 200;

    jQuery.magnificPopup.open({
        items: { src: content_src },
        'type' : 'inline',
        callbacks: {
            open: function() {

                if(show_pop_up_on_middle==0){
                    jQuery('.mfp-container').css({ 'top' : relative_pos + 'px' });
                }

                // play video
                if(jQuery('.mfp-content .sk-pop-yt-post video').get(0)!==undefined){
                    jQuery('.mfp-content .sk-pop-yt-post video').get(0).play();
                }
            },
            close: function() {

                // stop playing video
                clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content').html("");

                if(show_pop_up_on_middle==0){
                    jQuery('.mfp-container').css({ 'top' : '0px' });
                }

            }
        }
    });

}

// make widget responsive
function makeResponsive(jQuery, sk_youtube_channel_videos){

    var sk_youtube_channel_videos_width = sk_youtube_channel_videos.width();

	/* smartphones, iPhone, portrait 480x320 phones */
	if(sk_youtube_channel_videos_width<=320){

	}

	/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
	else if(sk_youtube_channel_videos_width<=481){

	}

	/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
	else if(sk_youtube_channel_videos_width<=641){

	}

	/* tablet, landscape iPad, lo-res laptops ands desktops */
	else if(sk_youtube_channel_videos_width<=961){

	}

	/* big landscape tablets, laptops, and desktops */
	else if(sk_youtube_channel_videos_width<=1025){

	}

	/* hi-res laptops and desktops */
	else if(sk_youtube_channel_videos_width<=1281){

	}

    /* wider screen */
    else if(sk_youtube_channel_videos_width>1281){

	}

}

function alignSpinner(jQuery, sk_youtube_channel_videos){
    /*
    // hover
    var hover_width=sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item').width();

    sk_youtube_channel_videos.find('.sk-yt-post-hover .fa').css({
        'height' : hover_width + 'px',
        'line-height' : hover_width + 'px'
    });
    */
}

function applyCustomUi(jQuery, sk_youtube_channel_videos){

    // hide 'loading animation' image
    sk_youtube_channel_videos.find(".loading-img").hide();

    // container width
    sk_youtube_channel_videos.css({ 'width' : '100%' });
    var sk_youtube_channel_videos_width=sk_youtube_channel_videos.innerWidth();

    // change height to normal
    sk_youtube_channel_videos.css({'height' : 'auto'});

    var column_count=sk_youtube_channel_videos.find('.column_count').text();
	if(
        /* smartphones, iPhone, portrait 480x320 phones */
        sk_youtube_channel_videos_width<=320 ||

    	/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
    	sk_youtube_channel_videos_width<=481 ||

    	/* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
    	sk_youtube_channel_videos_width<=641
    ){
        column_count=1;
	}

    // size settings
    var border_size=0;
    var background_color="#555555";
    var space_between_images=sk_youtube_channel_videos.find('.space_between_images').text();
    var margin_between_images=parseFloat(space_between_images).toFixed(2) / 2;

    var total_space_between_images=parseFloat(space_between_images).toFixed(2)*(parseFloat(column_count));
    var pic_width=(parseFloat(sk_youtube_channel_videos_width).toFixed(2)-parseFloat(total_space_between_images).toFixed(2)) / parseFloat(column_count).toFixed(2);

    var sk_ig_all_posts_minus_spaces=parseFloat(sk_youtube_channel_videos_width).toFixed(2)-parseFloat(total_space_between_images).toFixed(2);
    var bottom_button_container_width=parseFloat(sk_youtube_channel_videos_width).toFixed(2)-(parseFloat(space_between_images).toFixed(2)*2);
    var bottom_button_width=parseFloat(sk_youtube_channel_videos_width).toFixed(2) / parseFloat(2).toFixed(2);

    // font & color settings
    var font_family=sk_youtube_channel_videos.find('.font_family').text();
    var details_bg_color=sk_youtube_channel_videos.find('.details_bg_color').text();
    var details_font_color=sk_youtube_channel_videos.find('.details_font_color').text();
    var details_link_color=sk_youtube_channel_videos.find('.details_link_color').text();
    var details_link_hover_color=sk_youtube_channel_videos.find('.details_link_hover_color').text();
    var button_bg_color=sk_youtube_channel_videos.find('.button_bg_color').text();
    var button_text_color=sk_youtube_channel_videos.find('.button_text_color').text();
    var button_hover_bg_color=sk_youtube_channel_videos.find('.button_hover_bg_color').text();
    var button_hover_text_color=sk_youtube_channel_videos.find('.button_hover_text_color').text();

    // resize the actual image as well
    sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item .sk-yt-post-img').css({
        'width' : pic_width + 'px'
    });

    // video item
    var pic_height=(parseFloat(pic_width) / parseFloat(2)) + parseFloat(20);
    sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item').css({
        'width' : pic_width + 'px',
        'margin' : margin_between_images + 'px',
        'background-color' : background_color,
        'padding' : border_size,
        'height' : pic_height + 'px'
    });

    // resize inline youtube video
    sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item .sk_inline_youtube_player').css({
        'width' : pic_width + 'px',
        'height' : pic_height + 'px'
    });

    // hover
    sk_youtube_channel_videos.find('.sk-yt-post-hover').css({
        'width' : pic_width + 'px',
        'margin' : 0,
        'padding' : 0,
        'height' : pic_height + 'px'
    });

    // apply font family
    sk_youtube_channel_videos.css({
        'font-family' : font_family,
        'background-color' : details_bg_color,
        'width' : sk_youtube_channel_videos_width
    });

    // pop up settings
    jQuery('.sk-pop-yt-post').css({
        'font-family' : font_family
    });

    // details
    sk_youtube_channel_videos.find('.youtube-user-root-container').css({
        'color' : details_font_color
    });

    // details link
    sk_youtube_channel_videos.find('.youtube-user-root-container a').css({
        'color' : details_link_color
    });

    $(".youtube-user-root-container a").mouseover(function() {
        $(this).css({'color' : details_link_hover_color});
    }).mouseout(function() {
        $(this).css({'color' : details_link_color});
    });

    // buttons
    var margin_bottom_sk_ig_load_more_posts=space_between_images;
    if(margin_bottom_sk_ig_load_more_posts==0){
        margin_bottom_sk_ig_load_more_posts=5;
    }
    sk_youtube_channel_videos.find(".sk-yt-load-more-posts").css({
        'margin-bottom' : margin_bottom_sk_ig_load_more_posts + 'px'
    });

    sk_youtube_channel_videos.find(".youtube-user-container, .sk-yt-load-more-posts, .sk-yt-bottom-follow-btn")
        .css({
            'background-color' : button_bg_color,
            'border-color' : button_bg_color,
            'color' : button_text_color
        });

    sk_youtube_channel_videos.find(".youtube-user-container, .sk-yt-load-more-posts, .sk-yt-bottom-follow-btn")
        .mouseover(function(){
            $(this).css({
                'background-color' : button_hover_bg_color,
                'border-color' : button_hover_bg_color,
                'color' : button_hover_text_color
            });
        }).mouseout(function(){
            $(this).css({
                'background-color' : button_bg_color,
                'border-color' : button_bg_color,
                'color' : button_text_color
            });
        });

    // bottom buttons container
    var padding_sk_ig_bottom_btn_container=margin_between_images;
    if(padding_sk_ig_bottom_btn_container==0){
        padding_sk_ig_bottom_btn_container=5;
    }
    sk_youtube_channel_videos.find(".sk-yt-bottom-btn-container").css({
        'padding' : padding_sk_ig_bottom_btn_container + 'px'
    });

    jQuery(".sk_yt_channel_feed_videowrapper, .sk_youtube_channel_player, .mfp-close, .prev_sk_yt_channel_post, .next_sk_yt_channel_post")
        .mouseover(function(){
            jQuery(".mfp-close, .prev_sk_yt_channel_post, .next_sk_yt_channel_post").attr("style", "opacity: 0.8 !important;");
        }).mouseout(function(){
            jQuery(".mfp-close, .prev_sk_yt_channel_post, .next_sk_yt_channel_post").attr("style", "opacity: 0.3 !important;");
        });

}

function getDsmAppUrl(){

    // auto detect live and dev version
    var scripts = document.getElementsByTagName("script");
    var scripts_length=scripts.length;
    var search_result=-1; // not app-dev
    var app_dev=false;

    for(var i=0; i<scripts_length; i++){
        var src_str=scripts[i].getAttribute('src');

        if(src_str!=null){
            search_result=src_str.search("app-dev");

            // app-dev found if greater than or equal to 1
            if(search_result>=1){ app_dev=true; }
        }
    }

    // app url
    var app_url="https://www.sociablekit.com/app/";

    if(app_dev==true){
        app_url="https://www.sociablekit.com/app-dev/";
    }

    return app_url;
}

function getDsmEmbedId(sk_youtube_channel_videos){
    var embed_id = sk_youtube_channel_videos.attr('embed-id');
    if(embed_id==undefined){
        embed_id = sk_youtube_channel_videos.attr('data-embed-id');
    }

    return embed_id;
}

function getDsmSetting(sk_youtube_channel_videos, key){
    return sk_fb_event.find("." + key).text();
}

// our main function
function main(){

    // manipulate page using jQuery
    jQuery(document).ready(function($) {

        jQuery('.sk-ww-youtube-channel-videos').each(function() {
            // know what to show
            var sk_youtube_channel_videos=jQuery(this);

            // get embed id for global use
            var embed_id = getDsmEmbedId(sk_youtube_channel_videos);

            // change height to be more than current window
            var new_sk_youtube_channel_videos_height=jQuery(window).height() + 100;
            sk_youtube_channel_videos.height(new_sk_youtube_channel_videos_height);

            var json_url=app_url + "embed/youtube-channel-videos/widget_settings_json.php?embed_id=" + embed_id;

            jQuery.getJSON(json_url, function(data){

                if(data.show_feed==false){
                    sk_youtube_channel_videos.prepend(data.message);
                    sk_youtube_channel_videos.find('.loading-img').hide();
                    sk_youtube_channel_videos.find('.first_loading_animation').hide();
                }

                else{

                    // save some settings in html
                    var settings_html="";

                    // settings for easy access
                    settings_html+="<div class='display-none sk-yt-settings' style='display:none;'>";
                        settings_html+="<div class='sk_youtube_channel_white_pop_up sk_pop_up_content sk-pop-yt-post'></div>";
                        // loop through settings from dsm server
                        jQuery.each(data, function(key, value){ settings_html+="<div class='" + key + "'>" + value + "</div>"; });
                    settings_html+="</div>";

                    if(sk_youtube_channel_videos.find('.sk-yt-settings').length){ }
                    else{ sk_youtube_channel_videos.prepend(settings_html); }

                    // empty settings
                    settings_html="";

                    loadYouTubeChannelVideos(jQuery, sk_youtube_channel_videos);
                }
            });
        });

        // resize elements in real time
        jQuery(window).resize(function(){
            jQuery('.sk-ww-youtube-channel-videos').each(function(){
                var sk_youtube_channel_videos=jQuery(this);
                applyCustomUi(jQuery, sk_youtube_channel_videos);
            });
        });

        jQuery(document).on('click', '.sk-ww-youtube-channel-videos .sk-yt-post-hover', function(){
            var clicked_element=jQuery(this);
            showDsmYouTubeVideo(clicked_element);
        });

        jQuery(document).on('click', '.prev_sk_yt_channel_post', function(){
            jQuery(this).html("<i class='fa fa-spinner fa-pulse' aria-hidden='true'></i>");
            var new_clicked_element=jQuery('.sk_selected_ig_post').closest('.sk-yt-post-item-holder')
                                    .prev('.sk-yt-post-item-holder').find('.sk-yt-post-hover');
            showDsmYouTubeVideo(new_clicked_element);
        });

        jQuery(document).on('click', '.next_sk_yt_channel_post', function(){
            jQuery(this).html("<i class='fa fa-spinner fa-pulse' aria-hidden='true'></i>");
            var new_clicked_element=jQuery('.sk_selected_ig_post').closest('.sk-yt-post-item-holder')
                                    .next('.sk-yt-post-item-holder').find('.sk-yt-post-hover');
            showDsmYouTubeVideo(new_clicked_element);
        });

        jQuery(document).on('click', '.sk-ww-youtube-channel-videos .sk-yt-load-more-posts', function(){

            var current_btn=jQuery(this);
            var current_btn_text=current_btn.text();
            var sk_youtube_channel_videos=jQuery(this).closest('.sk-ww-youtube-channel-videos')
            var next_page=sk_youtube_channel_videos.find('.sk-yt-next-page').text();
            var json_url=next_page;
            var end_of_posts_text=sk_youtube_channel_videos.find('.end_of_posts_text').text();
            var view_on_youtube_text=sk_youtube_channel_videos.find('.view_on_youtube_text').text();
            console.log('next_page: ' + next_page);
            console.log('json_url: ' + json_url);
            // show loading animation
            jQuery(this).html("<i class='fa fa-spinner fa-pulse' aria-hidden='true'></i>");

            if(next_page==""){
                sk_youtube_channel_videos.find(".sk-yt-post-item-holder").show();
                sk_youtube_channel_videos.find('.sk-yt-load-more-posts').hide();
            }

            else{

                // get events
                jQuery.getJSON(json_url, function(data){

                        var post_items="";

                        jQuery.each(data.posts, function(key, val){
                            post_items+="<span class='sk-yt-post-item-holder'>"
                                post_items+=getFeedItem(val, sk_youtube_channel_videos);
                            post_items+="</span>";
                        });

                        // add posts to current posts
                        sk_youtube_channel_videos.find('.sk-yt-all-posts').append(post_items);

                        // go back to previous button text
                        current_btn.html(current_btn_text);

                        // change next page value
                        sk_youtube_channel_videos.find('.sk-yt-next-page').text(data.next_page);

                        // if no next page, disable load more button
                        if(data.next_page==""){
                            sk_youtube_channel_videos.find('.sk-yt-load-more-posts').hide();
                        }

                        // show hidden videos
                        sk_youtube_channel_videos.find('.sk-yt-post-item-holder').show();

                        // apply customizations and sizings
                        applyCustomUi(jQuery, sk_youtube_channel_videos);


                });
            }
        });

        jQuery(document).on('click', '.sk-ww-youtube-channel-videos .sk-watermark', function(){
            jQuery('.sk-ww-youtube-channel-videos .sk-message').slideToggle();
        });

    }); // end document ready

    function showDsmYouTubeVideo(clicked_element){

        // remove all selected post
        jQuery('.sk_selected_ig_post').removeClass('sk_selected_ig_post');

        // activate selected post
        clicked_element.addClass('sk_selected_ig_post');

        var sk_youtube_channel_videos=clicked_element.closest('.sk-ww-youtube-channel-videos');
        var video_id=clicked_element.attr('data-video-id');
        var json_url=app_url + "embed/youtube-channel-videos/widget_read_one_json.php?video_id=" + video_id;
        var post_html="";

        // show loading animation
        var sk_play_btn = clicked_element.closest('.sk-ww-youtube-channel-videos-item')
                            .find('.sk-play-btn')
        var orig_content=sk_play_btn.html();
        sk_play_btn.html("<i class='fa fa-spinner fa-pulse fa-1x fa-fw sk_white_font'></i>");

        // read one post
        jQuery.getJSON(json_url, function(data){

            if(data.title==""){
                post_html+="<div class='sk-yt-pop-up-content' style='padding:10px; text-align:center;'>";
                    post_html+="<p>Sorry, video is unavailable.</p>";
                post_html+="</div>";
            }

            else{

                post_html+="<div>";
                    post_html+="<div class='sk_yt_channel_feed_videowrapper'>";
                        post_html+="<iframe class='sk_youtube_channel_player' width='853' height='480' src='https://www.youtube.com/embed/" + video_id + "?showinfo=0&autoplay=1&enablejsapi=1&rel=0' frameborder='0' allowfullscreen></iframe>";

                        if(clicked_element.closest('.sk-yt-post-item-holder').prev().length){
                            post_html+="<button type='button' class='prev_sk_yt_channel_post'>";
                                post_html+="<i class='fa fa-chevron-left sk_prt_3px' aria-hidden='true'></i>";
                            post_html+="</button>";
                        }

                        if(clicked_element.closest('.sk-yt-post-item-holder').next().length){
                            post_html+="<button type='button' class='next_sk_yt_channel_post'>";
                                post_html+="<i class='fa fa-chevron-right sk_plt_3px' aria-hidden='true'></i>";
                            post_html+="</button>";
                        }

                    post_html+="</div>";
                    post_html+="<div class='sk-yt-pop-up-content'>";
                        post_html+="<h2 class='sk_yt_video_title'>" + data.title + "</h2>";
                        post_html+="<p>";

                            post_html+="<span class='sk-yt-feed-m-r-15px'>";
                                post_html+="<i class='fa fa-youtube-play' aria-hidden='true'></i> ";
                                post_html+="<a class='sk-pop-yt-channel-text' href='https://www.youtube.com/watch?v=" + data.id + "' target='_blank'>";
                                    post_html+=data.channel_title;
                                post_html+="</a>";
                            post_html+="</span>";

                            post_html+="<span class='sk-yt-feed-m-r-15px'>";
                                post_html+="<i class='fa fa-eye' aria-hidden='true'></i> " + data.view_count ;
                            post_html+="</span>";

                            post_html+="<span class='sk-yt-feed-m-r-15px'>";
                                post_html+="<i class='fa fa-comments' aria-hidden='true'></i> " + data.comment_count ;
                            post_html+="</span>";

                            post_html+="<span class='sk-yt-feed-m-r-15px'>";
                                post_html+=" <i class='fa fa-thumbs-up' aria-hidden='true'></i> " + data.like_count;
                            post_html+="</span>";

                            post_html+="<span class='sk-yt-feed-m-r-15px'>";
                                post_html+="<i class='fa fa-thumbs-down' aria-hidden='true'></i> " + data.dislike_count;
                            post_html+="</span>";

                        post_html+="</p>";
                        post_html+="<p class='sk-yt-pic-text'>" + data.description + "</p>";
                    post_html+="</div>";
                post_html+="</div>";

            }

            // close current pop up
            hidePopUp();

            // put html in pop up div
            clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content').html(post_html);

            // then show pop up
            var content_src=clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content');
            showDsmYouTubeChannelFeedPopUp(jQuery, content_src, clicked_element);

            sk_play_btn.html(orig_content);

            // apply customizations and sizings
            applyCustomUi(jQuery, sk_youtube_channel_videos);

        });
    }
}

function hidePopUp(){
    jQuery.magnificPopup.close();
}

}(window, document)); // We call our anonymous function immediately
