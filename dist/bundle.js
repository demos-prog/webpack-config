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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let form = document.querySelector(\"form\");\r\n\r\nasync function senData(value) {\r\n  let res = await fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json;charset=utf-8\",\r\n    },\r\n    body: JSON.stringify(value),\r\n  });\r\n  let result = await res.json();\r\n  return result;\r\n}\r\n\r\nform.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault();\r\n  let input = form.querySelector(\"input[type=number]\");\r\n  let value = input.value;\r\n  senData({ req: value }).then((res) => {\r\n    alert(\"answer is: \" + res.req);\r\n  });\r\n  input.value = \"\";\r\n});\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;