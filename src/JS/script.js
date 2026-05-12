"use strict";

import tabs from'./modules/tabs.js';
import calculator from'./modules/calculator.js';
import switcher from'./modules/switcher.js';
import keyboardFunction from'./modules/keyboardFunction.js';
import exit from'./modules/exit.js';
import modalWindow from './modules/modalWindow.js';

window.addEventListener('DOMContentLoaded', function () {
  const modalTimerId = setTimeout(() => {
    // Trigger modal auto-open after 60 seconds
    const modal = document.querySelector('.modal');
    if (!modal.classList.contains('show')) {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    }
  }, 60000);
  
  tabs();
  calculator();
  switcher();
  keyboardFunction();
  exit();
  modalWindow('[data-modal]', '.modal', modalTimerId);
});

