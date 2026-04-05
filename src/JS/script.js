"use strict";

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
end.addEventListener('click', ()=>{
  close();
});