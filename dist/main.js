/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/modules/calculator.js"
/*!**************************************!*\
  !*** ./src/JS/modules/calculator.js ***!
  \**************************************/
(module) {

eval("{ function calculator() {\r\n \r\n const display = document.querySelector(\".text\"),\r\n    btns = document.querySelectorAll(\".panel button\");\r\n\r\n  btns.forEach((button) => {\r\n    button.addEventListener(\"click\", () => {\r\n      // button delete last symbol\r\n      if (button.id == \"del\") {\r\n        display.value = display.value.slice(0, -1);\r\n      }\r\n      // button delete all\r\n      else if (button.id === \"AC\") {\r\n        display.value = \"\";\r\n      }\r\n      // count the percentage\r\n      else if (button.id === \"procent\") {\r\n        try {\r\n          let val = display.value;\r\n          if (!val) return;\r\n          let match = val.match(/^(.*)([+\\-*/])(\\d+\\.?\\d*)$/);// any symbol any times and find op\r\n          if (match) {\r\n            // save the received data into variables \r\n            let baseExpr = match[1];\r\n            let operator = match[2];\r\n            let percentNum = parseFloat(match[3]);\r\n\r\n            let baseValue = new Function(\"return \" + baseExpr)();\r\n            let percentValue;\r\n\r\n            // calculate the percentage by sign.\r\n            // logic for +, - and other operations\r\n            if (operator === \"+\" || operator === \"-\") {\r\n              percentValue = (baseValue * percentNum) / 100;\r\n            } else {\r\n              percentValue = percentNum / 100;\r\n            }\r\n            // return result \r\n            let finalExpression = baseExpr + operator + percentValue;\r\n            let res = new Function(\"return \" + finalExpression)();\r\n\r\n            if (res === Infinity || res === -Infinity || Number.isNaN(res)) {\r\n              display.value = \"Error\";\r\n            } else {\r\n              display.value = res;\r\n            }\r\n          } else {\r\n            let res = new Function(\"return \" + val)() / 100;\r\n            display.value = res;\r\n          }\r\n        } catch (error) {\r\n          display.value = \"Error\";\r\n        }\r\n      }\r\n      // button result \r\n      else if (button.id === \"result\") {\r\n        if (display.value.trim() === \"Error\" || !display.value.trim()) return; // fixed bug \"Function Error()\"\r\n        try {\r\n          if (display.value) {\r\n            let res = new Function(\"return \" + display.value.trim())();\r\n            if (res === Infinity || res === -Infinity || Number.isNaN(res)) {\r\n              display.value = \"Error\";\r\n            } else {\r\n              display.value = parseFloat(res.toFixed(5));\r\n            }\r\n          }\r\n        } catch (error) {\r\n          display.value = \"Error\";\r\n        }\r\n      } else {\r\n        if (display.value.trim() === \"Error\") display.value = \"\";\r\n        // double operator protection\r\n        const ops = ['+', '-', '*', '/', '.'];\r\n        let last = display.value.slice(-1);\r\n        let next = button.innerText;\r\n\r\n        if (ops.includes(last) && ops.includes(next)) {\r\n          display.value = display.value.slice(0, -1) + next;\r\n        } else {\r\n          display.value += next;\r\n        }\r\n      }\r\n    });\r\n  });\r\n\r\n}\r\n\r\nmodule.exports = calculator;\n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/calculator.js?\n}");

/***/ },

/***/ "./src/JS/modules/exit.js"
/*!********************************!*\
  !*** ./src/JS/modules/exit.js ***!
  \********************************/
(module) {

eval("{function exit () {\r\n  // button exit\r\n  const end = document.querySelector('.exit');\r\n  const display = document.querySelector('.text');\r\n  \r\n  end.addEventListener('click', () => {\r\n    display.value = \"Bye!\";\r\n    setTimeout(() => {\r\n      display.value = \"\";\r\n      close();\r\n    }, 2000);\r\n  });\r\n}\r\n\r\nmodule.exports = exit;\n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/exit.js?\n}");

/***/ },

/***/ "./src/JS/modules/keyboardFunction.js"
/*!********************************************!*\
  !*** ./src/JS/modules/keyboardFunction.js ***!
  \********************************************/
(module) {

eval("{function keyboardFunction() {\r\n\r\n// add buttons from the keyboard\r\ndocument.addEventListener('keydown', (e) => {\r\n  if (e.key === 'Enter' || e.key === '=') {\r\n    document.getElementById('result').click();\r\n  }\r\n  else if (e.key === 'Escape') {\r\n    document.getElementById('AC').click();\r\n  }\r\n});\r\n}\r\n\r\nmodule.exports = keyboardFunction;\n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/keyboardFunction.js?\n}");

/***/ },

/***/ "./src/JS/modules/modalWindow.js"
/*!***************************************!*\
  !*** ./src/JS/modules/modalWindow.js ***!
  \***************************************/
(module) {

eval("{function ModalWindow() {\r\n  //Modal Window\r\n  const modalTrigger = document.querySelector('[data-modal]'),\r\n    modal = document.querySelector('.modal');\r\n\r\n  // Open Modal Window\r\n  function openModal() {\r\n    modal.classList.add('show');\r\n    modal.classList.remove('hide');\r\n    document.body.style.overflow = 'hidden';\r\n  }\r\n  \r\n  // Close Modal Window\r\n  function closeModal() {\r\n    modal.classList.add('hide');\r\n    modal.classList.remove('show');\r\n    document.body.style.overflow = '';\r\n  }\r\n\r\n  modalTrigger.addEventListener('click', () => {\r\n    openModal();\r\n  });\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if (e.target === modal || e.target.getAttribute('data-close') == '') {\r\n      closeModal();\r\n    }\r\n  });\r\n\r\n  document.addEventListener('keydown', (e) => {\r\n    if (e.code === \"Escape\" && modal.classList.contains('show')) {\r\n      closeModal();\r\n    }\r\n  });\r\n\r\n  return { openModal, closeModal };\r\n}\r\n\r\nmodule.exports = ModalWindow;\n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/modalWindow.js?\n}");

/***/ },

