/*Sticky header
*****************************************************/
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

// PARA GRADUAR OPACIDAD DEL HEADER SEGUN EL SCROLL QUE SE HAGA

// $(document).ready(function() {

//   if ($(window).width() < 992) {
//     $('#header').css('background', 'rgba(32,57,111');
//   }
//     else{
//       $(window).on('scroll', function() {
//       var scrollPosition = $(window).scrollTop();
//       var opacityChange = Math.max( 0 + (scrollPosition / 100)); // Ajusta el valor 200 según la sensibilidad deseada
//       $('#header').css('background', 'rgba(32,57,111, ' + opacityChange + ')'); // Cambia '#header' por el ID de tu encabezado
//       // var opacityChange2 = Math.max( 1 - (scrollPosition / 150)); // Ajusta el valor 200 según la sensibilidad deseada
//       // $('#triangle').css('opacity', opacityChange2 ); // Cambia '#header' por el ID de tu encabezado
      
//       });
//     };
  
// });

  // PARA GRADUAR OPACIDAD DEL HEADER SEGUN EL SCROLL QUE SE HAGA
  // NO ESTAN FUNCIONANDO CON RESIZE, PERO SI CON CARGA ORIGINAL




 // PARA CAMBIAR EL COLOR DE LOS NAVLINK AL SCROLL VERTICAL

if ($(window).width() < 992) {
  $('.nav-link').css('color', 'rgba(255,255,255') 
  // $('.marca').css('color', 'rgba(255,255,255')
 }
  else{
  

window.addEventListener('scroll', function () {
  var navLinks = document.querySelectorAll('.nav-link');
  // var marca = document.querySelector('.marca');

  navLinks.forEach(function(navlink) {
    navlink.classList.toggle("texto_blanco", window.scrollY > 0);
  });

    // marca.classList.toggle("texto_blanco", window.scrollY > 0);
  
});
};
   // PARA CAMBIAR EL COLOR DE LOS NAVLINK AL SCROLL VERTICAL
  // NO ESTAN FUNCIONANDO CON RESIZE, PERO SI CON CARGA ORIGINAL




/*Update copy automatically
**************************************************/
document.querySelector(".year-copy").innerText = new Date().getFullYear();


/*JS para que al clickear en nav items se cierre hamburguesa
*****************************************************************************/
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
});

  
/*Header anchor links
*********************************************/
$(document).ready(function(){
  $('header li a[href^="#"]').on('click',function (e) {
      
      if ($("header").hasClass("sticky")) {
        var diffTop = 70;
      } else {
        var diffTop = 135;
      }

      e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - diffTop
      }, 500, 'swing');
  });
}); 

/*Progress Bar scroll
**********************************************/
var progressBar = document.querySelector("#progress-bar span");
var totalHeight = document.body.scrollHeight - window.innerHeight;

if (document.body.contains(progressBar)) {
  window.addEventListener("scroll", function() {
    var currentHeight = window.pageYOffset;
    var progress = currentHeight / totalHeight * 100;
    progressBar.style.width = progress + "%";
  });
}


/*AOS Init
*******************************************************/
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



// $(document).ready(function() {
//   $(window).on('scroll', function() {
//       var scrollPosition = $(window).scrollTop();
//       var opacityChange = Math.max( 0.1 - (scrollPosition / 200)); // Ajusta el valor 200 según la sensibilidad deseada
//       $('#triangle').css('opacity' + ':' + opacityChange ); // Cambia '#header' por el ID de tu encabezado
//   });
// });

