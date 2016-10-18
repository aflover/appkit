(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["veak"] = factory();
	else
		root["veak"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["b"] = propValue;
/* harmony export (immutable) */ exports["c"] = uniqueKey;
/* harmony export (immutable) */ exports["a"] = noop;
function propValue(type) {
	return function () {
		return new type();
	};
}

var uidx = 1;
function uniqueKey(key) {
	return key ? key + uidx : uidx;
}

function noop() {}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(19)

/* template */
var __vue_template__ = __webpack_require__(42)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(48)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(29)

/* template */
var __vue_template__ = __webpack_require__(41)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(30)

/* template */
var __vue_template__ = __webpack_require__(40)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(38)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(37)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(50)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(46)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(47)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(26)

/* template */
var __vue_template__ = __webpack_require__(43)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(27)

/* template */
var __vue_template__ = __webpack_require__(54)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(51)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(31)

/* template */
var __vue_template__ = __webpack_require__(49)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(32)

/* template */
var __vue_template__ = __webpack_require__(45)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(33)

/* template */
var __vue_template__ = __webpack_require__(53)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(34)

/* template */
var __vue_template__ = __webpack_require__(52)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(35)

/* template */
var __vue_template__ = __webpack_require__(44)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(39)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		tick: {
			type: Boolean,
			default: true
		},
		onClick: {
			type: Function,
			default: __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* noop */]
		},
		theme: {
			type: String,
			default: ''
		}
	}
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
	props: {
		value: {
			type: Boolean,
			default: false
		},
		theme: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		}
	}
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Btn_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Btn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Btn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dropdown_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Dropdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuIter_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuIter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MenuIter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Icon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
	props: {
		open: { // 默认是否展开
			type: Boolean,
			default: false
		},
		mouse: { // 鼠标hover
			type: Boolean,
			default: true
		},
		options: { // 数据选项
			type: Array,
			default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util_js__["b" /* propValue */])(Array)
		},
		fields: { // 字段选项
			type: Object,
			default: function _default() {
				return {
					text: 'text',
					disabled: 'disabled',
					checked: 'checked',
					value: 'value'
				};
			}
		},
		text: {
			type: String,
			default: '菜单名称'
		},
		icon: {
			type: String,
			default: 'icon-arrow'
		},
		autoClose: {
			type: Boolean,
			default: true
		},
		theme: {
			type: String,
			default: ''
		}
	},
	data: function data() {
		return {
			isOpen: this.open
		};
	},
	methods: {
		select: function select(item) {
			if (this.autoClose) {
				this.isOpen = false;
			}
			this.$emit('input', item[this.fields.value]);
			this.$emit('select', item);
		}
	},
	components: {
		Btn: __WEBPACK_IMPORTED_MODULE_0__Btn_vue___default.a,
		Dropdown: __WEBPACK_IMPORTED_MODULE_1__Dropdown_vue___default.a,
		Icon: __WEBPACK_IMPORTED_MODULE_3__Icon_vue___default.a,
		MenuIter: __WEBPACK_IMPORTED_MODULE_2__MenuIter_vue___default.a
	}
};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Btn_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Btn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Btn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dropdown_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Dropdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icon_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Icon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ exports["default"] = {
	props: {
		open: { // 默认是否展开
			type: Boolean,
			default: false
		},
		mouse: { // 鼠标hover
			type: Boolean,
			default: false
		},
		options: { // 数据选项
			type: Array,
			default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util_js__["b" /* propValue */])(Array)
		},
		value: {},
		text: { // 默认文本
			default: '请选择'
		},
		arrow: { // 显示箭头或三角
			type: Boolean,
			default: false
		},
		fields: { // 字段选项
			type: Object,
			default: function _default() {
				return {
					text: 'text',
					disabled: 'disabled',
					// checked: 'checked',
					value: 'value'
				};
			}
		},
		active: { // 是否显示active样式
			type: Boolean,
			default: false
		},
		check: { // 是否显示check样式
			type: Boolean,
			default: true
		},
		theme: {
			type: String,
			default: ''
		}
	},
	data: function data() {
		return {
			isOpen: this.open
		};
	},
	computed: {
		displayText: function displayText() {
			var item = this.itemByValue(this.value);
			if (item) {
				return item[this.fields.text];
			}
			return this.text;
		}
	},
	methods: {
		select: function select(item) {
			this.$emit('input', item[this.fields.value], item);
			this.isOpen = false;
		},
		itemByValue: function itemByValue(value) {
			var self = this;
			return this.options.find(function (it) {
				return it[self.fields.value] === value;
			});
		}
	},
	components: {
		Btn: __WEBPACK_IMPORTED_MODULE_0__Btn_vue___default.a,
		Dropdown: __WEBPACK_IMPORTED_MODULE_1__Dropdown_vue___default.a,
		Icon: __WEBPACK_IMPORTED_MODULE_2__Icon_vue___default.a
	}
};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
	props: {
		open: {
			type: Boolean,
			default: false
		},
		dropRight: {
			type: Boolean,
			default: false
		}
	}
};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
	props: {
		row: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		showHeader: function showHeader() {
			return this.$slots.header;
		},
		showFooter: function showFooter() {
			return this.$slots.footer;
		}
	}
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//


