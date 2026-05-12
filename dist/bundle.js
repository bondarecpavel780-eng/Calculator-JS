/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/modules/calculator.js"
/*!**************************************!*\
  !*** ./src/JS/modules/calculator.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction calculator() {\n  var display = document.querySelector(\".text\"),\n    btns = document.querySelectorAll(\".panel button\");\n  btns.forEach(function (button) {\n    button.addEventListener(\"click\", function () {\n      // button delete last symbol\n      if (button.id == \"del\") {\n        display.value = display.value.slice(0, -1);\n      }\n      // button delete all\n      else if (button.id === \"AC\") {\n        display.value = \"\";\n      }\n      // count the percentage\n      else if (button.id === \"procent\") {\n        try {\n          var val = display.value;\n          if (!val) return;\n          var match = val.match(/^(.*)([+\\-*/])(\\d+\\.?\\d*)$/); // any symbol any times and find op\n          if (match) {\n            // save the received data into variables \n            var baseExpr = match[1];\n            var operator = match[2];\n            var percentNum = parseFloat(match[3]);\n            var baseValue = new Function(\"return \" + baseExpr)();\n            var percentValue;\n\n            // calculate the percentage by sign.\n            // logic for +, - and other operations\n            if (operator === \"+\" || operator === \"-\") {\n              percentValue = baseValue * percentNum / 100;\n            } else {\n              percentValue = percentNum / 100;\n            }\n            // return result \n            var finalExpression = baseExpr + operator + percentValue;\n            var res = new Function(\"return \" + finalExpression)();\n            if (res === Infinity || res === -Infinity || Number.isNaN(res)) {\n              display.value = \"Error\";\n            } else {\n              display.value = res;\n            }\n          } else {\n            var _res = new Function(\"return \" + val)() / 100;\n            display.value = _res;\n          }\n        } catch (error) {\n          display.value = \"Error\";\n        }\n      }\n      // button result \n      else if (button.id === \"result\") {\n        if (display.value.trim() === \"Error\" || !display.value.trim()) return; // fixed bug \"Function Error()\"\n        try {\n          if (display.value) {\n            var _res2 = new Function(\"return \" + display.value.trim())();\n            if (_res2 === Infinity || _res2 === -Infinity || Number.isNaN(_res2)) {\n              display.value = \"Error\";\n            } else {\n              display.value = parseFloat(_res2.toFixed(5));\n            }\n          }\n        } catch (error) {\n          display.value = \"Error\";\n        }\n      } else {\n        if (display.value.trim() === \"Error\") display.value = \"\";\n        // double operator protection\n        var ops = ['+', '-', '*', '/', '.'];\n        var last = display.value.slice(-1);\n        var next = button.innerText;\n        if (ops.includes(last) && ops.includes(next)) {\n          display.value = display.value.slice(0, -1) + next;\n        } else {\n          display.value += next;\n        }\n      }\n    });\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/calculator.js?\n}");

/***/ },

/***/ "./src/JS/modules/exit.js"
/*!********************************!*\
  !*** ./src/JS/modules/exit.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction exit() {\n  // button exit\n  var end = document.querySelector('.exit');\n  var display = document.querySelector('.text');\n  end.addEventListener('click', function () {\n    display.value = \"Bye!\";\n    setTimeout(function () {\n      display.value = \"\";\n      close();\n    }, 2000);\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exit);\n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/exit.js?\n}");

/***/ },

/***/ "./src/JS/modules/keyboardFunction.js"
/*!********************************************!*\
  !*** ./src/JS/modules/keyboardFunction.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction keyboardFunction() {\n  // add buttons from the keyboard\n  document.addEventListener('keydown', function (e) {\n    if (e.key === 'Enter' || e.key === '=') {\n      document.getElementById('result').click();\n    } else if (e.key === 'Escape') {\n      document.getElementById('AC').click();\n    }\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboardFunction);\n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/keyboardFunction.js?\n}");

/***/ },

/***/ "./src/JS/modules/modalWindow.js"
/*!***************************************!*\
  !*** ./src/JS/modules/modalWindow.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nvar modalTimerId = null;\nfunction setModalTimer(id) {\n  modalTimerId = id;\n}\n\n// Open Modal Window\nfunction openModal() {\n  var modalSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.modal';\n  var modal = document.querySelector(modalSelector);\n  if (!modal || modal.classList.contains('show')) return;\n  modal.classList.add('show');\n  modal.classList.remove('hide');\n  document.body.style.overflow = 'hidden';\n  if (modalTimerId) {\n    clearTimeout(modalTimerId);\n    modalTimerId = null;\n  }\n}\n\n// Close Modal Window\nfunction closeModal() {\n  var modalSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.modal';\n  var modal = document.querySelector(modalSelector);\n  if (!modal) return;\n  modal.classList.add('hide');\n  modal.classList.remove('show');\n  document.body.style.overflow = '';\n}\nfunction modalWindow(triggerSelector, modalSelector, timerId) {\n  //Modal Window\n  setModalTimer(timerId);\n  var modalTrigger = document.querySelectorAll(triggerSelector);\n  var modal = document.querySelector(modalSelector);\n  if (!modal || modalTrigger.length === 0) return;\n  modalTrigger.forEach(function (btn) {\n    btn.addEventListener('click', function () {\n      openModal(modalSelector);\n    });\n  });\n  modal.addEventListener('click', function (e) {\n    if (e.target === modal || e.target.getAttribute('data-close') == '') {\n      closeModal(modalSelector);\n    }\n  });\n  document.addEventListener('keydown', function (e) {\n    if (e.code === \"Escape\" && modal.classList.contains('show')) {\n      closeModal(modalSelector);\n    }\n  });\n  return {\n    openModal: openModal,\n    closeModal: closeModal\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/modalWindow.js?\n}");

/***/ },

