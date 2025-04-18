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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 367);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var $ = jQuery,
    domready = __webpack_require__(26);

function toggleClass(item, newValue, oldValue) {
    var $el = $(item.selector);

    if (newValue) {
        $el.addClass(item.value);
    } else {
        $el.removeClass(item.value);
    }
}

function setClass(item, newValue, oldValue) {
    var $el = $(item.selector);
    var addClass = newValue;
    var removeClass = oldValue;

    if (item.value && item.value[newValue]) {
        addClass = item.value[newValue];
    }
    if (item.value && item.value[oldValue]) {
        removeClass = item.value[oldValue];
    }

    $el.removeClass(removeClass);
    $el.addClass(addClass);
}

function setCss(item, newValue, oldValue) {
    var $el = $(item.selector);
    var value = "";

    if (_.isObject(item.value)) {
        value = item.value[newValue];
    } else {
        value = newValue;
    }

    var callback = void 0;
    if (item.callback) {
        callback = new Function("return " + item.callback)();
        value = callback(value, oldValue);
    }

    $el.css(item.property, value);
}

function focus(item, newValue, oldValue) {
    //let entity = newValue['entity'];
    var entity_type = item.value['entity'];
    var entity_id = item.value['entity_id'];
    var fallback_entity_type = void 0;
    var fallback_entity_id = void 0;

    if (item.value['fallback']) {
        fallback_entity_type = item.value['fallback']['entity'];
        fallback_entity_id = item.value['fallback']['entity_id'];
    }

    var entity = top.wp.customize[entity_type](entity_id);
    if (!entity && fallback_entity_type) {
        entity = top.wp.customize[fallback_entity_type](fallback_entity_id);
    }

    entity.collapse();
    top.wp.customize.trigger('colibri_sections_collapse');
    entity.focus();
    //api.preview.send( 'focus-control-for-setting', entity_id );
}

function colibriComponentToggle(item, newValue, oldValue) {

    var el = $(item.selector);
    var component = el.data()['fn.colibri.' + item.value];
    if (component) {
        setTimeout(function () {
            if (newValue) {
                component.start();
            } else {
                component.stop();
            }
        }, item.delay || 0);
    } else {
        console.log(item.selector, 'has no colibri component');
    }
}

function colibriComponentRestart(item, newValue, oldValue) {

    var el = $(item.selector);
    var component = el.data()['fn.colibri.' + item.value];
    if (component) {
        setTimeout(function () {
            if (component.hasOwnProperty('restart')) {
                component.restart();
            } else {
                component.stop();
                component.start();
            }
        }, item.delay || 0);
    } else {
        console.log(item.selector, 'has no colibri component');
    }
}

function colibriNavigationToggleSticky(item, newValue, oldValue) {

    var el = $(item.selector);
    var component = el.data()['fn.colibri.navigation'];
    if (component.opts.data.sticky != false) {
        window.colibriNavStickyOpts = component.opts.data.sticky;
    }

    if (newValue == false) {
        component.opts.data.sticky = false;
    } else {
        component.opts.data.sticky = window.colibriNavStickyOpts;
    }

    if (component) {
        if (component.hasOwnProperty('restart')) {
            component.restart();
        } else {
            component.stop();
            component.start();
        }
    } else {
        console.log(item.selector, 'has no colibri component');
    }
}

function colibriNavigationToggleOverlap(item, newValue, oldValue) {

    var el = $(item.selector);
    var component = el.data()['fn.colibri.navigation'];
    component.opts.data.overlap = newValue;
    if (component) {
        if (component.hasOwnProperty('restart')) {
            component.restart();
        } else {
            component.stop();
            component.start();
        }

        var callback = void 0;
        if (item.callback) {
            callback = new Function("return " + item.callback)();
            callback(newValue, oldValue);
        }
    } else {
        console.log(item.selector, 'has no colibri component');
    }
}

function colibriSetAttr(item, newValue, oldValue) {
    var el = $(item.selector);
    el.attr(item.value, newValue);
}

