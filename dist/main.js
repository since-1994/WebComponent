/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GabiaModal; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GabiaModal = /*#__PURE__*/function () {
  function GabiaModal(options) {
    _classCallCheck(this, GabiaModal);

    console.log(options);
    this.id = options.id;
    this.width = options.width;

    this._render();
  }

  _createClass(GabiaModal, [{
    key: "open",
    value: function open() {
      var wrapper = document.querySelector("#".concat(this.id));
      wrapper.classList.add("visible");
    }
  }, {
    key: "_render",
    value: function _render() {
      var wrapper = document.createElement("div");
      wrapper.innerHTML = "\n        <style>\n        @keyframes fromBottom{ \n          from{\n              transform: translate(-50%, -60%);\n          }\n          to{\n              transform: translate(-50%, -50%)\n          }\n        }\n        @keyframes fromBottomLong{ \n          from{\n              transform: translate(-50%, -20px);\n          }\n          to{\n              transform: translate(-50%)\n          }\n        }\n        .wrapper {\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100vh;\n          background-color: rgba(0, 0, 0, 0.3);\n          visibility: hidden;\n        }\n        .wrapper.long{\n          overflow-y: scroll;\n        }\n        .wrapper.visible{\n          visibility: visible;\n        }\n        .wrapper .modal{\n          position: relative;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          background-color: #fff;\n          width: ".concat(this.width, "px;\n          padding: 10px;\n          min-height: 300px;\n          border-radius: 10px;\n          padding: 10px;\n        }\n        .wrapper.long .modal{\n            top: 20px;\n            transform: translate(-50%);\n        }\n        .wrapper.visible .modal{\n          animation: fromBottom .25s ease-in;\n        }   \n      \n        .wrapper.long.visible .modal{\n          animation: fromBottomLong .25s ease-in;\n        }\n  \n        @media only screen and (max-width: 768px) {\n            .wrapper .modal{\n              width: 90%;\n            }\n        }\n      </style>\n      <div class=\"modal\">\n      </div>\n        ");
      var modal = wrapper.querySelector(".modal");
      modal.appendChild(document.querySelector("#".concat(this.id)));
    }
  }]);

  return GabiaModal;
}();



/***/ })
/******/ 	]);
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GabiaModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';
// import './components/GabiaModal';
// import './components/GabiaButton';
// import './components/GabiaTooltip';

}();
/******/ })()
;