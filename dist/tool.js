/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module 工具方法－Util
 * @description 此模块包涵了常用的工具方法，直接通过命名空间调用即可：eg: $.trim(str);
 *              部分方法需要加上类名：eg: $.validate.input(str);
 */



var validate = {
	/**
	 * @function input
	 * @param  {String} str 需要校验的字符串
	 * @return {Boolean}    
	 * @description 是否满足：只有中文、数字、字母和下划线，且位置不限。
	 * @example $.validate.input(str)
	 */
	input: function(str) {
		return /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(str);
	},

	/**
	 * @function mobile
	 * @param  {String} str 需要校验的字符串
	 * @return {Boolean}    
	 * @description 是否为手机号
	 * @example $.validata.mobile(str);
	 */
	mobile: function(str) {
		return /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
	},

	/**
	 * @function code
	 * @param  {String} str   需要校验的字符串
	 * @param  {Number} [num] 验证码的个数，默认四位数
	 * @return {Boolean}      
	 * @description 是否为数字验证码
	 * @example $.validata.code(str, [num]);
	 */
	code: function(str, num) {
		if (num && typeof num == 'number') {
			return new RegExp('^\\d{' + num + '}$').test(str);
		} else {
			return /^\d{4}$/.test(str);
		}
	},

	/**
	 * @function email
	 * @param  {String} str 需要校验的字符串
	 * @return {Boolean}    
	 * @description 是否为邮箱
	 * @example $.validata.email(str);
	 */
	email: function(str) {
		return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(str);
	}
}

/**
 * @function trim
 * @param  {String} str 要过滤的字符串
 * @return {String}     过滤后的字符串
 * @description 过滤空串
 * @example $.trim(str);
 */
function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * @function dateFormat
 * @param  {String} format  时间格式：年=yyyy，月=MM，日=dd，时=HH，分=mm，秒=ss
 * @param  {Number} [timestamp] 时间戳，默认当前时间
 * @return {String} 格式化后的时间字符串
 * @description 时间格式化，format可以随意组合。eg: yyyy-MM-dd HH:mm:ss => 2017-01-01 13:13:13
 * @example $.dateFormat(format, [timestamp]);
 */
function dateFormat(format, timestamp) {
	if (format && typeof format == 'string') {
		var date = timestamp && typeof timestamp == 'number' ? new Date(timestamp) : new Date(),
			year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate(),
			hour = date.getHours(),
			min = date.getMinutes(),
			sec = date.getSeconds();
		if (format.match(/y{4}/g)) { // 年
			format = format.replace(/y{4}/g, year);
		}
		if (format.match(/M{2}/g)) { // 月
			format = format.replace(/M{2}/g, month < 10 ? '0' + month : month);
		}
		if (format.match(/d{2}/g)) { // 日
			format = format.replace(/d{2}/g, day < 10 ? '0' + day : day);
		}
		if (format.match(/H{2}/g)) { // 时
			format = format.replace(/H{2}/g, hour < 10 ? '0' + hour : hour);
		}
		if (format.match(/m{2}/g)) { // 分
			format = format.replace(/m{2}/g, min < 10 ? '0' + min : min);
		}
		if (format.match(/s{2}/g)) { // 秒
			format = format.replace(/s{2}/g, sec < 10 ? '0' + sec : sec);
		}
	}
	return format;
}

