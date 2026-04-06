"use strict";
window.addEventListener('DOMContentLoaded', function () {
  const display = document.querySelector(".text"),
    btns = document.querySelectorAll(".panel button");

  btns.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id == "del") {
        display.value = display.value.slice(0, -1);
      }
      else if (button.id === "AC") {
        display.value = "";
      }
      else if (button.id === "procent") {
        try {
          if (display.value) {
            let res = new Function("return " + display.value)();
            if (res === Infinity || res === -Infinity || Number.isNaN(res)) {
              display.value = "Ошибка";
            } else {
              display.value = (res / 100);
            }
          }
        } catch (error) {
          display.value = "Error";
        }
      }
      else if (button.id === "result") {
        try {
          if (display.value) {
            let res = new Function("return " + display.value)();
            if (res === Infinity || res === -Infinity || Number.isNaN(res)) {
              display.value = "Ошибка";
            } else {
              display.value = res;
            }
          }
        } catch (error) {
          display.value = "Error";
        }
      } else {
        if (display.value === "Error" || display.value === "Error") {
          display.value = "";
        }
        display.value += button.innerText;
      }
    });
  });

  const switcher = document.querySelector('.theme');

  switcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');

  });

  const end = document.querySelector('.exit');
  end.addEventListener('click', () => {
    close();
  });

  //Modal Window

  const modalTrigger = document.querySelector('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

  modalTrigger.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click',closeModal);
    
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e)=>{
    if(e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });
});