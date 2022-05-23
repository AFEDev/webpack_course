/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./analytics.ts":
/*!**********************!*\
  !*** ./analytics.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction createAnalytics() {\n  var counter = 0;\n  var isDestroyed = false;\n\n  var listener = function listener() {\n    return counter++;\n  };\n\n  document.addEventListener('click', listener);\n  return {\n    destroy: function destroy() {\n      document.removeEventListener('click', listener);\n      isDestroyed = true;\n    },\n    getClicks: function getClicks() {\n      if (isDestroyed) {\n        return \"Analytics is destroyed. Total counter is: \".concat(counter, \" \");\n      }\n\n      return counter;\n    }\n  };\n}\n\nwindow['analytics'] = createAnalytics();\n\n\n//# sourceURL=webpack:///./analytics.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./analytics.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;