$(document).ready(function() {
 
      setInterval( function() {
      var ss = new Date().getSeconds();
      var ss_degree = ss * 6;
      var ss_rotate = "rotate(" + ss_degree + "deg)";
      
      $("#seconds").css({"-moz-transform" : ss_rotate, "-webkit-transform" : ss_rotate});
          
      }, 1000 );
      
 
      setInterval( function() {
      var hh = new Date().getHours();
      var mm = new Date().getMinutes();
      var hh_degree = hh * 15 + 180;
      var hh_rotate = "rotate(" + hh_degree + "deg)";
      
      $("#hours").css({"-moz-transform" : hh_rotate, "-webkit-transform" : hh_rotate});
          
      }, 1000 );


      setInterval( function() {
      var mm = new Date().getMinutes();
      var mm_degree = mm * 6;
      var mm_rotate = "rotate(" + mm_degree + "deg)";
      
      $("#minutes").css({"-moz-transform" : mm_rotate, "-webkit-transform" : mm_rotate});
          
      }, 1000 );

      $('button').click(function(){
            if($('ul').css('visibility') == 'visible') {
                  $('ul').css('visibility','hidden');
                  $('button').text('Mostrar relógio');
            }
            else if($('ul').css('visibility') == 'hidden') {
                  $('ul').css('visibility','visible');
                  $('button').text('Esconder relógio');
            }
      });
 
});