/*
 * smooster big flyout navigation JS 0.9.2
 * https://github.com/smooster/smooster-js-navi-bigflyout
 *
 * Copyright 2013, Sebastian Maier, Haydi Wetzel
 * http://smooster.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function( $ ) {
  $.fn.bigFlyoutNavi = function( options ) {

      var mainnavi = this;

      var bigflyout = {

          bind_events: function() {

              $('a', mainnavi).click(function(e) {
                if($(this).parent().find("ul").length > 0) {
                  e.preventDefault;

                  if ($(this).parent().hasClass('active') === false) {
                    bigflyout.subnavi_hide()
                    var SubnaviValue = $(this).parent().find('ul').html();
                    if (SubnaviValue > '') {
                      $(this).parent().find('ul').appendTo(settings['subnavi_inner']);
                      $(settings['subnavi']).slideDown('slow');
                    }
                    $(this).parent().addClass('active');
                    return false;
                  }
                }
              });

              $(settings['close_button']).click(function(e) {
                e.preventDefault;
                bigflyout.subnavi_hide()
              });

              document.onkeydown = function(evt) {
                evt = evt || window.event;
                if (evt.keyCode == 27) {
                    bigflyout.subnavi_hide()
                };
              };
          },

          subnavi_hide: function(e) {
              $(settings['subnavi']).hide();
              $('li.active', mainnavi).append($(settings['subnavi_inner']).html())
              $(settings['subnavi_inner']).html('');
              $('li', mainnavi).removeClass('active');
          }
      }

      var settings = $.extend( {
          'close_button'         : '.subnavi_close',
          'subnavi' : '.subnavi',
          'subnavi_inner' : '.subnavi_inner'
        }, options);

      bigflyout.bind_events()

  };
})( jQuery );

$(document).ready(function(){

    $('#navimain').bigFlyoutNavi()

 });   