function runJs(data, newValue, oldValue) {
    data.forEach(function (item) {
        switch (item.action) {
            case 'toggle-class':
                toggleClass(item, newValue, oldValue);
                break;
            case 'set-class':
                setClass(item, newValue, oldValue);
                break;
            case 'set-css':
                setCss(item, newValue, oldValue);
                break;
            case 'focus':
                focus(item, newValue, oldValue);
                break;
            case 'colibri-component-restart':
                colibriComponentRestart(item, newValue, oldValue);
                break;
            case 'colibri-component-toggle':
                colibriComponentToggle(item, newValue, oldValue);
                break;
            case 'colibri-navigation-toggle-sticky':
                colibriNavigationToggleSticky(item, newValue, oldValue);
                break;
            case 'colibri-navigation-toggle-overlap':
                colibriNavigationToggleOverlap(item, newValue, oldValue);
                break;
            case 'colibri-set-attr':
                colibriSetAttr(item, newValue, oldValue);
                break;
        }
    });
}

exports.default = runJs;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function() {
    'use strict'

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            }
            else if (typeof parse_tree[i] === 'object') {
                ph = parse_tree[i] // convenience purposes only
                if (ph.keys) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < ph.keys.length; k++) {
                        if (arg == undefined) {
                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
                        }
                        arg = arg[ph.keys[k]]
                    }
                }
                else if (ph.param_no) { // positional argument (explicit)
                    arg = argv[ph.param_no]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(ph.type)) {
                    is_positive = arg >= 0
                }

                switch (ph.type) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0)
                        break
                    case 'e':
                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg)
                        break
                    case 'g':
                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(ph.type)) {
                    output += arg
                }
                else {
                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    }
                    else {
                        sign = ''
                    }
                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' '
                    pad_length = ph.width - (sign + arg).length
                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }

                parse_tree.push(
                    {
                        placeholder: match[0],
                        param_no:    match[1],
                        keys:        match[2],
                        sign:        match[3],
                        pad_char:    match[4],
                        align:       match[5],
                        width:       match[6],
                        precision:   match[7],
                        type:        match[8]
                    }
                )
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (true) {
        exports['sprintf'] = sprintf
        exports['vsprintf'] = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
    }
    /* eslint-enable quote-props */
}(); // eslint-disable-line


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = compare;
function compare(value1, value2, operator) {
    var result = null;
    switch (operator) {
        case "=":
        case "==":
            result = value1 == value2;
            break;

        case "===":
            result = value1 === value2;
            break;

        case "!=":
            result = value1 != value2;
            break;

        case "!==":
            result = value1 !== value2;
            break;

        case ">":
            result = value1 > value2;
            break;

        case ">=":
            result = value1 >= value2;
            break;

        case "<":
            result = value1 < value2;
            break;

        case "<=":
            result = value1 <= value2;
            break;

        case "in":

            if (_.isArray(value2)) {
                result = value2.indexOf(value1) !== -1;
            } else {
                if (_.isArray(value1)) {
                    result = value1.indexOf(value2) !== -1;
                } else {
                    result = false;
                }
            }

            break;

    }

    return result;
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (true) module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(368);


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(91);

__webpack_require__(369);

__webpack_require__(370);

__webpack_require__(371);

__webpack_require__(372);

__webpack_require__(373);

var _domready = __webpack_require__(26);

var _domready2 = _interopRequireDefault(_domready);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColibriCustomizerPreviewer = function () {
    function ColibriCustomizerPreviewer() {
        _classCallCheck(this, ColibriCustomizerPreviewer);
    }

    _createClass(ColibriCustomizerPreviewer, null, [{
        key: "bindSetting",
        value: function bindSetting(setting, callback) {
            window.wp.customize(setting, function (setting) {
                setting.bind(callback);
            });
        }
    }]);

    return ColibriCustomizerPreviewer;
}();

jQuery(function () {
    wp.customize.preview.send('colibri-ready', _wpCustomizeSettings);
});

(0, _domready2.default)(function () {
    var links = document.querySelectorAll("a.customize-unpreviewable");
    if (!!links.length) {
        links.forEach(function (link) {
            return link.addEventListener('click', function (e) {
                e.preventDefault();
            });
        });
    }
});

window.ColibriCustomizerPreviewer = ColibriCustomizerPreviewer;

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _compare = __webpack_require__(102);

var _compare2 = _interopRequireDefault(_compare);

var _maybeDeserialize = __webpack_require__(62);

var _maybeDeserialize2 = _interopRequireDefault(_maybeDeserialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = jQuery,
    domready = __webpack_require__(26),
    sprintf = __webpack_require__(101).sprintf;

function isSettingActive(key) {
    if (!colibri_CONTROLS_ACTIVE_RULES[key]) {
        return true;
    }

    var rules = colibri_CONTROLS_ACTIVE_RULES[key] || [];

    for (var i = 0; i < rules.length; i++) {
        var rule = rules[i],
            value1 = (0, _maybeDeserialize2.default)(wp.customize(rule.setting).get()),
            value2 = rule.value,
            operator = rule.operator;

        if (!(0, _compare2.default)(value1, value2, operator)) {
            return false;
        }
    }

    return true;
}

function getStyleRulesByMedia() {
    var medias = {};

    var _loop = function _loop(key) {
        if (!colibri_CSS_OUTPUT_CONTROLS.hasOwnProperty(key)) {
            return "continue";
        }

        if (!isSettingActive(key)) {
            return "continue";
        }

        var rules = colibri_CSS_OUTPUT_CONTROLS[key];
        rules.forEach(function (data) {
            if (!medias[data.media]) {
                medias[data.media] = [];
            }

            var value = (0, _maybeDeserialize2.default)(wp.customize(key).get());
            if (_.isObject(data.value)) {
                value = data.value[value];
            }
            medias[data.media].push($.extend({}, data, { value: value }));
        });
    };

    for (var key in colibri_CSS_OUTPUT_CONTROLS) {
        var _ret = _loop(key);

        if (_ret === "continue") continue;
    }

    return medias;
}

function getItemValue(item) {
    if (_.isObject(item.value)) {

        var __value = item.value_pattern;

        __value = __value.replace(/#([\w_.]+)#/ig, function (m1, m2) {
            return _.get(item.value, m2);
        });

        return __value;
    } else {
        if (_.isBoolean(item.value)) {
            if (item.value) {
                if (item.true_value) {
                    return item.true_value;
                } else {
                    return undefined;
                }
            } else {
                if (item.false_value) {
                    return item.false_value;
                } else {
                    return undefined;
                }
            }
        }
    }

    if (!JSON.stringify(item.value).length) {
        return '';
    }

    return sprintf(item.value_pattern, item.value);
}

function generateCSSOutputForMedia(media, data) {
    var selectors = {};

    var selectorsPrefix = colibri_ADDITIONAL_JS_DATA.css_selectors_prefix || "";

    data.forEach(function (item) {

        var selector = item.selector;

        if (_.isArray(selector)) {
            selector = selector.join(',');
        }

        if (!selectors[selector]) {
            selectors[selector] = {};
        }

        var value = getItemValue(item);

        if (value !== undefined) {
            selectors[selector][item.property] = value;
        }
    });

    var content = '';
    for (var selector in selectors) {

        if (!selectors.hasOwnProperty(selector)) {
            continue;
        }

        var selector_composed_rules = [],
            selector_rules = selectors[selector];

        for (var prop in selector_rules) {
            if (!selector_rules.hasOwnProperty(prop)) {
                continue;
            }
            var value = selector_rules[prop];
            selector_composed_rules.push(prop + ":" + value);
        }

        var rules = selector_composed_rules.join(";");
        content += selectorsPrefix + " " + selector + "{" + rules + "}";
    }

    if (media) {
        content = media + "{" + content + "}";
    }

    return content;
}

function _displayStyle() {
    var $style = $('[data-colibri-theme-style="true"]'),
        styleByMedia = getStyleRulesByMedia(),
        content = '';

    for (var media in styleByMedia) {
        if (!styleByMedia.hasOwnProperty(media)) {
            continue;
        }

        var data = styleByMedia[media];
        if (media === "__colibri__no__media__") {
            media = "";
        }

        content += generateCSSOutputForMedia(media, data);
    }

    $style.text(content);
}

var displayStyle = _.debounce(_displayStyle, 100);

domready(function () {
    var settingsInActiveRules = [];

    for (var key in colibri_CONTROLS_ACTIVE_RULES) {
        if (!colibri_CONTROLS_ACTIVE_RULES.hasOwnProperty(key)) {
            continue;
        }

        if (!colibri_CSS_OUTPUT_CONTROLS[key]) {
            continue;
        }

        for (var i = 0; i < colibri_CONTROLS_ACTIVE_RULES[key].length; i++) {
            var setting = colibri_CONTROLS_ACTIVE_RULES[key][i].setting;
            if (setting && settingsInActiveRules.indexOf(setting) === -1) {
                settingsInActiveRules.push(setting);
            }
        }
    }

    settingsInActiveRules.concat(_.keys(colibri_CSS_OUTPUT_CONTROLS)).forEach(function (control_id) {
        wp.customize(control_id, function (value) {
            value.bind(function (newValue, oldValue) {
                displayStyle();
                top.wp.customize.requestChangesetUpdate({}, { autosave: true });
            });
        });
    });
});

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsHelpers = __webpack_require__(100);

var _jsHelpers2 = _interopRequireDefault(_jsHelpers);

var _domready = __webpack_require__(26);

var _domready2 = _interopRequireDefault(_domready);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _domready2.default)(function () {
    var settingsInActiveRules = [];

    settingsInActiveRules.concat(_.keys(colibri_JS_OUTPUT_CONTROLS)).forEach(function (control_id) {
        wp.customize(control_id, function (value) {
            value.bind(function (newValue, oldValue) {
                (0, _jsHelpers2.default)(colibri_JS_OUTPUT_CONTROLS[this.id], newValue, oldValue);
                top.wp.customize.requestChangesetUpdate({}, { autosave: true });
            });
        });
    });
});

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// wp.customize.bind('preview-ready',function () {
//    wp.customize.preview.receive(function(){
//       console.log('Received',arguments
//       )
//    });
// })


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = jQuery,
    selectiveRefresh = wp.customize.selectiveRefresh,
    partialIsRelatedSetting = selectiveRefresh.Partial.prototype.isRelatedSetting,
    partialRefresh = selectiveRefresh.Partial.prototype.refresh,
    _renderContent = selectiveRefresh.Partial.prototype.renderContent,
    partialReady = selectiveRefresh.Partial.prototype.ready,
    innerRefreshes = [],
    innerPartialsListGenerated = false,
    renderInnerPlacementDelay = 200;

