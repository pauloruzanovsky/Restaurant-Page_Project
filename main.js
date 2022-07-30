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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContact)\n/* harmony export */ });\n\nfunction createContact() {\n    const content = document.getElementById('content');\n\n    // Dishes page\n    const contact = document.createElement('div');\n    contact.className = 'contact';\n    contact.innerHTML = `\n    <div class=\"left-section\">\n      <h1 class=\"title\">RUZA'S RISTORANTE</h1>\n      <p>Rua Hedwig Reiss, 192</p>\n      <p>Joinville - SC</p>\n      <p>Phone +55 47999487723</p>\n      <h1 class=\"title opening-hours\">OPENING HOURS</h1>\n      <table>\n        <thead>\n            <tr>\n              <th></th>\n              <th>Lunch</th>\n              <th>Evenings</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <th>Wednesday - Thursday </th>\n                <td>Closed</td>\n                <td>18:00 - 23:00</td>\n            </tr>\n            <tr>\n              <th>Friday - Saturday</th>\n              <td>12:00 - 15:30</td>\n              <td>18:30 - 23:30</td>\n            </tr>\n        </tbody>\n    </table>\n    <p>(The elevator will be operational to the 8th floor 10 minutes prior to and during the restaurant opening hours)</p>\n    <p class=\"title\">PARKING</p>\n    <p>There are Euro-Park pay parking spaces close to the restaurant.</p>\n    \n  </div>\n  <div class=\"right-section\">\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7947791930633!2d-48.87730488442405!3d-26.30075208339499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb008aa9b11d7%3A0x22d87550d8b6168e!2sRua%20Hedwig%20Reiss%2C%20192%20-%20Gl%C3%B3ria%2C%20Joinville%20-%20SC%2C%2089216-455!5e0!3m2!1spt-BR!2sbr!4v1659119868619!5m2!1spt-BR!2sbr\" width=\"100%\" height=\"100%\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n\n</div>`\n    content.append(contact);\n}\n\n//# sourceURL=webpack://restaurant-page_project/./src/contact.js?");

/***/ }),

/***/ "./src/dishes.js":
/*!***********************!*\
  !*** ./src/dishes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createDishes)\n/* harmony export */ });\n\nfunction createDishes() {\n    const content = document.getElementById('content');\n\n    // Dishes page\n    const dishes = document.createElement('div');\n    dishes.className = 'dishes';\n    dishes.innerHTML = `      <div class='left-section'>\n                                <h1 class='menu'>MENU</h1>\n                                <div class=\"menu-dish\"> \n                                    <div class=\"dish-name\">The Summer Universe (minimum 3 hours)</div>\n                                    <div class=\"dish-price\">3200 BRL</div>\n                                </div>\n                                <h1 class=\"wine-pairings\">WINE PAIRINGS</h1>\n                                <div class=\"wine\">\n                                <div class=\"wine-name\">Heart & Soil</div>\n                                <div class=\"wine-price\">2000 BRL</div>\n                                </div>\n                                <div class=\"wine\">\n                                <div class=\"wine-name\">Classic & Appellation</div>\n                                <div class=\"wine-price\">4000 BRL</div>\n                                </div>\n                                <div class=\"wine\">\n                                <div class=\"wine-name\">Big & Bold</div>\n                                <div class=\"wine-price\">6000 BRL</div>\n                                </div>\n                                <div class=\"wine\">\n                                <div class=\"wine-name\">Rare & Unique</div>\n                                <div class=\"wine-price\">18000 BRL</div>\n                                </div>\n                                <div class=\"wine\">\n                                <div class=\"wine-name\">Non Alcoholic Pairing</div>\n                                <div class=\"wine-price\">1300 BRL</div>\n                                </div>\n                            </div>\n                            <img src=\"../img/geranium dish.jpg\" alt=\"\" class=\"right-section\">`\n    content.append(dishes);\n}\n\n//# sourceURL=webpack://restaurant-page_project/./src/dishes.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header() {\n\n// Header\nconst header = document.createElement('header');\nheader.innerHTML = `<h1 class=\"header-title\"> RUZA'S RISTORANTE</h1>\n                        <ul class='dishes-buttons'>\n                           <button class='home'>Home</button>\n                           <button class='dishes'>Dishes</button>\n                           <button class='contact'>Contact</button>\n                        </ul> `;\nheader.classList.add('header');\ncontent.insertBefore(header,content.firstElementChild);\n}\n\n//# sourceURL=webpack://restaurant-page_project/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage() {\n    const content = document.getElementById('content');\n\n    // Homepage\n    const home = document.createElement('div');\n    home.className = 'home';\n    content.append(home);\n\n    // Section 1\n    const section1 = document.createElement('div');\n    section1.className = 'section-1';\n    home.append(section1);\n\n    // Img 1\n    const img1 = document.createElement('img');\n    img1.className = 'team-photo';\n    img1.src = \"../img/team-photo.jpg\";\n    img1.alt = \"Team photo\";\n    section1.append(img1);\n\n    // Text 1\n    const text1 = document.createElement('div');\n    text1.className = 'text-1';\n    text1.innerHTML =  `<h1 class='title'>Welcome to Ruza's Ristorante</h1>\n\n                        <p>Thoughtfulness can be tasted</p>\n\n                        <p>Ruza's kitchen is lucid, light and dynamic. Our mission is to create \n                        meals that involve all our senses - restores, challenges and enriches.</p>\n                        \"Dynamic means force and stands for the living formative forces of nature. \n                        These forces are not visible, but their biologic \"footprints\" are. The effects \n                        can be seen if one learns to observe and understand the connections \n                        between the formative forces and the physical matter of all organisms\".`\n    section1.append(text1);\n\n    // Section 2\n    const section2 = document.createElement('div');\n    section2.className = 'section-2';\n    home.append(section2);\n\n    // Text 2\n    const text2 = document.createElement('div');\n    text2.className = 'text-2';\n    text2.innerHTML =  `<h1 class=\"title\">Dinner in the canopy</h1>\n\n    <p>The restaurant is situated on the 8th floor in Fælledparken (Common Gardens) in the center \n    of Copenhagen, from where one can follow the seasons' journey through the tree crowns,\n    catch glimpses of the city's green copper roofs and just see the windmills of Oeresund.</p>\n\n    <p>The location emphasizes Geranium's vision of gastronomic clarity and diversity. We explore \n    the area of tension between the urbane and the natural.</p>`\n    section2.append(text2);\n\n    // Img 2\n    const img2 = document.createElement('img');\n    img2.src = \"../img/geranium001.jpg\";\n    img2.alt = \"Geranium\";\n    section2.append(img2);\n\n}\n\n//# sourceURL=webpack://restaurant-page_project/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _dishes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dishes.js */ \"./src/dishes.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// createDishes();\n//  createContact();\n\nlet content = document.getElementById('content');\nlet homeButton = document.querySelector('button.home');\nlet dishesButton = document.querySelector('button.dishes');\nlet contactButton = document.querySelector('button.contact');\n\nfunction removeContentChildren() {\n    while (content.children.length>1) {\n        content.removeChild(content.lastChild);\n    }\n}\n\n\nhomeButton.addEventListener('click', () => {\n    removeContentChildren();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n})\n\ndishesButton.addEventListener('click', () => {\n    removeContentChildren();\n    (0,_dishes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\ncontactButton.addEventListener('click', () => {\n    removeContentChildren();\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n})\n\n\n\n//# sourceURL=webpack://restaurant-page_project/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;