/***/ "./src/JS/modules/switcher.js"
/*!************************************!*\
  !*** ./src/JS/modules/switcher.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction switcher() {\n  // switcher \n  var switcher = document.querySelector('.theme');\n\n  // checking \n  if (localStorage.getItem('theme') === 'dark') {\n    document.body.classList.add('dark');\n  }\n  switcher.addEventListener('click', function () {\n    document.body.classList.toggle('dark');\n    if (document.body.classList.contains('dark')) {\n      localStorage.setItem('theme', 'dark'); // add theme in localStorage\n    } else {\n      localStorage.removeItem('theme');\n    }\n  });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (switcher);\n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/switcher.js?\n}");

/***/ },

/***/ "./src/JS/modules/tabs.js"
/*!********************************!*\
  !*** ./src/JS/modules/tabs.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modalWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalWindow.js */ \"./src/JS/modules/modalWindow.js\");\n// Data for message \n\nfunction tabs() {\n  var message = {\n    loading: {\n      img: 'img/loading_cat.jpg',\n      text: 'loading...'\n    },\n    success: {\n      img: 'img/cat.jpg',\n      text: ''\n    },\n    fail: {\n      img: 'img/sad_cat.jpg',\n      text: 'Something went wrong('\n    }\n  };\n  var forms = document.querySelectorAll('form');\n  forms.forEach(function (item) {\n    postData(item);\n  });\n  function postData(form) {\n    form.addEventListener('submit', function (e) {\n      e.preventDefault(); //prevents browser restart\n\n      //loading message\n      var statusMessage = document.createElement('div');\n      statusMessage.classList.add('status');\n      statusMessage.innerHTML = \"\\n    <img src=\\\"\".concat(message.loading.img, \"\\\" alt=\\\"status\\\">\\n    <div style=\\\"margin-top: 10px;\\\">\").concat(message.loading.text, \"</div> \");\n      form.append(statusMessage);\n      var formData = new FormData(form);\n      var object = {};\n      formData.forEach(function (value, key) {\n        object[key] = value;\n      });\n      fetch('server.php', {\n        method: 'POST',\n        headers: {\n          'Content-type': 'application/json'\n        },\n        body: JSON.stringify(object)\n      }).then(function (data) {\n        return data.json();\n      }).then(function (data) {\n        console.log('Saved to db:', data);\n        showThanksModal(message.success);\n        statusMessage.remove();\n      })[\"catch\"](function (err) {\n        console.error('Error:', err);\n        showThanksModal(message.fail);\n        statusMessage.remove();\n      })[\"finally\"](function () {\n        form.reset();\n      });\n    });\n  }\n  function showThanksModal(message) {\n    var prevModalDialog = document.querySelector('.modal__dialog');\n    prevModalDialog.classList.remove('show');\n    prevModalDialog.classList.add('hide');\n    (0,_modalWindow_js__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal');\n    var thanksModal = document.createElement('div');\n    thanksModal.classList.add('modal__dialog');\n    thanksModal.innerHTML = \"\\n  <div class=\\\"modal__content\\\">\\n            <div class=\\\"modal__close\\\" data-close>&times;</div>\\n            <div class=\\\"modal__title\\\">\\n              <img src=\\\"\".concat(message.img, \"\\\" alt=\\\"\\u0441\\u0442\\u0430\\u0442\\u0443\\u0441\\\">\\n              <div style=\\\"margin-top: 10px;\\\">\").concat(message.text, \"</div>\\n            </div>\\n        </div>\\n    \");\n    document.querySelector('.modal').append(thanksModal);\n    setTimeout(function () {\n      thanksModal.remove();\n      prevModalDialog.classList.add('show');\n      prevModalDialog.classList.remove('hide');\n      (0,_modalWindow_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)();\n    }, 4000);\n  }\n  ;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://calculator-js/./src/JS/modules/tabs.js?\n}");

/***/ },

/***/ "./src/JS/script.js"
/*!**************************!*\
  !*** ./src/JS/script.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/JS/modules/tabs.js\");\n/* harmony import */ var _modules_calculator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calculator.js */ \"./src/JS/modules/calculator.js\");\n/* harmony import */ var _modules_switcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/switcher.js */ \"./src/JS/modules/switcher.js\");\n/* harmony import */ var _modules_keyboardFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/keyboardFunction.js */ \"./src/JS/modules/keyboardFunction.js\");\n/* harmony import */ var _modules_exit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/exit.js */ \"./src/JS/modules/exit.js\");\n/* harmony import */ var _modules_modalWindow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modalWindow.js */ \"./src/JS/modules/modalWindow.js\");\n\n\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var modalTimerId = setTimeout(function () {\n    return (0,_modules_modalWindow_js__WEBPACK_IMPORTED_MODULE_5__.openModal)('.modal', modalTimerId);\n  }, 60000);\n  (0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_modules_calculator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_switcher_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_keyboardFunction_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_exit_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_modules_modalWindow_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('[data-modal]', '.modal', modalTimerId);\n});\n\n//# sourceURL=webpack://calculator-js/./src/JS/script.js?\n}");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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