function getHtmlClass() {
	return document.querySelector('html').classList;
}

/* harmony default export */ exports["default"] = {
	computed: {
		showHeader: function showHeader() {
			return this.$slots.header;
		},
		showFooter: function showFooter() {
			return this.$slots.footer;
		}
	},
	mounted: function mounted() {
		getHtmlClass().add('flex-window');
	},
	destroyed: function destroyed() {
		getHtmlClass().remove('flex-window');
	}
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
	props: {
		text: {
			type: String,
			default: ''
		},
		align: {
			type: Number,
			default: 2
		}
	}
};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ exports["default"] = {
	props: {
		col: {
			type: Number,
			default: 12
		},
		offset: {
			type: Number,
			default: 0
		}
	}
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//

/* harmony default export */ exports["default"] = {
	props: {
		flex: {
			type: String,
			default: ''
		}
	}
};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ exports["default"] = {
	props: {
		icon: {
			type: String,
			default: ''
		},
		meta: {
			type: String,
			default: ''
		},
		theme: {
			type: String,
			default: ''
		}
	}
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
	name: 'menu-iter',
	props: {
		item: {
			type: Object
		},
		fields: {
			type: Object
		},
		handle: {
			type: Function,
			default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* propValue */])(Function)
		}
	},
	computed: {
		isSub: function isSub() {
			return this.item.items && this.item.items.length;
		}
	}
};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
	props: {
		title: {
			type: String,
			default: ''
		},
		routers: {
			type: Array,
			default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* propValue */])(Array)
		}
	}
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
	props: {
		type: {
			type: String,
			default: 'text'
		},
		value: {
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		theme: {
			type: String,
			default: ''
		}
	}
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
	props: {
		options: {
			type: Array,
			default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* propValue */])(Array)
		},
		value: {
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		theme: {
			type: String,
			default: ''
		}
	}
};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
	props: {
		options: {
			type: Array,
			default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* propValue */])(Array)
		},
		value: {
			default: ''
		},
		theme: {
			type: String,
			default: ''
		}
	},
	data: function data() {
		return {
			group: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* uniqueKey */])('radio-key-')
		};
	}
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
	props: {
		tabs: {
			type: Array,
			default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* propValue */])(Array)
		},
		value: {
			type: String,
			default: ''
		},
		classes: {
			type: Array,
			default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* propValue */])(Array)
		}
	}
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
	props: {
		columns: {
			type: Array,
			default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* propValue */])(Array)
		},
		noHeader: {
			type: Boolean,
			default: false
		},
		datas: {
			type: Array,
			default: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* propValue */])(Array)
		}
	}
};

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('dropdown', {
    attrs: {
      "open": isOpen
    },
    nativeOn: {
      "mouseleave": function($event) {
        mouse && (isOpen = false)
      }
    }
  }, [_h('span', {
    slot: "control",
    on: {
      "click": function($event) {
        isOpen = !isOpen
      },
      "mouseenter": function($event) {
        mouse && (isOpen = true)
      }
    }
  }, [_t("default", [_h('btn', [_h('span', [_s(text)]), " ", (icon) ? _h('icon', {
    attrs: {
      "meta": icon,
      "theme": theme
    }
  }) : _e()])])]), " ", _h('ul', {
    class: ['drop-menu', 'dropdown-view', theme && theme]
  }, [_l((options), function(item) {
    return _h('menu-iter', {
      attrs: {
        "item": item,
        "handle": select,
        "fields": fields
      }
    })
  })])])
}},staticRenderFns: []}

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('label', {
    class: ['check', theme && theme]
  }, [_h('input', {
    attrs: {
      "type": "checkbox",
      "disabled": disabled
    },
    domProps: {
      "checked": value
    },
    on: {
      "change": function($event) {
        $emit('input', $event.target.checked)
      }
    }
  }), " ", _h('span', {
    staticClass: "check-text"
  }, [_t("default")])])
}},staticRenderFns: []}

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('table', {
    staticClass: "table"
  }, [(!noHeader && columns.length) ? _h('thead', [_h('tr', [_l((columns), function(col) {
    return _h('th', [_s(col.title)])
  })])]) : _e(), " ", _h('tbody', [_t("default", [_l((datas), function(data) {
    return _h('tr', [_l((columns), function(col) {
      return _h('td', [_s(data[col.key])])
    })])
  })])])])
}},staticRenderFns: []}

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('li', {
    class: ['drop-menu-item',
      item[fields.disabled] && 'is-disabled',
      item[fields.checked] && 'is-checked',
      isSub && 'is-sub'
    ],
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        (isSub || item[fields.disabled]) || handle(item)
      }
    }
  }, [_h('span', [_s(item[fields.text])]), " ", (isSub) ? _h('ul', {
    class: ['drop-menu']
  }, [_l((item.items), function(it) {
    return _h('menu-iter', {
      attrs: {
        "item": it,
        "handle": handle,
        "fields": fields
      }
    })
  })]) : _e()])
}},staticRenderFns: []}

