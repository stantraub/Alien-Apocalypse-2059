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

/***/ "./src/alien_chaser.js":
/*!*****************************!*\
  !*** ./src/alien_chaser.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\nconst DEFAULTS = {\n  COLOR: \"green\",\n  HEIGHT: 40,\n  WIDTH: 15,\n  XVEL: 3,\n  YVEL: 3\n};\nclass AlienChaser extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options = {}){\n    options.color = DEFAULTS.COLOR;\n    options.height = DEFAULTS.HEIGHT;\n    options.width = DEFAULTS.WIDTH;\n    options.x = options.x || options.game.randomX();\n    options.y = options.y || options.game.randomY();\n    options.canJump = options.canJump || true;\n    options.xVel = DEFAULTS.XVEL;\n    options.yVel = DEFAULTS.YVEL;\n    options.game = options.game;\n    super(options)\n    this.speed = [0.1, 0.15, 0.2, 0.5][Math.floor(Math.random() * 4)];\n    \n  }\n  collideWith(otherObject) {\n    if (otherObject instanceof _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"] && otherObject.y ) {\n      otherObject.remove();\n      return true;\n    } \n    // else if (otherObject instanceof Bullet) {\n    //   this.remove();\n    //   otherObject.remove();\n    //   return true;\n    // }\n\n    return false;\n  }\n\n  move(){\n    if (this.game.players[0].x < this.x) {\n      this.xVel -= 0.2;\n    } else if (this.game.players[0].x > this.x) {\n      this.xVel += 0.2;\n    }\n\n    this.yVel += 1.5; //increase after testing\n    this.x += this.xVel;\n    this.y += this.yVel;\n    this.xVel *= .9; //readjust to .9 after testing\n    this.yVel *= .9;\n\n    if (this.y > 600 - 100 - this.height) {\n      this.canJump = false;\n      this.y = 600 - 100 - this.height;\n      this.yVel = 0;\n    }\n\n    if (this.x < 5 + this.width) {\n      this.xVel = 0;\n      //change for tesing since map wont always be the same shape\n    } else if (this.x > 995 - this.width) {\n      this.xVel = 0;\n    }\n\n  }\n\n\n \n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlienChaser);\n\n//# sourceURL=webpack:///./src/alien_chaser.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alien_chaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alien_chaser */ \"./src/alien_chaser.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\nclass Game {\n  constructor(){\n    this.alienChasers = [];\n    this.bullets = [];\n    this.players = [];\n    this.addAlienChasers()\n  \n  }\n  add(object) {\n    if (object instanceof _alien_chaser__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.alienChasers.push(object);\n    } else if (object instanceof _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.players.push(object);\n    } \n    else {\n      throw new Error(\"unknown type of object\");\n    }\n  }\n\n  addAlienChasers() {\n    for (let i = 0; i < Game.NUM_ALIENCHASERS; i++) {\n      this.add(new _alien_chaser__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ game: this }));\n     \n    }\n  }\n  addPlayer() {\n    const player = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      game: this\n    });\n    this.add(player);\n    return player;\n  }\n  allObjects() {\n    return [].concat(this.players, this.alienChasers, this.bullets);\n  }\n\n  draw(ctx) {\n    //background\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    //floor\n\n\n\n\n    this.allObjects().forEach((object) => {\n      object.draw(ctx);\n    });\n  }\n\n  randomX() {\n    return Game.DIM_X * Math.random();\n  }\n\n  randomY() {\n    return Game.DIM_Y * Math.random();\n  }\n  checkCollisions() {\n    const allObjects = this.allObjects();\n    for (let i = 0; i < allObjects.length; i++) {\n      for (let j = 0; j < allObjects.length; j++) {\n        const obj1 = allObjects[i];\n        const obj2 = allObjects[j];\n          if (obj1.isCollidedWith(obj2)) {\n            const res=obj1.collideWith(obj2)\n            \n          }\n        } \n      }\n    }\n  \n  moveObjects() {\n    //maybe add delta arg\n    this.allObjects().forEach((object) => {\n      object.move();\n    });\n  }\n  remove(object) {\n    // if (object instanceof Bullet) {\n    //   this.bullets.splice(this.bullets.indexOf(object), 1);\n    // } \n    // else \n    if (object instanceof _alien_chaser__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.alienChasers.splice(this.alienChasers.indexOf(object), 1);\n    } else if (object instanceof _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.players.splice(this.players.indexOf(object), 1);\n      this.addPlayer();\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  }\n  step(delta) {\n    this.moveObjects(delta);\n    this.checkCollisions();\n  }\n\n\n}\nGame.BG_COLOR = \"yellow\";\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.FPS = 32;\nGame.NUM_ALIENCHASERS = 0;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass GameView {\n  constructor(game, ctx){\n    this.ctx = ctx;\n    this.game = game;\n    this.player = this.game.addPlayer()\n  }\n\n  start() {\n    this.bindKeyHandlers();\n    this.lastTime = 0;\n    \n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  bindKeyHandlers() {\n    const player = this.player;\n    console.log(this.player)\n    // Object.keys(GameView.MOVES).forEach((k) => {\n    //   const move = GameView.MOVES[k];\n    //   key(k, () => { player.playerAction(move); });\n    // });\n    key(\"a\", () => {player.moveLeft(); });\n    key(\"d\", () => { player.moveRight(); });\n    key(\"w\", () => { player.moveJump(); });\n    // key(\"space\", () => { player.fireBullet(); });\n  }\n\n  animate(time) {\n    const timeDelta = time - this.lastTime;\n\n    this.game.step(timeDelta);\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _alien_chaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alien_chaser */ \"./src/alien_chaser.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"working\")\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  canvasEl.width = _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DIM_X;\n  canvasEl.height = _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"].DIM_Y;\n  \n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  window.game = game;\n  new _game_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](game, ctx).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//controls\n\nclass MovingObject {\n constructor(options) {\n    this.height = options.height;\n    this.width = options.width;\n    this.canJump = options.canJump;\n    this.x = options.x;\n    this.y = options.y;\n    this.color = options.color;\n    this.xVel = options.xVel;\n    this.yVel = options.yVel;\n    this.game = options.game\n\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fill();\n  };\n  \n  //to repalce util.dist\n  distanceX(otherObject) {\n    if (otherObject.x < this.x){\n      return this.x -otherObject.x;\n    }else{\n      return otherObject.x - this.x;\n    }\n  }\n\n  distanceY(otherObject) {\n    if (otherObject.y < this.y){\n      return this.y -otherObject.y;\n    }else{\n      return otherObject.y - this.y;\n    }\n  }\n\n  isCollidedWith(otherObject) {\n    const centerDistX = this.distanceX(otherObject);\n    const centerDistY = this.distanceY(otherObject);\n   return(centerDistX< ((this.width / 2) + (otherObject.width / 2)) && centerDistY< ((this.height / 2) + (otherObject.height / 2)) );\n  }\n\n  remove() {\n    this.game.remove(this);\n  };\n\n  move() {\n    //GENERAL MOVEMENT CONSTRAINTS\n    //gravity and friction \n    this.yVel += 2; //increase after testing\n    this.x += this.xVel;\n    this.y += this.yVel;\n    this.xVel *= .97; //readjust to .9 after testing\n    this.yVel *= .97;\n    //floor\n    if (this.y > 600 - 100 - this.height) {\n      this.canJump = false;\n      this.y = 600 - 100 - this.height;\n      this.yVel = 0;\n    }\n    //wrapping logic\n    // if (this.x < -this.width) {\n    //   this.x = 1000;\n    // } else if (this.x > 1000) {\n    //   this.x = -this.width\n    // } \n    //hard border logic\n    if (this.x < 5 + this.width){\n      this.xVel = 0;\n      //change for tesing since map wont always be the same shape\n    } else if (this.x > 995 - this.width){\n      this.xVel = 0;\n    }\n  \n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _alien_chaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alien_chaser */ \"./src/alien_chaser.js\");\n\n\n//sets controls\n//controls\n// const controls = {\n//   left: false, right: false, up: false, keyListener: function (action) {\n//     const keyStatus = (action.type == \"keydown\") ? true : false;\n//     //sets the current keydown action\n//     switch (action.keyCode) {\n//       case 65:// A Left\n//         controls.left = keyStatus\n//         break;\n//       case 87://W Up\n//         controls.up = keyStatus\n//         break;\n//       case 68://D Right\n//         controls.right = keyStatus\n//       // case 32: //SPACE SHOOT\n//       //   controls.shoot = keyStatus\n//     }\n//   }\n// };\nclass Player extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options = {}) {\n    options.color = \"black\";\n    options.height = 40;\n    options.width = 20;\n    options.x = options.x || options.game.randomX();\n    options.y = options.y || options.game.randomY();\n    options.canJump = options.canJump || true;\n    options.xVel = 0;\n    options.yVel = 0;\n    super(options)\n  }\n\n\n  collideWith(otherObject) {\n  //  if(otherObject instanceof AlienChaser){\n  //    return true\n  //  }\n  }\n  move() {\n\n    this.yVel += 1.5; //increase after testing\n    this.x += this.xVel;\n    this.y += this.yVel;\n    this.xVel *= .99; //readjust to .9 after testing\n    this.yVel *= .99;\n\n    if (this.y > 600 - 100 - this.height) {\n      this.canJump = false;\n      this.y = 600 - 100 - this.height;\n      this.yVel = 0;\n    }\n\n    if (this.x < 5 + this.width) {\n      this.xVel = 0;\n      //change for tesing since map wont always be the same shape\n    } else if (this.x > 995 - this.width) {\n      this.xVel = 0;\n    }\n\n  };\n\n  moveLeft(){\n    console.log(\"left\")\n\n    // if (this.xVel > 0){\n    //   this.xVel = .9\n    // }\n    this.xVel -= 1;\n  }\n  moveRight() {\n    console.log(\"right\")\n    // if (this.xVel < 0) {\n    //   this.xVel = -.1\n    // }\n    this.xVel += 1;\n  }\n  moveJump() { //add jumping logic like canJump, and the height restrictions \n    console.log(this.y)\n    this.yVel -= 30;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n\n\n  // moveLeft(){\n  //   // if (this.xVel > 0){\n  //   //   this.xVel = .9\n  //   // }\n  //   while (this.xVel > -4) {\n  //     this.xVel -= 1;\n  //   }\n\n  // }\n  // moveRight() {\n  //   // if (this.xVel < 0) {\n  //   //   this.xVel = -.1\n  //   // }\n  //   while (this.xVel < 4) {\n  //     this.xVel += 1;\n  //   }\n  // }\n  // moveJump() { //add jumping logic like canJump, and the height restrictions \n  //   if (this.y > 600 - 100 - this.height) {\n  //     // this.canJump = false;\n  //     // this.y = 600 - 100 - this.height;\n  //     // this.yVel = 1.5\n  //     this.y = this.y\n  //   } else {\n  //     this.yVel -= 20;\n  //   }\n\n  // }\n  // move() {\n\n  //   this.yVel += 1.5; //increase after testing\n  //   this.x += this.xVel;\n  //   this.y += this.yVel;\n  //   this.xVel *= .99; //readjust to .9 after testing\n  //   this.yVel *= .99;\n\n  //   if (this.y > 600 - 100 - this.height) {\n  //     this.canJump = false;\n  //     this.y = 600 - 100 - this.height;\n  //     this.yVel = 0;\n  //   }\n\n  //   if (this.x < 5 + this.width) {\n  //     this.xVel = 0;\n  //     //change for tesing since map wont always be the same shape\n  //   } else if (this.x > 995 - this.width) {\n  //     this.xVel = 0;\n  //   }\n\n  // };\n  // playerAction(num){\n  //   switch (num) {\n  //     case -1:\n  //       this.xVel -= 2;\n  //       break;\n  //     case 1:\n  //       this.xVel += 2;\n  //       break;\n  //     case 2:\n  //       this.yVel -= 4;\n  //       break;\n\n  //   }\n  // }\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });