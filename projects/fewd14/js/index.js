$(function(){

  //Prevent page reload when click links
  // $('#burger').click(function(event) {
  //   event.preventDefault();
  // });

  //Burger menu animation
  $('#burger').click(function(){
    $('.bar1').toggleClass('change1');
    $('.bar2').toggleClass('change2');
    $('.bar3').toggleClass('change3');
  });

  //Show menu when burger menu is clicked
  $('#burger').click(function(){

    $('#nav').toggleClass('show-menu');
  })
      
  //Parallax Scroll controller

  //Scroll position from the top
  // and Front-end Developer (and portfolio) box speed
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    var url = location.href.replace(/(.+\w\/)(.+)/,"/$2");

    //show scroll position from the top
    //console.log(wScroll);

    $('.background-box').css({
      'transform' : 'translate(0px, '+ wScroll /2.5 +'%)'
    })

    //Show logos one at a time when scrolling down
    if (url == '/index.html'
     && wScroll > $('.skills').offset().top - 350) {

      $('.skills figure').each(function(i){

        setTimeout(function(){
          $('.skills figure').eq(i).addClass('show_skills');
        }, 200 * (1+i));
        
      })
    }
  });

})