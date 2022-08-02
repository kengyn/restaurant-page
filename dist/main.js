/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadAbout)
/* harmony export */ });
function loadAbout(contentHook) {
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
  let para = document.createElement("p");
  let imag = document.createElement("img");

  mainDiv.classList.add("aboutMainContent");
  header1.textContent = "ABOUT";
  para.textContent = "we like borger. so u pay us to eat ur burger";
  imag.src = "./dogee.png";

  mainDiv.appendChild(header1);
  mainDiv.appendChild(para);
  mainDiv.appendChild(imag);

  // MAIN CONTENT

  contentHook.appendChild(navi);
  contentHook.appendChild(mainDiv);
}


/***/ }),

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
  btn.setAttribute("id", "services");
  let span = document.createElement("span");
  span.setAttribute("id", "services");
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
  price.textContent = "$9";

  mainDiv.appendChild(header1);
  mainDiv.appendChild(header2);
  mainDiv.appendChild(imag);
  mainDiv.appendChild(price);

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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");




let content = document.querySelector("#content");

(0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])(content);

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.id === "home") {
    content.innerHTML = "";
    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])(content);
  } else if (e.target.id === "services") {
    content.innerHTML = "";
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(content);
  } else if (e.target.id === "about") {
    content.innerHTML = "";
    (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])(content);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xEZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ0o7QUFDRTs7QUFFaEM7O0FBRUEscURBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFRO0FBQ1osSUFBSTtBQUNKO0FBQ0EsSUFBSSxpREFBUTtBQUNaLElBQUk7QUFDSjtBQUNBLElBQUksa0RBQVM7QUFDYjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQWJvdXQoY29udGVudEhvb2spIHtcbiAgLy8gTkFWXG4gIGxldCBuYXZpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbGV0IHVsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsZXQgaG9tZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCBzZXJ2aWNlc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCBhYm91dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxldCBzZXJ2aWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICBob21lLmhyZWYgPSBcIiNcIjtcbiAgc2VydmljZXMuaHJlZiA9IFwiI1wiO1xuICBhYm91dC5ocmVmID0gXCIjXCI7XG5cbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICBzZXJ2aWNlcy50ZXh0Q29udGVudCA9IFwiU0VSVklDRVNcIjtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFCT1VUXCI7XG4gIGhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICBzZXJ2aWNlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlcnZpY2VzXCIpO1xuICBhYm91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuXG4gIGhvbWVMaXN0LmFwcGVuZENoaWxkKGhvbWUpO1xuICBzZXJ2aWNlc0xpc3QuYXBwZW5kQ2hpbGQoc2VydmljZXMpO1xuICBhYm91dExpc3QuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICB1bGlzdC5hcHBlbmRDaGlsZChob21lTGlzdCk7XG4gIHVsaXN0LmFwcGVuZENoaWxkKHNlcnZpY2VzTGlzdCk7XG4gIHVsaXN0LmFwcGVuZENoaWxkKGFib3V0TGlzdCk7XG4gIG5hdmkuYXBwZW5kQ2hpbGQodWxpc3QpO1xuICAvLyBOQVZcblxuICAvLyBNQUlOIENPTlRFTlRcbiAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IGltYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIG1haW5EaXYuY2xhc3NMaXN0LmFkZChcImFib3V0TWFpbkNvbnRlbnRcIik7XG4gIGhlYWRlcjEudGV4dENvbnRlbnQgPSBcIkFCT1VUXCI7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIndlIGxpa2UgYm9yZ2VyLiBzbyB1IHBheSB1cyB0byBlYXQgdXIgYnVyZ2VyXCI7XG4gIGltYWcuc3JjID0gXCIuL2RvZ2VlLnBuZ1wiO1xuXG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyMSk7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW1hZyk7XG5cbiAgLy8gTUFJTiBDT05URU5UXG5cbiAgY29udGVudEhvb2suYXBwZW5kQ2hpbGQobmF2aSk7XG4gIGNvbnRlbnRIb29rLmFwcGVuZENoaWxkKG1haW5EaXYpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoY29udGVudEhvb2spIHtcbiAgLy8gTkFWXG4gIGxldCBuYXZpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbGV0IHVsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsZXQgaG9tZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCBzZXJ2aWNlc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCBhYm91dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxldCBzZXJ2aWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICBob21lLmhyZWYgPSBcIiNcIjtcbiAgc2VydmljZXMuaHJlZiA9IFwiI1wiO1xuICBhYm91dC5ocmVmID0gXCIjXCI7XG5cbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICBzZXJ2aWNlcy50ZXh0Q29udGVudCA9IFwiU0VSVklDRVNcIjtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFCT1VUXCI7XG4gIGhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICBzZXJ2aWNlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlcnZpY2VzXCIpO1xuICBhYm91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuXG4gIGhvbWVMaXN0LmFwcGVuZENoaWxkKGhvbWUpO1xuICBzZXJ2aWNlc0xpc3QuYXBwZW5kQ2hpbGQoc2VydmljZXMpO1xuICBhYm91dExpc3QuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICB1bGlzdC5hcHBlbmRDaGlsZChob21lTGlzdCk7XG4gIHVsaXN0LmFwcGVuZENoaWxkKHNlcnZpY2VzTGlzdCk7XG4gIHVsaXN0LmFwcGVuZENoaWxkKGFib3V0TGlzdCk7XG4gIG5hdmkuYXBwZW5kQ2hpbGQodWxpc3QpO1xuICAvLyBOQVZcblxuICAvLyBNQUlOIENPTlRFTlRcbiAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbGV0IGhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZXJ2aWNlc1wiKTtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlcnZpY2VzXCIpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJpbmRleE1haW5Db250ZW50XCIpO1xuICBoZWFkZXIxLnRleHRDb250ZW50ID0gXCJLSUxMIEJPUkdFUlwiO1xuICBoZWFkZXIyLnRleHRDb250ZW50ID0gXCJ3ZSBraWxsIGJPcmdlclwiO1xuICBzcGFuLnRleHRDb250ZW50ID0gXCJLSUxMIEJPUkdFUiBOT1dcIjtcblxuICBidG4uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyMSk7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyMik7XG4gIG1haW5EaXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgLy8gTUFJTiBDT05URU5UXG5cbiAgY29udGVudEhvb2suYXBwZW5kQ2hpbGQobmF2aSk7XG4gIGNvbnRlbnRIb29rLmFwcGVuZENoaWxkKG1haW5EaXYpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoY29udGVudEhvb2spIHtcbiAgLy8gTkFWXG4gIGxldCBuYXZpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbGV0IHVsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsZXQgaG9tZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCBzZXJ2aWNlc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCBhYm91dExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxldCBzZXJ2aWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsZXQgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICBob21lLmhyZWYgPSBcIiNcIjtcbiAgc2VydmljZXMuaHJlZiA9IFwiI1wiO1xuICBhYm91dC5ocmVmID0gXCIjXCI7XG5cbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICBzZXJ2aWNlcy50ZXh0Q29udGVudCA9IFwiU0VSVklDRVNcIjtcbiAgYWJvdXQudGV4dENvbnRlbnQgPSBcIkFCT1VUXCI7XG4gIGhvbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lXCIpO1xuICBzZXJ2aWNlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlcnZpY2VzXCIpO1xuICBhYm91dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFib3V0XCIpO1xuXG4gIGhvbWVMaXN0LmFwcGVuZENoaWxkKGhvbWUpO1xuICBzZXJ2aWNlc0xpc3QuYXBwZW5kQ2hpbGQoc2VydmljZXMpO1xuICBhYm91dExpc3QuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICB1bGlzdC5hcHBlbmRDaGlsZChob21lTGlzdCk7XG4gIHVsaXN0LmFwcGVuZENoaWxkKHNlcnZpY2VzTGlzdCk7XG4gIHVsaXN0LmFwcGVuZENoaWxkKGFib3V0TGlzdCk7XG4gIG5hdmkuYXBwZW5kQ2hpbGQodWxpc3QpO1xuICAvLyBOQVZcblxuICAvLyBNQUlOIENPTlRFTlRcbiAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbGV0IGhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGxldCBpbWFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbGV0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gIG1haW5EaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVNYWluQ29udGVudFwiKTtcbiAgaGVhZGVyMS50ZXh0Q29udGVudCA9IFwiU0VSVklDRVNcIjtcbiAgaGVhZGVyMi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndoaXRlLXNwYWNlOiBwcmU7XCIpO1xuICBoZWFkZXIyLnRleHRDb250ZW50ID0gXCJEb24ndCB3YW50IHlvdXIgYnVyZ2VyPyBcXHJcXG4gbWluZSBub3cgaGVoZVwiO1xuICBpbWFnLnNyYyA9IFwiLi9lYXQtYnVyZ2VyLmdpZlwiO1xuICBwcmljZS50ZXh0Q29udGVudCA9IFwiJDlcIjtcblxuICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcjEpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlcjIpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGltYWcpO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKHByaWNlKTtcblxuICAvLyBNQUlOIENPTlRFTlRcblxuICBjb250ZW50SG9vay5hcHBlbmRDaGlsZChuYXZpKTtcbiAgY29udGVudEhvb2suYXBwZW5kQ2hpbGQobWFpbkRpdik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkQWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcblxubGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmxvYWRIb21lKGNvbnRlbnQpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICBpZiAoZS50YXJnZXQuaWQgPT09IFwiaG9tZVwiKSB7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxvYWRIb21lKGNvbnRlbnQpO1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcInNlcnZpY2VzXCIpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgbG9hZE1lbnUoY29udGVudCk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwiYWJvdXRcIikge1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBsb2FkQWJvdXQoY29udGVudCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9