/***/ },
/* 41 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('i', {
    class: [icon, meta && ('icon-meta ' + meta), theme && theme]
  })
}},staticRenderFns: []}

/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('button', {
    class: ['btn', tick && 'btn-meta-tick', disabled && 'is-disabled', theme && theme],
    attrs: {
      "disabled": disabled
    },
    on: {
      "click": function($event) {
        $emit('click', $event)
      }
    }
  }, [_t("default")])
}},staticRenderFns: []}

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    class: ['grid-row', 'form-control']
  }, [_h('span', {
    class: ['label', align && 'grid-col-' + align]
  }, [_s(text)]), " ", _h('span', {
    class: ['grid-col-' + (12 - align)]
  }, [_t("default")])])
}},staticRenderFns: []}

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "tab-panel"
  }, [_h('div', {
    class: classes.concat(['tab-nav'])
  }, [_l((tabs), function(it) {
    return _h('div', {
      class: ['tab-title', (it.value == value) && 'is-selected'],
      on: {
        "click": function($event) {
          $emit('input', it.value)
        }
      }
    }, ["\n\t\t\t" + _s(it.title) + "\n\t\t"])
  })]), " ", _h('div', {
    class: ['tab-container']
  }, [_l((tabs), function(it) {
    return _h('div', {
      class: ['tab-content', (it.value == value) && 'is-selected']
    }, [_t(it.value)])
  })])])
}},staticRenderFns: []}

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('input', {
    class: ['input', theme && theme],
    attrs: {
      "type": type,
      "disabled": disabled
    },
    domProps: {
      "value": value
    },
    on: {
      "change": function($event) {
        $emit('input', $event.target.value)
      }
    }
  })
}},staticRenderFns: []}

/***/ },
/* 46 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    class: [row ? 'flayout-row' : 'flayout-col']
  }, [(showHeader) ? _h('div', {
    staticClass: "flayout-header"
  }, [_t("header")]) : _e(), " ", _h('div', {
    staticClass: "flayout-content"
  }, [_t("default")]), " ", (showFooter) ? _h('div', {
    staticClass: "flayout-footer"
  }, [_t("footer")]) : _e()])
}},staticRenderFns: []}

/***/ },
/* 47 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "window-container"
  }, [(showHeader) ? _h('div', {
    staticClass: "window-header"
  }, [_t("header")]) : _e(), " ", _h('div', {
    staticClass: "window-content"
  }, [_t("default")]), " ", (showFooter) ? _h('div', {
    staticClass: "window-footer"
  }, [_t("footer")]) : _e()])
}},staticRenderFns: []}

/***/ },
/* 48 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    class: ['dropdown', open && 'is-open', dropRight && 'is-drop-right']
  }, [_t("control"), " ", _t("default")])
}},staticRenderFns: []}

/***/ },
/* 49 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    class: ['nav-group']
  }, [(title) ? _h('span', {
    class: ['nav-title']
  }, [_t("title", [_s(title)])]) : _e(), " ", _l((routers), function(router) {
    return _h('router-link', {
      class: ['nav-group-item'],
      attrs: {
        "to": router.to
      }
    }, [_h('span', [_s(router.title)])])
  })])
}},staticRenderFns: []}

/***/ },
/* 50 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('dropdown', {
    attrs: {
      "open": isOpen
    },
    nativeOn: {
      "mouseleave": function($event) {
        mouse && (isOpen = false)
      }
    }
  }, [_h('btn', {
    slot: "control",
    on: {
      "click": function($event) {
        isOpen = !isOpen
      }
    },
    nativeOn: {
      "mouseenter": function($event) {
        mouse && (isOpen = true)
      }
    }
  }, [_h('span', [_s(displayText)]), " ", _h('icon', {
    attrs: {
      "meta": arrow ? 'icon-arrow' : 'icon-caret',
      "theme": theme
    }
  })]), " ", _h('ul', {
    class: ['drop-select', 'dropdown-view', theme && theme]
  }, [_l((options), function(item) {
    return _h('li', {
      class: ['drop-select-item',
        item[fields.disabled] && 'is-disabled',
        item[fields.value] === value && ((active && 'is-active') || (check && 'is-checked'))
      ],
      on: {
        "click": function($event) {
          select(item)
        }
      }
    }, [_h('span', [_s(item[fields.text])])])
  })])])
}},staticRenderFns: []}

/***/ },
/* 51 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    class: [flex ? ('grid-row-flex flex-' + flex) : 'grid-row']
  }, [_t("default")])
}},staticRenderFns: []}

/***/ },
/* 52 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    staticClass: "radio-group"
  }, [_l((options), function(opt) {
    return _h('label', {
      class: ['radio', theme && theme]
    }, [_h('input', {
      attrs: {
        "type": "radio",
        "name": group,
        "disabled": opt.disabled
      },
      domProps: {
        "value": opt.value,
        "checked": opt.value == value
      },
      on: {
        "change": function($event) {
          $emit('input', $event.target.value)
        }
      }
    }), " ", _h('span', {
      staticClass: "radio-text"
    }, [_s(opt.text)])])
  })])
}},staticRenderFns: []}

/***/ },
/* 53 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('label', {
    staticClass: "label-select"
  }, [_h('select', {
    class: ['select', theme && theme],
    attrs: {
      "disabled": disabled
    },
    domProps: {
      "value": value
    },
    on: {
      "change": function($event) {
        $emit('input', $event.target.value)
      }
    }
  }, [_l((options), function(opt) {
    return _h('option', {
      domProps: {
        "value": opt.value
      }
    }, [_s(opt.text)])
  })])])
}},staticRenderFns: []}

/***/ },
/* 54 */
/***/ function(module, exports) {

module.exports={render:function (){with(this) {
  return _h('div', {
    class: [col && ('grid-col-' + col), offset && ('grid-offset-' + offset)]
  }, [_t("default")])
}},staticRenderFns: []}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Btn_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Btn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Btn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CheckBox_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CheckBox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_CheckBox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Dropdown_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Dropdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DropMenu_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_DropMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_DropMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DropSelect_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DropSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_DropSelect_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Flayout_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Flayout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_Flayout_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_FlexWindow_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_FlexWindow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_FlexWindow_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_GridCol_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_GridCol_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_GridCol_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_GridRow_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_GridRow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_GridRow_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Icon_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_Icon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_MenuIter_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_MenuIter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_MenuIter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_NavGroup_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_NavGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_NavGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_PureInput_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_PureInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_PureInput_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_PureSelect_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_PureSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_PureSelect_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_RadioGroup_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_RadioGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_RadioGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_SimpleTab_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_SimpleTab_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_SimpleTab_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_SimpleTable_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_SimpleTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_SimpleTable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_FormControl_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_FormControl_vue__);
/* harmony export (immutable) */ exports["install"] = install;
/* harmony export (binding) */ __webpack_require__.d(exports, "__esModule", function() { return __esModule; });



















