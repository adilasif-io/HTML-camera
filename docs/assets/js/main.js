"use strict";

$(document).ready(function () {
  showLoader();
  setTimeout(function () {
    hideLoader();
  }, 2000);
  console.log("document ready");
});
/*=============================================
=            lax.js Script            =
=============================================*/

window.onload = function () {
  lax.init(); // Add a driver that we use to control our animations

  lax.addDriver('scrollY', function () {
    return window.scrollY;
  }); // Add animation bindings to elements

  lax.addElements('.selector', {
    scrollY: {
      translateX: [["elInY", "elCenterY", "elOutY"], [0, 'screenWidth/2', 'screenWidth']]
    }
  });
};
/*=====  End of lax.js Script  ======*/


function showLoader() {
  $('.loader-container').show(); // console.log($('.loader-container'));
}

function hideLoader() {
  $('.loader-container').hide();
}