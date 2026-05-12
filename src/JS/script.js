"use strict";
window.addEventListener('DOMContentLoaded', function () {

  const tabs = require('./modules/tabs'),
    calculator = require('./modules/calculator'),
    switcher = require('./modules/switcher'),
    keyboardFunction = require('./modules/keyboardFunction'),
    exit = require('./modules/exit');

  tabs();
  calculator();
  switcher();
  keyboardFunction();
  exit();
});

