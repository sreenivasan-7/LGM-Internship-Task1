



let clickedNav

$('li').click(function(event) {
  $(this).siblings().find('a').removeClass('active');
  $(this).find('a').addClass('active');
  clickedNav = jQuery(this).text()
  console.log(clickedNav);
  switch (clickedNav) {
    case 'HOME':
      $('html, body').animate({
        scrollTop: $('#home').offset().top
      }, 1000);
      break;
    case 'PROJECTS':
      $('html, body').animate({
        scrollTop: $('#projects').offset().top
      }, 1000);
      break;
    case 'PRICING':
      $('html, body').animate({
        scrollTop: $('#pricing').offset().top
      }, 1000);
      break;
    case 'TEAM':
      $('html, body').animate({
        scrollTop: $('#team').offset().top
      }, 1000);
      break;
    case 'BLOG':
      $('html, body').animate({
        scrollTop: $('#blog').offset().top
      }, 1000);
      break;
    case 'CONTACT':
      $('html, body').animate({
        scrollTop: $('#contact').offset().top
      }, 1000);
      break;
    default:
      break;
  }
});




// var t = 200; // Timer

//         var interval;

//         changeBg()


//         function changeTimer(){
//             t = t * 1.2;
//         }


// function changeBg(){
//   $('.hero-slider').addClass('bg1')
//   $('hero-slider').removeClass('bg1')
//   $('.hero-slider').addClass('bg2')
//   $('hero-slider').removeClass('bg2')

//   changeTimer();
//   interval = setInterval(changeBg, t);
//   }


// $('html, body').animate({
//   scrollTop: $(#clickedNav).offset().top
// }, 1000);

