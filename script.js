$(document).ready(function(){

  $('.popup').click(function () {
    $('.popup-wrapper').addClass('active-p');

    $('body').css('overflow', 'hidden');
  });

  $('.close-popup').click(function(){
    
    $('.popup-wrapper').removeClass('active-p');

    $('body').css('overflow', '');
      
  })
});

  