/***/ "./src/JS/modules/switcher.js"
/*!************************************!*\
  !*** ./src/JS/modules/switcher.js ***!
  \************************************/
(module) {

eval("{function switcher() {\r\n\r\n    // switcher \r\n    const switcher = document.querySelector('.theme');\r\n\r\n    // checking \r\n    if (localStorage.getItem('theme') === 'dark') {\r\n        document.body.classList.add('dark');\r\n    }\r\n\r\n    switcher.addEventListener('click', () => {\r\n        document.body.classList.toggle('dark');\r\n\r\n\r\n        if (document.body.classList.contains('dark')) {\r\n            localStorage.setItem('theme', 'dark'); // add theme in localStorage\r\n        } else {\r\n            localStorage.removeItem('theme');\r\n        }\r\n    });\r\n}\r\n\r\nmodule.exports = switcher; \n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/switcher.js?\n}");

/***/ },

/***/ "./src/JS/modules/tabs.js"
/*!********************************!*\
  !*** ./src/JS/modules/tabs.js ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{// Data for message \r\nfunction tabs() {\r\n    const ModalWindow = __webpack_require__(/*! ./modalWindow */ \"./src/JS/modules/modalWindow.js\");\r\n    const { openModal, closeModal } = ModalWindow();\r\n    \r\n    const message = {\r\n        loading: {\r\n            img: 'img/loading_cat.jpg',\r\n            text: 'loading...'\r\n        },\r\n        success: {\r\n            img: 'img/cat.jpg',\r\n            text: ''\r\n        },\r\n        fail: {\r\n            img: 'img/sad_cat.jpg',\r\n            text: 'Something went wrong('\r\n        }\r\n    };\r\n\r\n    const forms = document.querySelectorAll('form');\r\n    \r\n    forms.forEach(item => {\r\n        postData(item);\r\n    });\r\n\r\n    function postData(form) {\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault(); //prevents browser restart\r\n\r\n            //loading message\r\n            const statusMessage = document.createElement('div');\r\n            statusMessage.classList.add('status');\r\n            statusMessage.innerHTML = `\r\n    <img src=\"${message.loading.img}\" alt=\"status\">\r\n    <div style=\"margin-top: 10px;\">${message.loading.text}</div> `;\r\n            form.append(statusMessage);\r\n\r\n            const formData = new FormData(form);\r\n\r\n            const object = {};\r\n            formData.forEach(function (value, key) {\r\n                object[key] = value;\r\n            });\r\n\r\n            fetch('server.php', {\r\n                method: 'POST',\r\n                headers: {\r\n                    'Content-type': 'application/json',\r\n                },\r\n                body: JSON.stringify(object)\r\n            }).then(data => data.text())\r\n                .then(data => {\r\n                    console.log(data);\r\n                    showThanksModal(message.success);\r\n                    statusMessage.remove();\r\n                }).catch(() => {\r\n                    showThanksModal(message.fail);\r\n                    statusMessage.remove();\r\n                }).finally(() => {\r\n                    form.reset();\r\n                })\r\n        });\r\n    }\r\n\r\n    function showThanksModal(message) {\r\n        const prevModalDialog = document.querySelector('.modal__dialog');\r\n        prevModalDialog.classList.remove('show');\r\n        prevModalDialog.classList.add('hide');\r\n        openModal();\r\n\r\n        const thanksModal = document.createElement('div');\r\n        thanksModal.classList.add('modal__dialog');\r\n        thanksModal.innerHTML = `\r\n  <div class=\"modal__content\">\r\n            <div class=\"modal__close\" data-close>&times;</div>\r\n            <div class=\"modal__title\">\r\n              <img src=\"${message.img}\" alt=\"статус\">\r\n              <div style=\"margin-top: 10px;\">${message.text}</div>\r\n            </div>\r\n        </div>\r\n    `;\r\n\r\n        document.querySelector('.modal').append(thanksModal);\r\n        setTimeout(() => {\r\n            thanksModal.remove();\r\n            prevModalDialog.classList.add('show');\r\n            prevModalDialog.classList.remove('hide');\r\n            closeModal();\r\n        }, 4000)\r\n    };\r\n}\r\n\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/tabs.js?\n}");

/***/ },

/***/ "./src/JS/script.js"
/*!**************************!*\
  !*** ./src/JS/script.js ***!
  \**************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n\r\n  const tabs = __webpack_require__(/*! ./modules/tabs */ \"./src/JS/modules/tabs.js\"),\r\n    calculator = __webpack_require__(/*! ./modules/calculator */ \"./src/JS/modules/calculator.js\"),\r\n    switcher = __webpack_require__(/*! ./modules/switcher */ \"./src/JS/modules/switcher.js\"),\r\n    keyboardFunction = __webpack_require__(/*! ./modules/keyboardFunction */ \"./src/JS/modules/keyboardFunction.js\"),\r\n    exit = __webpack_require__(/*! ./modules/exit */ \"./src/JS/modules/exit.js\");\r\n\r\n  tabs();\r\n  calculator();\r\n  switcher();\r\n  keyboardFunction();\r\n  exit();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://calculator-js/./src/JS/script.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/JS/script.js");
/******/ 	
/******/ })()
;