module.exports = {
	dateFormat: dateFormat,
	validate: validate,
	trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module 原生方法加强－Array
 * @description 此模块加强了原生数组的功能，增加了部分常用方法，且未对原方法进行改变。
 *              无需额外调用，已经挂载到原生Array的原型链上。
 */



var util = __webpack_require__(0);
var test = __webpack_require__(5);

var array = {
    init: function() {
        this.addPrototype();
    },

    addPrototype: function() {
        /**
         * @function deleteOf
         * @param  {Number} ind 数组元素索引
         * @return {any}        被删除的数组元素
         * @description 删除并返回数组的指定位置元素，该方法直接改变原数组
         * @example
         * [1, 2, 3].deleteOf(0) => [2, 3]
         */
        Array.prototype.deleteOf = function(ind) {
            var deleted = this[ind];
            this.splice(ind, 1);
            return deleted;
        };

        /**
         * @function deleteVal
         * @param  {any}    val   数组元素的值
         * @param  {Number} [num] 删除的元素个数，默认全部删除
         * @return {any}          被删除的数组元素
         * @description 删除并返数组的指定值元素，该方法直接改变原数组
         * @example
         * [1, 2, 3].deleteVal(1) => [2, 3]
         */
        Array.prototype.deleteVal = function(val, num) {
            var count = 0,
                num = num || this.length;
            for (var i = 0, len = this.length; i < len; i++) {
                var temp = this[i];
                if (count < num) {
                    if (temp == val) {
                        if (i == len - 1) {
                            return this.deleteOf(i);
                        } else {
                            this.deleteOf(i);
                            count++;
                            continue;
                        }
                    }
                }
            }
        };

        /**
         * @function pushOf
         * @param {Number} ind 索引值
         * @param {Number} val 元素值
         * @return {Number} 新数组长度
         * @description 向数组中的指定位置插入元素，并返回新的长度。该方法直接改变原数组
         * @example
         * [1, 2, 3].pushOf(0, 4) => [4, 1, 2, 3] 
         */
        Array.prototype.pushOf = function(ind, val) {
            this.splice(ind, 0, val).length;
            return this.length;
        };

        /**
         * @function replace
         * @param  {any}    val    本元素值 
         * @param  {any}    newVal 新元素值
         * @param  {Number} [num]  替换的元素个数，默认替换全部
         * @return {Array} 新数组
         * @description 替换数组中指定值的元素，并返回新数组。该方法不会改变原数组
         * @example
         * [1, 2, 3].replace(1, 2) => [2, 2, 3]
         */
        Array.prototype.replace = function(val, newVal, num) {
            var result = [],
                count = 0,
                num = num || this.length;
            for (var i = 0, len = this.length; i < len; i++) {
                var temp = this[i];
                if (count < num) {
                    if (temp == val) {
                        result.push(newVal);
                        count++;
                        continue;
                    }
                }
                result.push(temp);
            }
            return result;
        };

        /***
         * @function removeDuplicate
         * @param  {Number} ind   从第几个重复元素开始删除
         * @param  {Number} [num] 删除的元素数量，默认全部删除
         * @description 数组去重，并返回新数组。该方法不改变原数组
         *              暂时未开放，测试中有问题。xxxxxxxxx
         */
        Array.prototype.removeDuplicate = function(num) {
            var obj = {},
                count = 0,
                indexs = [],
                num = num || this.length;
            for (var i = 0, len = this.length; i < len; i++) {
                var temp = this[i];
                if (!obj[temp]) {
                    obj[temp] = i;
                } else {
                    indexs.push(obj[temp]);
                    indexs.push(i);
                }
            }
            for (var j = 0, len = indexs.length; j < len; j++) {
                if (count < num) {
                    this.deleteOf(indexs[j] - count);
                    count++;
                }
            }
            return this;
        };

        /**
         * @function trim
         * @param  {Number} [num] 删除的空串数量
         * @return {Array}        新数组
         * @description 数组去空串，并返回新数组。该方法不会改变原数组
         * @example
         * [1, 2, '', 3].trim() => [1, 2, 3]
         */
        Array.prototype.trim = function(num) {
            return _trim(num, '', this);
        };

        /**
         * @function removeNull
         * @param  {Number} [num] 删除的空串数量
         * @return {Array}        新数组
         * @description 数组去null值，并返回新数组。该方法不会改变原数组
         * @example
         * [1, 2, null, 3, undefined].trim() => [1, 2, 3]
         */
        Array.prototype.removeNull = function(num) {
            return _trim(num, null, this);
        };
    }
}

/***
 * 数组去空串/null值，并返回新数组 
 * 该方法不会改变原数组
 * @param  {Number} [num] 删除的空串数量
 * @return {Array}        新数组
 */
function _trim(num, str, that) {
    var count = 0, // 去除的空串数
        result = [],
        isStr = false,
        num = num || that.length;
    if (typeof str == 'string') {
        isStr = true;
    }
    for (var i = 0, len = that.length; i < len; i++) {
        var temp = that[i];
        if (isStr ? string.trim(temp) : temp != str) {
            result.push(temp);
        } else {
            if (count < num) {
                count++;
            } else {
                result.push(temp);
            }
        }
    }
    return result;
}

array.init();
// 添加测试中的方法
test.init([{
    targetObj: 'Array',
    funcName: 'removeDuplicate'
}]);

module.exports.array = array;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module 浏览器-Bom
 * @description 该模块提供了浏览器交互相关api
 */



var bom = {
    /**
     * @function browserVersion
     * @return {Object} 终端类型：trident = IE内核; presto = opera内核; webKit = 苹果、谷歌内核;
     *                      gecko = 火狐内核; mobile = 移动终端; ios = ios终端; 
     *                      android = android终端或者uc浏览器; iPhone = iPhone或者QQHD浏览器; 
     *                      iPad = iPad终端; webApp = web应用程序; wechat = 微信; alipay = 支付宝;
     * @description 判断终端的类型
     * @example
     * $.browserVersion.trident => ture/false
     */
    browser: function() {
        var u = navigator.userAgent;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核 
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应用程序，没有头部与底部
            wechat: !!u.match(/MicroMessenger/i), // 是否微信打开
            alipay: !!u.match(/AliApp/i) // 是否支付宝打开
        };
    },

    /**
     * @function getQueryString
     * @param {String} name URL后缀的参数名
     * @return {String} 对应的值
     * @description 获取请求url的参数
     * @example
     * https://www.baidu.com?name=test
     * $.getQueryString('name') => 'test'
     */
    getQueryString: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        // if (r != null) return unescape(r[2]);
        // return null;
        if (r != null) return r[2];
        return null;
    }
}

