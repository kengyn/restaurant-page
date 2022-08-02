/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome(contentHook) {
  // NAV
  let navi = document.createElement("nav");
  let ulist = document.createElement("ul");
  let homeList = document.createElement("li");
  let servicesList = document.createElement("li");
  let aboutList = document.createElement("li");
  let home = document.createElement("a");
  let services = document.createElement("a");
  let about = document.createElement("a");

  home.href = "#";
  services.href = "#";
  about.href = "#";

  home.textContent = "HOME";
  services.textContent = "SERVICES";
  about.textContent = "ABOUT";

  homeList.appendChild(home);
  servicesList.appendChild(services);
  aboutList.appendChild(about);
  ulist.appendChild(homeList);
  ulist.appendChild(servicesList);
  ulist.appendChild(aboutList);
  navi.appendChild(ulist);
  // NAV

  // MAIN CONTENT
  let mainDiv = document.createElement("div");
  let header1 = document.createElement("h1");
  let header2 = document.createElement("h2");
  let btn = document.createElement("button");
  let span = document.createElement("span");
  mainDiv.classList.add("indexMainContent");
  header1.textContent = "KILL BORGER";
  header2.textContent = "we kill bOrger";
  span.textContent = "KILL BORGER NOW";

  btn.appendChild(span);
  mainDiv.appendChild(header1);
  mainDiv.appendChild(header2);
  mainDiv.appendChild(btn);
  // MAIN CONTENT

  contentHook.appendChild(navi);
  contentHook.appendChild(mainDiv);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu(contentHook) {
  // NAV
  let navi = document.createElement("nav");
  let ulist = document.createElement("ul");
  let homeList = document.createElement("li");
  let servicesList = document.createElement("li");
  let aboutList = document.createElement("li");
  let home = document.createElement("a");
  let services = document.createElement("a");
  let about = document.createElement("a");

  home.href = "#";
  services.href = "#";
  about.href = "#";

  home.textContent = "HOME";
  services.textContent = "SERVICES";
  about.textContent = "ABOUT";

  homeList.appendChild(home);
  servicesList.appendChild(services);
  aboutList.appendChild(about);
  ulist.appendChild(homeList);
  ulist.appendChild(servicesList);
  ulist.appendChild(aboutList);
  navi.appendChild(ulist);
  // NAV

  // MAIN CONTENT
  let mainDiv = document.createElement("div");
  let header1 = document.createElement("h1");
  let header2 = document.createElement("h2");
  let imag = document.createElement("img");

  mainDiv.classList.add("menuMainContent");
  header1.textContent = "SERVICES";
  header2.setAttribute("style", "white-space: pre;");
  header2.textContent = "Don't want your burger? \r\n Ok mine hehe";
  imag.src = "./eat-burger.gif";

  mainDiv.appendChild(header1);
  mainDiv.appendChild(header2);
  mainDiv.appendChild(imag);

  // MAIN CONTENT

  contentHook.appendChild(navi);
  contentHook.appendChild(mainDiv);
}


/***/ })

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



let content = document.querySelector("#content");