function install(Vue) {
	Object.keys(components).forEach(function (it) {
		Vue.component(it, components[it]);
	});
}

var components = {
	Btn: __WEBPACK_IMPORTED_MODULE_0__components_Btn_vue___default.a,
	CheckBox: __WEBPACK_IMPORTED_MODULE_1__components_CheckBox_vue___default.a,
	Dropdown: __WEBPACK_IMPORTED_MODULE_2__components_Dropdown_vue___default.a,
	DropMenu: __WEBPACK_IMPORTED_MODULE_3__components_DropMenu_vue___default.a,
	DropSelect: __WEBPACK_IMPORTED_MODULE_4__components_DropSelect_vue___default.a,
	Flayout: __WEBPACK_IMPORTED_MODULE_5__components_Flayout_vue___default.a,
	FlexWindow: __WEBPACK_IMPORTED_MODULE_6__components_FlexWindow_vue___default.a,
	GridCol: __WEBPACK_IMPORTED_MODULE_7__components_GridCol_vue___default.a,
	GridRow: __WEBPACK_IMPORTED_MODULE_8__components_GridRow_vue___default.a,
	Icon: __WEBPACK_IMPORTED_MODULE_9__components_Icon_vue___default.a,
	MenuIter: __WEBPACK_IMPORTED_MODULE_10__components_MenuIter_vue___default.a,
	NavGroup: __WEBPACK_IMPORTED_MODULE_11__components_NavGroup_vue___default.a,
	PureInput: __WEBPACK_IMPORTED_MODULE_12__components_PureInput_vue___default.a,
	PureSelect: __WEBPACK_IMPORTED_MODULE_13__components_PureSelect_vue___default.a,
	RadioGroup: __WEBPACK_IMPORTED_MODULE_14__components_RadioGroup_vue___default.a,
	SimpleTab: __WEBPACK_IMPORTED_MODULE_15__components_SimpleTab_vue___default.a,
	SimpleTable: __WEBPACK_IMPORTED_MODULE_16__components_SimpleTable_vue___default.a,
	FormControl: __WEBPACK_IMPORTED_MODULE_17__components_FormControl_vue___default.a
};

Object.defineProperty(components, 'install', {
	value: install,
	enumerable: false,
	configurable: true
});

/* harmony default export */ exports["default"] = components;
var __esModule = true;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=veak.js.map