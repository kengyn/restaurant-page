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
  home.setAttribute("id", "home");
  services.setAttribute("id", "services");
  about.setAttribute("id", "about");

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
  home.setAttribute("id", "home");
  services.setAttribute("id", "services");
  about.setAttribute("id", "about");

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
  let price = document.createElement("h1");

  mainDiv.classList.add("menuMainContent");
  header1.textContent = "SERVICES";
  header2.setAttribute("style", "white-space: pre;");
  header2.textContent = "Don't want your burger? \r\n mine now hehe";
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

(0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])(content);

document.addEventListener("click", (e) => {
  if (e.target.id === "home") {
    content.innerHTML = "";
    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])(content);
  } else if (e.target.id === "services") {
    content.innerHTML = "";
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(content);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbERlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNwREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDSjs7QUFFOUI7O0FBRUEscURBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBUTtBQUNaLElBQUk7QUFDSjtBQUNBLElBQUksaURBQVE7QUFDWjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKGNvbnRlbnRIb29rKSB7XG4gIC8vIE5BVlxuICBsZXQgbmF2aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGxldCB1bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGV0IGhvbWVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgc2VydmljZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgYWJvdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsZXQgc2VydmljZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgaG9tZS5ocmVmID0gXCIjXCI7XG4gIHNlcnZpY2VzLmhyZWYgPSBcIiNcIjtcbiAgYWJvdXQuaHJlZiA9IFwiI1wiO1xuXG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcbiAgc2VydmljZXMudGV4dENvbnRlbnQgPSBcIlNFUlZJQ0VTXCI7XG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJBQk9VVFwiO1xuICBob21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcbiAgc2VydmljZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZXJ2aWNlc1wiKTtcbiAgYWJvdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFwiKTtcblxuICBob21lTGlzdC5hcHBlbmRDaGlsZChob21lKTtcbiAgc2VydmljZXNMaXN0LmFwcGVuZENoaWxkKHNlcnZpY2VzKTtcbiAgYWJvdXRMaXN0LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgdWxpc3QuYXBwZW5kQ2hpbGQoaG9tZUxpc3QpO1xuICB1bGlzdC5hcHBlbmRDaGlsZChzZXJ2aWNlc0xpc3QpO1xuICB1bGlzdC5hcHBlbmRDaGlsZChhYm91dExpc3QpO1xuICBuYXZpLmFwcGVuZENoaWxkKHVsaXN0KTtcbiAgLy8gTkFWXG5cbiAgLy8gTUFJTiBDT05URU5UXG4gIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGxldCBoZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwiaW5kZXhNYWluQ29udGVudFwiKTtcbiAgaGVhZGVyMS50ZXh0Q29udGVudCA9IFwiS0lMTCBCT1JHRVJcIjtcbiAgaGVhZGVyMi50ZXh0Q29udGVudCA9IFwid2Uga2lsbCBiT3JnZXJcIjtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IFwiS0lMTCBCT1JHRVIgTk9XXCI7XG5cbiAgYnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcjEpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcjIpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gIC8vIE1BSU4gQ09OVEVOVFxuXG4gIGNvbnRlbnRIb29rLmFwcGVuZENoaWxkKG5hdmkpO1xuICBjb250ZW50SG9vay5hcHBlbmRDaGlsZChtYWluRGl2KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KGNvbnRlbnRIb29rKSB7XG4gIC8vIE5BVlxuICBsZXQgbmF2aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGxldCB1bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgbGV0IGhvbWVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgc2VydmljZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgYWJvdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsZXQgc2VydmljZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgaG9tZS5ocmVmID0gXCIjXCI7XG4gIHNlcnZpY2VzLmhyZWYgPSBcIiNcIjtcbiAgYWJvdXQuaHJlZiA9IFwiI1wiO1xuXG4gIGhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcbiAgc2VydmljZXMudGV4dENvbnRlbnQgPSBcIlNFUlZJQ0VTXCI7XG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJBQk9VVFwiO1xuICBob21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcbiAgc2VydmljZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZXJ2aWNlc1wiKTtcbiAgYWJvdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhYm91dFwiKTtcblxuICBob21lTGlzdC5hcHBlbmRDaGlsZChob21lKTtcbiAgc2VydmljZXNMaXN0LmFwcGVuZENoaWxkKHNlcnZpY2VzKTtcbiAgYWJvdXRMaXN0LmFwcGVuZENoaWxkKGFib3V0KTtcbiAgdWxpc3QuYXBwZW5kQ2hpbGQoaG9tZUxpc3QpO1xuICB1bGlzdC5hcHBlbmRDaGlsZChzZXJ2aWNlc0xpc3QpO1xuICB1bGlzdC5hcHBlbmRDaGlsZChhYm91dExpc3QpO1xuICBuYXZpLmFwcGVuZENoaWxkKHVsaXN0KTtcbiAgLy8gTkFWXG5cbiAgLy8gTUFJTiBDT05URU5UXG4gIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGxldCBoZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBsZXQgaW1hZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxldCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51TWFpbkNvbnRlbnRcIik7XG4gIGhlYWRlcjEudGV4dENvbnRlbnQgPSBcIlNFUlZJQ0VTXCI7XG4gIGhlYWRlcjIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aGl0ZS1zcGFjZTogcHJlO1wiKTtcbiAgaGVhZGVyMi50ZXh0Q29udGVudCA9IFwiRG9uJ3Qgd2FudCB5b3VyIGJ1cmdlcj8gXFxyXFxuIG1pbmUgbm93IGhlaGVcIjtcbiAgaW1hZy5zcmMgPSBcIi4vZWF0LWJ1cmdlci5naWZcIjtcblxuICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcjEpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcjIpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGltYWcpO1xuXG4gIC8vIE1BSU4gQ09OVEVOVFxuXG4gIGNvbnRlbnRIb29rLmFwcGVuZENoaWxkKG5hdmkpO1xuICBjb250ZW50SG9vay5hcHBlbmRDaGlsZChtYWluRGl2KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxubG9hZEhvbWUoY29udGVudCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuaWQgPT09IFwiaG9tZVwiKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxvYWRIb21lKGNvbnRlbnQpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcInNlcnZpY2VzXCIpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbG9hZE1lbnUoY29udGVudCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9