/*
 * smooster big flyout navigation JS 0.1
 * https://github.com/smooster/smooster-js-navi-bigflyout
 *
 * Copyright 2013, Sebastian Maier, Haydi Wetzel
 * http://smooster.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

$(document).ready(function(){
    
            /* main navigation - start */
          $('#navimain a').click(function(e) {
            if($(this).attr('href') == "#") {
              e.preventDefault;

              if ($(this).parent().hasClass('active') === false) {
                $('#navimain li.active').append($('.subnavi_inner').html())
                $('.subnavi').hide();
                $('.subnavi_inner').html('');
                $('#navimain li').removeClass('active');
                var SubnaviValue = $(this).parent().find('ul').html();
                if (SubnaviValue > '') {
                  $(this).parent().find('ul').appendTo('.subnavi_inner');
                  $('.subnavi').slideDown('slow');
                }
                $(this).parent().addClass('active');
                return false;
              }
            }
          }); 
          $('.subnavi_close').click(function(e) {
            e.preventDefault;
            $('.subnavi').hide();
            $('.subnavi_inner').html('');
            $('#navimain li').removeClass('active');
          }); 
          document.onkeydown = function(evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27) {
              $('.subnavi').hide();
              $('.subnavi_inner').html('');
              $('#navimain li').removeClass('active');
            };
          };
          $('.subnavi_inner a').click(function(e) { // is not get fired
            e.preventDefault;
            $('.subnavi_inner li').removeClass('active');
            $(this).parent().addClass('active');
          });
          /* main navigation - end */

 });   