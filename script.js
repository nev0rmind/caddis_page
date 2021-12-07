/* 
on scroll: Name + Art + Design // Kontakt etc. -> kleiner (font-size wie Ausbildung)
tooltip Funktion
different scroll speed
Mobilversion
*/

// document.documentElement.style.setProperty('.fixed-header', document.getElementById('.fixed-header').offsetHeight + 'px');

var scrolled_val;

$(window).scroll( function() { 
  var scrolled_val = $(document).scrollTop().valueOf();

  if ( scrolled_val > 100 ) {
    document.querySelector(".onScroll").style.fontSize = "14px";
    document.querySelector(".onScroll2").style.fontSize = "14px";
    document.querySelector(".onScroll3").style.fontSize = "14px";
    document.querySelector(".onScroll4").style.fontSize = "14px";
  } else {
    document.querySelector(".onScroll").style.fontSize = "18px";
    document.querySelector(".onScroll2").style.fontSize = "18px";
    document.querySelector(".onScroll3").style.fontSize = "18px";
    document.querySelector(".onScroll4").style.fontSize = "18px";
  }
 });







function scrollFunctionReverse() {
  console.log(yPosition);
  
}

/*
$(window).scroll(function() {
  var scrollBottom = $(window).scrollTop() + $(window).height();

  if ( scrollBottom  < 50 ) {
    document.querySelector(".onScroll").style.fontSize = "18px";
    document.querySelector(".onScroll2").style.fontSize = "18px";
    document.querySelector(".onScroll3").style.fontSize = "18px";
    document.querySelector(".onScroll4").style.fontSize = "18px";
  }
});
*/

// var tooltips = document.querySelectorAll('.tooltip span');

// window.onmousemove = function (e) {
//     var x = (e.clientX - 650) + 'px',
//         y = (e.clientY + 20) + 'px';
//     for (var i = 0; i < tooltips.length; i++) {
//         tooltips[i].style.top = y;
//         tooltips[i].style.left = x;
//     }
// };

// window.touchstart = function (e) {
//   var x = (e.clientX - 650) + 'px',
//       y = (e.clientY + 20) + 'px';
//   for (var i = 0; i < tooltips.length; i++) {
//       tooltips[i].style.top = y;
//       tooltips[i].style.left = x;
//   }
// };