(0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(content);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0NlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O1VDaERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0o7O0FBRTlCOztBQUVBLGlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZShjb250ZW50SG9vaykge1xuICAvLyBOQVZcbiAgbGV0IG5hdmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBsZXQgdWxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxldCBob21lTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGV0IHNlcnZpY2VzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGV0IGFib3V0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGV0IHNlcnZpY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxldCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gIGhvbWUuaHJlZiA9IFwiI1wiO1xuICBzZXJ2aWNlcy5ocmVmID0gXCIjXCI7XG4gIGFib3V0LmhyZWYgPSBcIiNcIjtcblxuICBob21lLnRleHRDb250ZW50ID0gXCJIT01FXCI7XG4gIHNlcnZpY2VzLnRleHRDb250ZW50ID0gXCJTRVJWSUNFU1wiO1xuICBhYm91dC50ZXh0Q29udGVudCA9IFwiQUJPVVRcIjtcblxuICBob21lTGlzdC5hcHBlbmRDaGlsZChob21lKTtcbiAgc2VydmljZXNMaXN0LmFwcGVuZENoaWxkKHNlcnZpY2VzKTtcbiAgYWJvdXRMaXN0LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgdWxpc3QuYXBwZW5kQ2hpbGQoaG9tZUxpc3QpO1xuICB1bGlzdC5hcHBlbmRDaGlsZChzZXJ2aWNlc0xpc3QpO1xuICB1bGlzdC5hcHBlbmRDaGlsZChhYm91dExpc3QpO1xuICBuYXZpLmFwcGVuZENoaWxkKHVsaXN0KTtcbiAgLy8gTkFWXG5cbiAgLy8gTUFJTiBDT05URU5UXG4gIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGxldCBoZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwiaW5kZXhNYWluQ29udGVudFwiKTtcbiAgaGVhZGVyMS50ZXh0Q29udGVudCA9IFwiS0lMTCBCT1JHRVJcIjtcbiAgaGVhZGVyMi50ZXh0Q29udGVudCA9IFwid2Uga2lsbCBiT3JnZXJcIjtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IFwiS0lMTCBCT1JHRVIgTk9XXCI7XG5cbiAgYnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcjEpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcjIpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gIC8vIE1BSU4gQ09OVEVOVFxuXG4gIGNvbnRlbnRIb29rLmFwcGVuZENoaWxkKG5hdmkpO1xuICBjb250ZW50SG9vay5hcHBlbmRDaGlsZChtYWluRGl2KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KGNvbnRlbnRIb29rKSB7XG4gIC8vIE5BVlxuICBsZXQgbmF2aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGxldCB1bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGV0IGhvbWVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgc2VydmljZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgYWJvdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsZXQgc2VydmljZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgaG9tZS5ocmVmID0gXCIjXCI7XG4gIHNlcnZpY2VzLmhyZWYgPSBcIiNcIjtcbiAgYWJvdXQuaHJlZiA9IFwiI1wiO1xuXG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcbiAgc2VydmljZXMudGV4dENvbnRlbnQgPSBcIlNFUlZJQ0VTXCI7XG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJBQk9VVFwiO1xuXG4gIGhvbWVMaXN0LmFwcGVuZENoaWxkKGhvbWUpO1xuICBzZXJ2aWNlc0xpc3QuYXBwZW5kQ2hpbGQoc2VydmljZXMpO1xuICBhYm91dExpc3QuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICB1bGlzdC5hcHBlbmRDaGlsZChob21lTGlzdCk7XG4gIHVsaXN0LmFwcGVuZENoaWxkKHNlcnZpY2VzTGlzdCk7XG4gIHVsaXN0LmFwcGVuZENoaWxkKGFib3V0TGlzdCk7XG4gIG5hdmkuYXBwZW5kQ2hpbGQodWxpc3QpO1xuICAvLyBOQVZcblxuICAvLyBNQUlOIENPTlRFTlRcbiAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbGV0IGhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGxldCBpbWFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51TWFpbkNvbnRlbnRcIik7XG4gIGhlYWRlcjEudGV4dENvbnRlbnQgPSBcIlNFUlZJQ0VTXCI7XG4gIGhlYWRlcjIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aGl0ZS1zcGFjZTogcHJlO1wiKTtcbiAgaGVhZGVyMi50ZXh0Q29udGVudCA9IFwiRG9uJ3Qgd2FudCB5b3VyIGJ1cmdlcj8gXFxyXFxuIE9rIG1pbmUgaGVoZVwiO1xuICBpbWFnLnNyYyA9IFwiLi9lYXQtYnVyZ2VyLmdpZlwiO1xuXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyMSk7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyMik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW1hZyk7XG5cbiAgLy8gTUFJTiBDT05URU5UXG5cbiAgY29udGVudEhvb2suYXBwZW5kQ2hpbGQobmF2aSk7XG4gIGNvbnRlbnRIb29rLmFwcGVuZENoaWxkKG1haW5EaXYpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5sb2FkTWVudShjb250ZW50KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==