function isSelectiveRefreshSetting(id) {
    return colibri_ADDITIONAL_JS_DATA.selective_refresh_settings.indexOf(id) !== -1;
}

selectiveRefresh.Partial = selectiveRefresh.Partial.extend({
    isRelatedSetting: function isRelatedSetting(setting /*... newValue, oldValue */) {
        var _this = this;

        var isRelatedSetting = partialIsRelatedSetting.apply(this, arguments),
            isInnerPartial = false;

        if (isRelatedSetting) {
            selectiveRefresh.partial.each(function (partial) {
                if (innerRefreshes.indexOf(partial.id) === -1) {
                    if (_this.containsPartial(partial)) {
                        innerRefreshes.push(partial.id);
                    }
                }
            });
        } else {
            isInnerPartial = innerRefreshes.indexOf(this.id) !== -1;

            if (isInnerPartial) {
                this.renderedAsInnerPartial = true;
            } else {
                this.renderedAsInnerPartial = false;
            }
        }

        return isInnerPartial || isRelatedSetting;
    },
    refresh: function refresh() {
        var refreshPromise = partialRefresh.apply(this, arguments);
        refreshPromise.always(function () {
            innerRefreshes = [];
            innerPartialsListGenerated = false;
        });

        return refreshPromise;
    },
    ready: function ready() {
        var _this2 = this;

        _.each(this.placements(), function (placement) {
            _this2.addColibriOverlay(placement);
        });

        partialReady.apply(this, arguments);
    },
    addColibriOverlay: function addColibriOverlay(placement) {
        return;
        if (placement.container.children('span.customize-colibri-overlay').length === 0) {
            placement.container.append('<span class="customize-colibri-overlay"></span>');
        }
    },
    renderContent: function renderContent(placement) {
        var _this3 = this;

        this.addColibriOverlay(placement);

        if (this.renderedAsInnerPartial) {
            setTimeout(function () {
                var currentPlacement = _this3.placements()[0];
                currentPlacement.addedContent = placement.addedContent;
                _renderContent.call(_this3, currentPlacement);
            }, renderInnerPlacementDelay);
        } else {
            _renderContent.apply(this, arguments);
        }
    },
    containsPartial: function containsPartial(toCheck) {
        var parentPlacements = this.placements();
        var childPlacements = toCheck.placements();

        for (var i = 0; i < parentPlacements.length; i++) {

            var parentPlacement = parentPlacements[i].container;

            if (parentPlacement) {

                for (var j = 0; j < childPlacements.length; j++) {

                    var childPlacement = childPlacements[j].container;

                    if (childPlacement && !parentPlacement.is(childPlacement) && $.contains(parentPlacement[0], childPlacement[0])) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
});

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {
    var $win = $(window);

    function setHeroEditButtonTop() {
        var top = '0';
        var $hero = $("#hero");
        var overlap = $("[data-colibri-navigation-overlap]").hasClass('h-navigation_overlap');
        if (overlap) {
            top = parseInt($hero.css('padding-top')) + 30;
        }
        var button = $hero.children('.customize-partial-edit-shortcut');
        button.attr('style', "top:" + top + "px !important");
    }

    $win.on('resize.overlap', setHeroEditButtonTop);

    $win.load(function () {
        setTimeout(setHeroEditButtonTop, 1000);
    });

    if (wp.customize && wp.customize.selectiveRefresh) {
        wp.customize.selectiveRefresh.bind('partial-content-rendered', function (placement) {
            if (jQuery(placement.partial.params.selector).attr('id') === 'hero') setTimeout(setHeroEditButtonTop, 1000);
        });
    }

    window.colibriUpdateHeroPenPosition = setHeroEditButtonTop;

    //update columns width based on layout
    wp.customize('header_front_page.hero.props.heroSection.layout', function (value) {
        var MEDIA_LAYOUTS = ['textWithMediaOnRight', 'textWithMediaOnLeft'];
        var prevLayout = parent.wp.customize("header_front_page.hero.props.heroSection.layout").get();

        value.bind(function (newLayout) {
            var width = 80;
            var prevWidth = parent.wp.customize("header_front_page.hero.hero_column_width").get();
            var controlWidth = parent.wp.customize("header_front_page.hero.hero_column_width").findControls()[0];

            if (MEDIA_LAYOUTS.includes(prevLayout) && MEDIA_LAYOUTS.includes(newLayout)) {
                // Is switching between media layouts
                width = parseInt(prevWidth);
            } else if (prevLayout === 'textOnly') {
                width = 50;
            }

            controlWidth.vueControl.value = width;
            controlWidth.vueControl.debouncedSetValue(width);

            prevLayout = newLayout;
        });
    });

    var updateNavigationPadding = function updateNavigationPadding(value) {
        value.bind(function (newval) {
            var data = jQuery("#navigation").data();

            if (data["fn.colibri.navigation"]) {
                var component = data["fn.colibri.navigation"];
                var restart = function restart() {
                    component.computeOverlapPadding();
                    jQuery("#navigation")[0].removeEventListener("transitionend", restart);
                };

                jQuery("#navigation")[0].addEventListener("transitionend", restart);
            }
        });
    };

    wp.customize("header_post.navigation.style.padding.top.value", updateNavigationPadding);
    wp.customize("header_front_page.navigation.style.padding.top.value", updateNavigationPadding);
})(jQuery);

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = maybe_deserialize;
function maybe_deserialize(value) {
    if (_.isString(value)) {
        try {
            value = JSON.parse(decodeURIComponent(value));
        } catch (e) {}
    }

    return value;
}

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** @global _ **/

_.mixin({
    get: function get(obj, key) {
        var type = typeof key === "undefined" ? "undefined" : _typeof(key);

        if (type === 'string' || type === "number") {
            key = ("" + key).replace(/\[(.*?)\]/, /\[(.*?)\]/, function (m, key) {
                //handle case where [1] may occur
                return '.' + key.replace(/["']/g, /["']/g, ""); //strip quotes
            }).split('.');
        }
        for (var i = 0, l = key.length; i < l; i++) {
            if (typeof obj !== 'undefined' && _.has(obj, key[i])) obj = obj[key[i]];else return undefined;
        }
        return obj;
    }
});

/***/ })

/******/ });
