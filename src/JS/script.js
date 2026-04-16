"use strict";
window.addEventListener('DOMContentLoaded', function () {
  const display = document.querySelector(".text"),
    btns = document.querySelectorAll(".panel button");

  btns.forEach((button) => {
    button.addEventListener("click", () => {
      // button delete last symbol
      if (button.id == "del") {
        display.value = display.value.slice(0, -1);
      }
      // button delete all
      else if (button.id === "AC") {
        display.value = "";
      }
      // count the percentage
      else if (button.id === "procent") {
        try {
          let val = display.value;
          if (!val) return;
          let match = val.match(/^(.*)([+\-*/])(\d+\.?\d*)$/);// any symbol any times and find op
          if (match) {
            // save the received data into variables 
            let baseExpr = match[1];
            let operator = match[2];
            let percentNum = parseFloat(match[3]);

            let baseValue = new Function("return " + baseExpr)();
            let percentValue;

            // calculate the percentage by sign.
            // logic for +, - and other operations
            if (operator === "+" || operator === "-") {
              percentValue = (baseValue * percentNum) / 100;
            } else {
              percentValue = percentNum / 100;
            }
            // return result 
            let finalExpression = baseExpr + operator + percentValue;
            let res = new Function("return " + finalExpression)();

            if (res === Infinity || res === -Infinity || Number.isNaN(res)) {
              display.value = "Error";
            } else {
              display.value = res;
            }
          } else {
            let res = new Function("return " + val)() / 100;
            display.value = res;
          }
        } catch (error) {
          display.value = "Error";
        }
      }
      // button result 
      else if (button.id === "result") {
        if (display.value.trim() === "Error" || !display.value.trim()) return; // fixed bug "Function Error()"
        try {
          if (display.value) {
            let res = new Function("return " + display.value.trim())();
            if (res === Infinity || res === -Infinity || Number.isNaN(res)) {
              display.value = "Error";
            } else {
              display.value = parseFloat(res.toFixed(5));
            }
          }
        } catch (error) {
          display.value = "Error";
        }
      } else {
        if (display.value.trim() === "Error") display.value = "";
      // double operator protection
        const ops = ['+', '-', '*', '/', '.'];
        let last = display.value.slice(-1);
        let next = button.innerText;

        if (ops.includes(last) && ops.includes(next)) {
          display.value = display.value.slice(0, -1) + next;
        } else {
          display.value += next;
        }
      }
    });
  });

  // switcher 
  const switcher = document.querySelector('.theme');

  switcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // button exit

  const end = document.querySelector('.exit');
  end.addEventListener('click', () => {
    display.value = "Bye!";
    setTimeout(() => {
      display.value = "";
      close();
    }, 2000);
  });

  //Modal Window

  const modalTrigger = document.querySelector('[data-modal]'),
    modal = document.querySelector('.modal');

function openModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}
modalTrigger.addEventListener('click', () => {
  openModal();
});

// Forms 
const forms = document.querySelectorAll('form');

const message = {
    loading: {
        img: 'img/loading_cat.jpg',
        text: 'loading...'
    },
    success: {
        img: 'img/cat.jpg',
        text: ''
    },
    fail: {
        img: 'img/sad_cat.jpg',
        text: 'Something went wrong('
    }
};

forms.forEach(item => {
  postData(item);
});

function postData(form) {
  form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
   statusMessage.innerHTML = `
    <img src="${message.loading.img}" alt="status">
    <div style="margin-top: 10px;">${message.loading.text}</div> `;
    form.append(statusMessage);

    const request = new XMLHttpRequest();
    request.open('POST', 'server.php');

    request.setRequestHeader('Content-type', 'application/json');
    const formData = new FormData(form);

    const object = {};
    formData.forEach(function(value, key){
      object[key] = value;
    });

    const json = JSON.stringify(object);

    request.send(json);

    request.addEventListener('load', ()=>{
      if(request.status === 200){
        console.log(request.response);
        showThanksModal(message.success);
        form.reset();
          statusMessage.remove();
      } else {
        showThanksModal(message.fail);
        statusMessage.remove();
      }
    })
  });
}

function showThanksModal(message) {
  const prevModalDialog = document.querySelector('.modal__dialog');

  prevModalDialog.classList.add('hide');
  openModal();

  const thanksModal = document.createElement('div');
  thanksModal.classList.add('modal__dialog');
  thanksModal.innerHTML = `
  <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">
              <img src="${message.img}" alt="статус">
              <div style="margin-top: 10px;">${message.text}</div>
            </div>
        </div>
    `;

  document.querySelector('.modal').append(thanksModal);
  setTimeout(()=>{
    thanksModal.remove();
    prevModalDialog.classList.add('show');
    prevModalDialog.classList.remove('hide');
    closeModal();
  },4000)
}

// Close Modal Window
  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close')=='') {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  });
});

// add buttons from the keyboard
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === '=') {
    document.getElementById('result').click();
  }
  else if (e.key === 'Escape') {
    document.getElementById('AC').click();
  }
});