"use strict";

window.addEventListener('load', function () {
  inputRangeTooltip();
});

function inputRangeTooltip() {
  var _this = this;

  var inputs = document.querySelectorAll('.input-container input[type=range]');
  inputs.forEach(function (input) {
    _this.addEventListener('input', function (e) {
      console.log(e);
    });
  });
}