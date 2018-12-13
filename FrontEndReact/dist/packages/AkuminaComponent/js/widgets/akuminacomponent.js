var MyClient = MyClient || {}; MyClient["Widgets"] = MyClient["Widgets"] || {}; MyClient["Widgets"]["AkuminaComponent"] =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Akumina = __webpack_require__(1);
var React = __webpack_require__(2);
var AkuminaComponent = /** @class */ (function (_super) {
    __extends(AkuminaComponent, _super);
    /**
     *
     */
    function AkuminaComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            test: "Loading...."
        };
        _this.Increment = _this.Increment.bind(_this);
        return _this;
    }
    AkuminaComponent.prototype.componentWillMount = function () {
        var cur = this;
        Akumina.Digispace.AppPart.Eventing.Subscribe('/loader/completed/', cur.AkRender(), this.props.id);
    };
    AkuminaComponent.prototype.AkRender = function () {
        this.setState({ test: "Loaded | " + this.props.id + " | " + this.props.displaytemplateurl });
    };
    AkuminaComponent.prototype.Increment = function () {
        this.setState({ test: "CLICKED!!!!!!!!!" });
    };
    AkuminaComponent.prototype.render = function () {
        return (React.createElement("div", null,
            "Test",
            React.createElement("p", null, this.state.test),
            React.createElement("input", { type: "button", onClick: this.Increment, value: "CLICK ME" })));
    };
    return AkuminaComponent;
}(React.Component));
exports.AkuminaComponent = AkuminaComponent;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = Akumina;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = React;

/***/ })
/******/ ])["AkuminaComponent"];