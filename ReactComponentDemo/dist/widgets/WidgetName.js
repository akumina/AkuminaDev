var Akumina = Akumina || {}; Akumina["AddIn"] = Akumina["AddIn"] || {}; Akumina["AddIn"]["WidgetName"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = Akumina;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
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
var Akumina = __webpack_require__(0);
var React = __webpack_require__(1);
var FooterComponent_1 = __webpack_require__(3);
var WidgetName = /** @class */ (function (_super) {
    __extends(WidgetName, _super);
    /**
     *
     */
    function WidgetName(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            pageLifecycleComplete: false,
            testIncrement: 0
        };
        _this.Increment = _this.Increment.bind(_this);
        _this.ImageData = new ImageModel();
        _this.WidgetProps = _this.SetDefaultsProperties(props);
        return _this;
    }
    WidgetName.prototype.componentWillMount = function () {
    };
    WidgetName.prototype.componentDidMount = function () {
        var _this = this;
        var request = {}; // Request object model included as part of Akumina type definitions
        request.listName = 'ImageGallery_AK'; // List Name we're querying
        request.selectFields = 'Title,Image'; // Fields we're interested in retrieving
        request.isRoot = true; // Denotes the list exists on the root site and not the subsite
        request.contextSiteUrl = Akumina.Digispace.SiteContext.RootSiteUrl; // URL of the root site of the site collection
        var spcaller = new Akumina.Digispace.Data.DataFactory(true); // true denotes legacy mode
        spcaller.GetList(request).then(function (res) {
            var response = res.response;
            try {
                _this.ImageSuccessHandler(response);
                _this.setState({ pageLifecycleComplete: true }); // Set the state to indicate we're done processing and trigger a re-render
            }
            catch (error) {
                console.log('ERROR HAS OCCURRED: ' + error);
            }
        }, function (error) {
            console.log('EROR OCCURRED DURING SHAREPOINT QUERY: ' + error);
        });
    };
    WidgetName.prototype.componentDidUpdate = function () {
    };
    WidgetName.prototype.componentWillUnmount = function () {
    };
    WidgetName.prototype.AkRender = function () {
        this.setState({ pageLifecycleComplete: true });
    };
    WidgetName.prototype.Increment = function () {
        this.setState({ testIncrement: this.state.testIncrement + 1 });
    };
    WidgetName.prototype.render = function () {
        console.log(this.state.pageLifecycleComplete);
        if (this.state.pageLifecycleComplete) {
            return (React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement("label", { htmlFor: "image-data" }, "Test Image:"),
                    this.ImageData.Url !== '' ? React.createElement("img", { id: "image-data", src: this.ImageData.Url }) : React.createElement("p", { id: "image-data" }, "There is no image. :(")),
                React.createElement("p", null,
                    "mycustomprop: ",
                    this.props.mycustomprop),
                React.createElement("p", null,
                    "testIncrement: ",
                    this.state.testIncrement),
                React.createElement("input", { type: "button", onClick: this.Increment, value: "Increment Test" }),
                React.createElement("div", null, React.createElement(FooterComponent_1.FooterComponent, this.WidgetProps))));
        }
        else {
            return (React.createElement("div", null, "Loading..."));
        }
    };
    WidgetName.prototype.Init = function (props) {
        this.WidgetProps = this.SetDefaultsProperties(props);
    };
    WidgetName.prototype.SetDefaultsProperties = function (requestIn) {
        var requestOut = new WidgetProperties();
        requestOut.widgetframework = this.GetPropertyValue(requestIn, 'widgetframework', '');
        requestOut.mycustomprop = this.GetPropertyValue(requestIn, 'mycustomprop', '');
        requestOut.FooterListName = this.GetPropertyValue(requestIn, 'footerlistname', '');
        return requestOut;
    };
    WidgetName.prototype.GetPropertyValue = function (requestIn, key, defaultValue) {
        //Obtain property value
        var returnValue = requestIn[key];
        //Determine if empty or null
        if (returnValue === null || typeof returnValue === 'undefined' || returnValue === '') {
            //If empty or null, use default value
            returnValue = defaultValue;
        }
        return returnValue;
    };
    WidgetName.prototype.ImageSuccessHandler = function (response) {
        var listEnum = response.listItems.getEnumerator();
        while (listEnum.moveNext()) {
            var model = new ImageModel();
            var listItem = listEnum.get_current();
            // We are not interested in data without images
            if (listItem.get_item('Image') == null)
                continue;
            model.Title = listItem.get_item('Title');
            model.Url = listItem.get_item('Image').get_url();
            this.ImageData = model;
            break;
        }
    };
    return WidgetName;
}(React.Component));
exports.WidgetName = WidgetName;
var ImageModel = /** @class */ (function () {
    function ImageModel() {
        this.Title = '';
        this.Url = '';
    }
    return ImageModel;
}());
exports.ImageModel = ImageModel;
var WidgetProperties = /** @class */ (function () {
    function WidgetProperties() {
        this.widgetframework = '';
        this.mycustomprop = '';
        this.FooterListName = '';
    }
    return WidgetProperties;
}());
exports.WidgetProperties = WidgetProperties;


/***/ }),
/* 3 */
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
var Akumina = __webpack_require__(0);
var React = __webpack_require__(1);
var FooterComponent = /** @class */ (function (_super) {
    __extends(FooterComponent, _super);
    function FooterComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            pageLifecycleComplete: false
        };
        _this.FooterData = '';
        return _this;
    }
    FooterComponent.prototype.componentWillMount = function () {
    };
    FooterComponent.prototype.componentDidMount = function () {
        var _this = this;
        var request = {}; // Request object model included as part of Akumina type definitions
        request.listName = this.props.FooterListName; // List Name we're querying
        request.selectFields = 'Title'; // Fields we're interested in retrieving
        request.isRoot = true; // Denotes the list exists on the root site and not the subsite
        request.contextSiteUrl = Akumina.Digispace.SiteContext.RootSiteUrl; // URL of the root site of the site collection
        var spcaller = new Akumina.Digispace.Data.DataFactory(true); // true denotes legacy mode
        spcaller.GetList(request).then(function (res) {
            var response = res.response;
            try {
                _this.FooterSuccessHandler(response);
                _this.setState({ pageLifecycleComplete: true }); // Set the state to indicate we're done processing and trigger a re-render
            }
            catch (error) {
                console.log('ERROR HAS OCCURRED: ' + error);
            }
        }, function (error) {
            console.log('EROR OCCURRED DURING SHAREPOINT QUERY: ' + error);
        });
    };
    FooterComponent.prototype.componentDidUpdate = function () {
    };
    FooterComponent.prototype.componentWillUnmount = function () {
    };
    FooterComponent.prototype.render = function () {
        if (this.state.pageLifecycleComplete) {
            return (React.createElement("div", null,
                "Footer Component: ",
                this.FooterData));
        }
        else {
            return (React.createElement("div", null, "Loading..."));
        }
    };
    FooterComponent.prototype.FooterSuccessHandler = function (response) {
        var listEnum = response.listItems.getEnumerator();
        while (listEnum.moveNext()) {
            //There should only be one line in the list
            var listItem = listEnum.get_current();
            this.FooterData = listItem.get_item('Title');
        }
    };
    return FooterComponent;
}(React.Component));
exports.FooterComponent = FooterComponent;


/***/ })
/******/ ])["WidgetName"];