module.exports = {
    browserVersion: bom.browser,
    getQueryString: bom.getQueryString
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module 节点选择器－Dom
 * @description 该方法关注DOM查询，并将查询到的结果包装成tool节点对象并返回。
 *              调用方式同jQuery，eg: $('.class'); $('#id'); $('~name'); $('tagName');
 *              Members代表tool对象的属性，Method为tool对象的方法。
 */



var util = __webpack_require__(0);

// 所有html标签    
var htmlTagNames = [
    'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio',
    'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button',
    'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command',
    'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt',
    'em', 'embed',
    'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html',
    'i', 'iframe', 'img', 'input', 'ins',
    'kbd', 'keygen',
    'label', 'legend', 'li', 'link',
    'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter',
    'nav', 'noframes', 'noscript',
    'object', 'ol', 'optgroup', 'option', 'output',
    'p', 'param', 'pre', 'progress',
    'q',
    'rp', 'rt', 'ruby',
    's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup',
    'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt',
    'u', 'ul',
    'var', 'video',
    'wbr'
];

/**
 * @function $
 * @param  {String} eleKey 节点查询的标识符，包括：id, class, name, tag，其中name的标识符为~。
 * @return {ToolElement}   tool节点对象   
 * @description 节点选择器
 */
function ele(eleKey) {
    /***
     * 遍历查询节点   
     * @param  {String} queryKey  根据哪种方式查询节点：class/name/tag
     * @return {ToolElement}  tool对象    
     * @description 目前查询器的效率低于jQuery3~4倍左右(10w级的节点数查询)，暂时无优化思路。。瓶颈。。   
     */
    function _traverse(queryKey) {
        var allEles = document.getElementsByTagName('*'),
            elesArr = [];
        for (var i = 0, len = allEles.length; i < len; i++) {
            var temp = allEles[i];
            if (queryKey == 'class' || queryKey == 'name') {
                var attrValue = temp.getAttribute(queryKey);
                if (attrValue) {
                    if (String(attrValue).indexOf(eleKeySub) != -1) {
                        elesArr[elesArr.length] = temp;
                    }
                }
            } else if (queryKey == 'tag') {
                if (temp.nodeName == eleKey.toUpperCase()) {
                    elesArr[elesArr.length] = temp;
                }
            }
        }
        return _pack(elesArr);
    }
    if (eleKey && typeof eleKey == 'string') {
        if (util.trim(eleKey)) { // 选择器
            var eleKeySub = eleKey.slice(1),
                sign = eleKey[0];

            if (sign == '#') { // id

                var result = document.getElementById(eleKeySub);
                return result ? _pack([result]) : null;

            } else if (sign == '.') { //class 

                return _traverse('class');

            } else if (sign == '~') { // name

                return _traverse('name');

            } else { // tag 

                return _traverse('tag');

            }
        } else { // 节点
            return null;
        }
    } else if (eleKey && typeof eleKey == 'object') {
        return _pack(eleKey);
    }
}


/*************************************************************
 *
 * dom.js内部公共方法，只在dom.js内使用。
 * 
 *************************************************************/

/***
 * 将原生节点封装成ToolElement
 * @param  {Array} nodes 原生节点集，可以为空数组。
 * @return {ToolElement} tool对象
 */
function _pack(nodes) {
    if (typeof nodes == 'object' && nodes instanceof Array) {
        return new ToolElement(nodes);
    } else {
        console.warn('_pack()方法入参必须为数组');
    }
}

/***
 * 插入节点
 * @param {Element} parent 当前节点的原生父节点
 * @param  {String}  str    新节点名称
 * @param  {Element}  ele    新元素添加在该元素前  
 */
function _insertBefore(parent, str, ele) {
    parent.insertBefore(document.createTextNode(str), ele);
}

/***
 * 追加节点
 * @param  {Element} parent 当前节点的原生父节点
 * @param  {String} str    新节点的名称
 */
function _appendChild(parent, str) {
    parent.appendChild(document.createTextNode(str));
}

/***
 * 获得/设置节点的html/text 
 * @param  {String} type 操作类型：html：操作元素的html，text：操作元素的text
 * @param  {String} str  要设置的内容值
 * @param  {Array} nodes 原生节点集
 * @return {Array/ToolElement}      get操作时返回字符串数组，set时返回tool对象
 */
function _htmlAndText(type, str, nodes) {
    var result = [];
    for (var i = 0, len = nodes.length; i < len; i++) {
        if (!str && str != '') {
            result[result.length] = type == 'html' ? nodes[i].innerHTML : nodes[i].innerText;
        } else {
            type == 'html' ? nodes[i].innerHTML = str : nodes[i].innerText = str;
            result.push(nodes[i]);
        }
    }
    return (typeof result[0] == 'object') ? _pack(result) : result; // 是节点才包装成对象 
}

/***
 * 在当前节点的前/后插入新的内容
 * @param  {String} type 操作类型：before：在之前插入，after：在之后插入
 * @param  {String} str  要插入的内容
 * @param  {Element} node 原生节点
 * @return {ToolElement}      tool对象
 */
function _beforeAndAfter(type, str, node) {
    var parent = node.parentNode,
        charStart = -1,
        charEnd = -1,
        nextNode = _pack([node]).next();
    if (!str && typeof str == 'undefined') {
        return;
    } else {
        if (util.trim(str) == '') {
            return;
        } else {
            if (str.indexOf('<') != -1 && str.indexOf('>') != -1) { // str is a text
                for (var i = 0, len = str.length; i < len; i++) {
                    var tempChar = str[i];
                    if (tempChar == '<') {
                        // create newText    
                        type == 'before' ? _insertBefore(parent, str.slice(0, i), node) : !nextNode ? _appendChild(parent, str.slice(0, i)) : _insertBefore(parent, str.slice(0, i), nextNode.node[0]);
                        charStart = i;
                    } else if (tempChar == '>') {
                        charEnd = i;
                        // create newNode        
                        var tagName = str.slice(charStart + 1, charEnd),
                            tagEnd = str.indexOf('</' + tagName + '>'),
                            newNode = document.createElement(tagName);
                        newNode.innerHTML = str.slice(charEnd + 1, tagEnd);
                        type == 'before' ? parent.insertBefore(newNode, node) : !nextNode ? parent.appendChild(newNode) : parent.insertBefore(newNode, nextNode.node[0]);
                        // reset str
                        str = str.slice(tagEnd + tagName.length + 3, str.length);
                        i = 0;
                        len = str.length;
                        // create last newText    
                        if (str.indexOf('<') == -1) {
                            type == 'before' ? _insertBefore(parent, str, node) : !nextNode ? _appendChild(parent, str) : _insertBefore(parent, str, nextNode.node[0]);
                        }
                    }
                }
            } else { // str has tag
                type == 'before' ? _insertBefore(parent, str, node) : !nextNode ? _appendChild(parent, str) : _insertBefore(parent, str, nextNode.node[0]);
            }
        }
    }
}

function _prevAndNext(type, nodes) {
    var result = [];
    for (var i = 0, len = nodes.length; i < len; i++) {
        var node = nodes[i];
        while (node = type == 'prev' ? node.previousSibling : node.nextSibling) {
            if (node.nodeType == 1) {
                result.push(node);
                break;
            }
        }
    }
    return _pack(result);
}

/*************************************************************
 *
 * ToolElement节点对象封装 
 * 
 *************************************************************/

/***
 * @class ToolElement
 * @param {Array} nodes  原生节点集，可以为空数组。
 * @return {ToolElement} tool对象
 * @description tool节点对象封装，构造的时候只需传入选择器拿到的原生节点集。
 *              无需手动封装，直接调用$()即可。
 */
function ToolElement(nodes) {
    /**
     * @type Array
     * @description 原生节点集
     * @example
     * <div>It's a test.</div>  
     * $('div').node 等价于 document.getElementsByTagId('div')[0]
     */
    this.node = nodes;

    /************************************************************
     * 节点相关操作
     ***********************************************************/

    /**
     * @param  {Number} ind 索引
     * @return {Element}    原生节点
     * @description 根据索引获取原生节点 
     * @example
     * <div class="wrap">one</div>  
     * <div class="wrap">two</div>  
     * $('.wrap').get(0) 等价于 document.getElementsByTagId('div')[0]
     */
    this.get = function(ind) {
        return nodes[ind];
    };

    /**
     * @param  {Function} cb 回调函数
     * @description 遍历节点集
     * @example
     * <div class="wrap">test</div>  
     * <div class="wrap">test</div>  
     * <div class="wrap">test</div>  
     * $('.wrap').each(function(){});
     */
    this.each = function(cb) {
        var nodes = this.node;
        for (var i = 0, len = nodes.length; i < len; i++) {
            cb.call(nodes[i], i, nodes[i]);
        }
    };

    /**
     * @return {ToolElement} tool对象
     * @description 获取上一个节点
     * @example
     * <div class="prev-ele">prev</div>
     * <div class="current-ele">current</div>  
     * $('.current-ele').prev() => $('.prev-ele')
     */
    this.prev = function() {
        return _prevAndNext('prev', nodes);
    };

    /**
     * @return {ToolElement} tool对象
     * @description 获取下一个节点
     * @example
     * <div class="current-ele">current</div>
     * <div class="next-ele">next</div>  
     * $('.current-ele').next() => $('.next-ele')
     */
    this.next = function() {
        return _prevAndNext('next', nodes);
    };

    /**
     * @param  {Number} ind  索引
     * @return {ToolElement} tool对象
     * @description 获取指定节点
     * @example
     * <div class="one">test1</div>
     * <div class="two">test2</div>
     * $('div').eq(0) => $('.one')
     */
    this.eq = function(ind) {
        return _pack([nodes[ind]]);
    };

    /**
     * @description 删除当前节点
     * @example
     * <div>content..</div>
     * $('div').remove()
     */
    this.remove = function() {
        for (var i = 0, len = nodes.length; i < len; i++) {
            var node = nodes[i];
            node.parentNode.removeChild(node);
        }
    };

    /**
     * @return {ToolElement} tool对象
     * @description 清空当前节点
     * @example
     * <div>content...</div>
     * $('div').empty()
     */
    this.empty = function() {
        return this.html('');
    };

    /**
     * @param {String}       插入的内容
     * @return {ToolElement} tool对象
     * @description 在当前节点之前插入内容，支持传入标签。
     * @example
     * <div>test</div>
     * $('div').before('<div>content...</div>') => <div><content/div><div>test</div>
     */
    this.before = function(str) {
        this.each(function(ind, node) {
            _beforeAndAfter('before', str, node);
        });
        return _pack(nodes);
    };

    /**
     * @param  {String} str  插入的内容   
     * @return {ToolElement} tool对象 
     * @description 在当前节点之后插入内容，支持传入标签。
     * @example
     * <div>test</div>
     * $('div').before('<div>content...</div>') => <div>test</div><div><content>/div>
     */
    this.after = function(str) {
        this.each(function(ind, node) {
            _beforeAndAfter('after', str, node);
        });
        return _pack(nodes);
    };

    /**
     * @param  {String} [str] 要修改成的html
     * @description 获取/修改当前节点的html
     * @example
     * <div>test</div>
     * $('div').html() => '<div>test</div>'
     * $('div').html('hi') => '<div>hi</div>'
     */
    this.html = function(str) {
        return _htmlAndText('html', str, nodes);
    };

    /**
     * @param  {String} [str] 要修改成的text
     * @description 获取/修改当前节点text
     * @example
     * <div>test</div>
     * $('div').text() => '<div>test</div>'
     * $('div').text('hi') => '<div>hi</div>'
     */
    this.text = function(str) {
        return _htmlAndText('text', str, nodes);
    };

    /************************************************************
     * 属性相关操作
     ***********************************************************/

    this.attr = function() {

    };
}

module.exports = {
    ele: ele,
    ToolElement: ToolElement
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module 本地存储－Storage
 * @description 该模块提供了本地存储相关api，调用时直接在命名空间下使用，eg：$.getCookie(); 如果$不可用则tool.getCookie();
 */



var ls = localStorage;

var storage = {
    /**
     * @function getCookie
     * @param  {String} cname Cookie的key
     * @return {String} Cookie的value
     * @description 读取Cookie
     * @example
     * $.getCookie('name')
     */
    getCookie: function(cname) {
        var cvalue = "",
            cookies = document.cookie;
        if (cookies.length > 0) {
            var search = cname + "=",
                start = cookies.indexOf(search);
            if (start != -1) {
                start += search.length;
                var end = cookies.indexOf(";", start);
                if (end == -1) {
                    end = cookies.length;
                }
                cvalue = unescape(cookies.substring(start, end));
            }
        }
        return cvalue;
    },

    /**
     * @function setCookie
     * @param {String} cname  Cookie的key
     * @param {String} cvalue Cookie的value
     * @param {String} days   Cookie的存活天数
     * @description 写入Cookie
     * @example
     * $.setCookie('name', 'haha', 3)
     */
    setCookie: function(cname, cvalue, days) {
        var date = new Date();
        date.setDate(date.getDate() + days);
        var exdate = "; expires=" + date.toGMTString();
        document.cookie = cname + "=" + escape(cvalue) + exdate;
    },

    /**
     * @function getStorage
     * @param  {String} key 本地数据的key
     * @return {String}     本地数据的value
     * @description 获取本地存储中对应的值
     * @example
     * $.getStorage('name')
     */
    getStorage: function(key) {
        var val = '';
        _checkStorageSupport(function() {
            val = ls.getItem(key);
        });
        return val;
    },

    /**
     * @function setStorage
     * @param {String} key 本地数据的key
     * @param {String} val 本地数据的value   
     * @description 设置本地存储数据
     * @example
     * $.setStorage('name', 'haha')
     */
    setStorage: function(key, val) {
        _checkStorageSupport(function() {
            ls.setItem(key, val);
        });
    },

    /**
     * @function removeStorage
     * @param  {String} key 本地数据的key
     * @description 移除指定的本地数据
     * @example
     * $.removeStorage('name')
     */
    removeStorage: function(key) {
        _checkStorageSupport(function() {
            ls.removeItem(key);
        });
    },

    /**
     * @function clearStorage
     * @description 清除本地存储的所有数据   
     * @example
     * $.clearStorage()   
     */
    clearStorage: function() {
        _checkStorageSupport(function() {
            ls.clear();
        });
    }
}

/***
 * 监测浏览器是否支持localStorage
 * @param  {Function} func 普通方法
 */
function _checkStorageSupport(func) {
    if (!ls) {
        alert('浏览器不支持localStorage！或者开启了隐私模式！');
    } else {
        func();
    }
}

module.exports = {
    getCookie: storage.getCookie,
    setCookie: storage.setCookie,
    getStorage: storage.getStorage,
    setStorage: storage.setStorage,
    removeStorage: storage.removeStorage,
    clearStorage: storage.clearStorage
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*************************************************************
 *
 * 测试中的方法、类、对象都会放在这里面，并且不对外露出
 * 可以在控制台查看，相当于一个测试中的环境。
 * @description 暂时不引入单元测试框架，先手动测试，有问题的直接不露出
 * 
 *************************************************************/



(function(w) {
    var test = {
        queue: [], // 测试队列

        init: function(obj) {
            this.pushQueue(obj);
            console.log(w.test);
        },

        pushQueue: function(obj) {
            if (!w.test) {
                w.test = this;
            }
            this.queue.push(obj);
        },

        deleteUnit: function(obj) {
            var targetObj = obj.targetObj,
                funcName = obj.funcName;
            switch (targetObj.toLowerCase()) {
                case 'array':
                    delete Array.prototype[funcName];
                    break;
                default:
                    break;
            }
        }
    }

    module.exports = test;
})(window);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// tool.js是个关注DOM的框架，不过度封装，旨在提高性能效率
// 模块间可以相互调用，以提高效率，但这样的话就要保证每个模块的正确性。
// DOM modules：DOM、CSS、AJAX、Attribute、Event 
// 目标：tool.js可以定位成原生JavaScript的加强形式，可以针对原生对象或方法进行拓展。

/*************************************************************
 *
 * 打包入口文件，负责各个模块间的整合。
 * 
 *************************************************************/



(function(w) {
	var dom = __webpack_require__(3);
	var util = __webpack_require__(0);
	var storage = __webpack_require__(4);
	var bom = __webpack_require__(2);
	var array = __webpack_require__(1);

	var spaceName = typeof w.$ == 'undefined' ? '$' : 'tool';

	spaceName == 'tool' && console.warn('window.$命名空间已被使用，请用tool代替...');

	// 选择器 
	w[spaceName] = dom.ele;

	// 工具方法
	w[spaceName].dateFormat = util.dateFormat;
	w[spaceName].validate = util.validate;
	w[spaceName].trim = util.trim;

	// 本地存储
	w[spaceName].getCookie = storage.getCookie;
	w[spaceName].setCookie = storage.setCookie;
	w[spaceName].getStorage = storage.getStorage;
	w[spaceName].setStorage = storage.setStorage;
	w[spaceName].removeStorage = storage.removeStorage;
	w[spaceName].clearStorage = storage.clearStorage;

	// 浏览器处理
	w[spaceName].browserVersion = bom.browserVersion;
	w[spaceName].getQueryString = bom.getQueryString;
})(window);

/***/ })
/******/ ]);