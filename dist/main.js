/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"game\", function() { return game; });\nconst game = () => {\n\nconst animation = function() {\n    let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;\n    window.requestAnimationFrame = requestAnimationFrame;\n}\nanimation();\n\nlet canvas = document.getElementById(\"canvas\"),\nctx = canvas.getContext(\"2d\"),\nwidth = 500,\nheight = 200,\nplayer = {\n    x : width / 2,\n    y : height - 15,\n    width : 5,\n    height : 5,\n    speed: 3,\n    velX: 0,\n    velY: 0,\n    jumping : false,\n    grounded: false\n};\n\nlet keys = [];\nconst friction = 0.8;\nconst gravity = 0.3;\n\nlet boxes = [];\n\nboxes.push({\n    x: 0,\n    y: 0,\n    width: 10,\n    height: height\n});\n\nboxes.push({\n    x: 0,\n    y: height - 2,\n    width: width,\n    height: 50\n});\n\nboxes.push({\n    x: width - 10,\n    y: 0,\n    width: 50,\n    height: height\n});\n\nboxes.push({\n    x: 170,\n    y: 50,\n    width: 80,\n    height: 80\n});\n\nboxes.push({\n    x: 220,\n    y: 100,\n    width: 80,\n    height: 80\n});\n\nboxes.push({\n    x: 270,\n    y: 150,\n    width: 40,\n    height: 40\n});\n\ncanvas.width = width;\ncanvas.height = height;\n\n// draw a small blue box, AKA player character.\nfunction update(){\n    // check keys\n    if (keys[39]) {\n        // right arrow\n        if (player.velX < player.speed) {                         \n            player.velX++;                  \n        }          \n    }          \n    if (keys[37]) {                 \n            // left arrow                  \n        if (player.velX > -player.speed) {\n            player.velX--;\n        }\n    }\n    if (keys[38] || keys[32]) {\n        // up arrow or space\n        if(!player.jumping && player.grounded){\n            player.jumping = true;\n            player.grounded = false;\n            player.velY = -player.speed*2;\n        }\n    }\n\n    player.velX *= friction;\n    player.velY += gravity;\n\n    // draw our player\n    ctx.clearRect(0, 0, width, height);\n    ctx.fillStyle = 'black';\n    ctx.beginPath();\n\n    player.grounded = false;\n    for(let i = 0; i < boxes.length; i++) {\n        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);\n\n        let dir = colCheck(player, boxes[i]);\n\n        if(dir === 'l' && dir === 'r') {\n            player.velX = 0;\n            player.jumping = false;\n        } else if (dir === 'b') {\n            player.grounded = true;\n            player.jumping = false;\n        } else if (dir === 't') {\n            player.velY *= -1;\n        }\n    }\n\n    if(player.grounded){\n        player.velY = 0;\n    }\n\n    player.x += player.velX;\n    player.y += player.velY;\n\n    ctx.fill();\n    ctx.fillStyle = \"blue\";\n    ctx.fillRect(player.x, player.y, player.width, player.height);\n\n    // run through the loop again\n    requestAnimationFrame(update);\n}\n\nfunction colCheck(shapeA, shapeB){\n    // get vectors to check against\n    let vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2));\n    let vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2));\n    // add the half widths and half heights of the objects\n    let hWidths = (shapeA.width / 2) + (shapeB.width / 2);\n    let hHeights = (shapeA.height / 2) + (shapeB.height / 2);\n    let colDir = null;\n\n    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {\n        let oX = hWidths- Math.abs(vX);\n        let oY = hHeights- Math.abs(vY);\n        if(oX >= oY){\n            if(vY > 0){\n                colDir = 't';\n                shapeA.y += oY;\n            } else {\n                colDir = 'b';\n                shapeA.y -= oY;\n            }\n        } else {\n            if(vX > 0) {\n                colDir = 'l';\n                shapeA.x += oX;\n            } else {\n                colDir = 'r';\n                shapeA.x -= oX;\n            }\n        }\n    }\n    return colDir;\n}\n\ndocument.body.addEventListener(\"keydown\", function(e) {\n    keys[e.keyCode] = true;\n});\n\ndocument.body.addEventListener(\"keyup\", function(e) {\n    keys[e.keyCode] = false;\n});\n\nwindow.addEventListener(\"load\", function(){\n    update();\n});\n\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    Object(_game__WEBPACK_IMPORTED_MODULE_0__[\"game\"])();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });