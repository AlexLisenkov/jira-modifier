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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_issue_mutator_IssueMutator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_collapse_todo_CollapseTodo__ = __webpack_require__(5);



(function () {
    console.log("    __  __           ___           ______           __ __           ______           ____            __  ___           ___            _   __\n" +
        "   / / / /          /   |         / ____/          / //_/          / ____/          / __ \\          /  |/  /          /   |          / | / /\n" +
        "  / /_/ /          / /| |        / /              / ,<            / __/            / /_/ /         / /|_/ /          / /| |         /  |/ / \n" +
        " / __  /          / ___ |       / /___           / /| |          / /___           / _, _/         / /  / /          / ___ |        / /|  /  \n" +
        "/_/ /_/          /_/  |_|       \\____/          /_/ |_|         /_____/          /_/ |_|         /_/  /_/          /_/  |_|       /_/ |_/   \n" +
        "                                                                                                                                            ")
    new __WEBPACK_IMPORTED_MODULE_0__modules_issue_mutator_IssueMutator__["a" /* default */]();
    new __WEBPACK_IMPORTED_MODULE_1__modules_collapse_todo_CollapseTodo__["a" /* default */]();
}());

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tags_TagController__ = __webpack_require__(2);


class IssueMutator
{
    /**
     * Get issue elements
     *
     * @return {Element}
     */
    static getIssues() {
        return document.querySelectorAll('div.ghx-issue');
    }

    /**
     * Get pool of swimlanes
     *
     * @return {Element}
     */
    static getPool() {
        return document.querySelector('#ghx-pool');
    }

    /**
     * Construct IssueMutator
     */
    constructor() {
        let target = IssueMutator.getPool();

        let config = { childList: true };
        let observer = new MutationObserver((mutations) => {
            const issues = IssueMutator.getIssues();
            issues.forEach( (issue) => {
                __WEBPACK_IMPORTED_MODULE_0__tags_TagController__["a" /* default */].renderIssue(issue);
                IssueMutator.relocateAssignee(issue);
            });
        });
        observer.observe(target, config);
    }

    /**
     * Relocate assigned person of issue
     *
     * @return {void}
     */
    static relocateAssignee(issue) {
        const assignee_image = issue.querySelector('.ghx-row.ghx-stat-2 span.ghx-field img');
        if( assignee_image )
            issue.insertAdjacentElement('afterbegin', assignee_image).classList.add(...["alex-jira-img", "avatar"]);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (IssueMutator);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TagList__ = __webpack_require__(3);


class TagController
{
    /**
     * Get array of tags defined in TagList
     *
     * @return {Array}
     */
    static get tags() {
        return __WEBPACK_IMPORTED_MODULE_0__TagList__["a" /* default */];
    }

    /**
     * Render the issue to desired layout
     *
     * @param {Element} issue
     * @return {Element}
     */
    static renderIssue(issue) {
        let hasTag = false;
        let activeTag = null;
        let summary = issue.querySelector('.ghx-summary');
        let grabber = issue.querySelector('.ghx-grabber');

        TagController.tags.forEach( (tag) => {
            hasTag = (summary.innerHTML.indexOf(tag.tag) >= 0);
            if( hasTag ){
                activeTag = tag;
            }
        });
        if( activeTag === null )
            return;

        summary.innerHTML = summary.innerHTML.replace(activeTag.tag, activeTag.getFullImageTag());
        grabber.style.backgroundColor = activeTag.hexColor;

        return issue;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (TagController);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tag__ = __webpack_require__(4);


const tags = [
    new __WEBPACK_IMPORTED_MODULE_0__Tag__["a" /* default */]('[PO]', '#f4b342', 'https://ca.slack-edge.com/T52NAUEGG-U7CR8CWAK-f6f1c1af2e99-72'),
    new __WEBPACK_IMPORTED_MODULE_0__Tag__["a" /* default */]('[BE]', '#787CB5', 'https://cdn4.iconfinder.com/data/icons/logos-3/256/laravel-64.png'),
    new __WEBPACK_IMPORTED_MODULE_0__Tag__["a" /* default */]('[FE]', '#E44D26', 'https://cdn0.iconfinder.com/data/icons/HTML5/128/HTML_Logo.png'),
    new __WEBPACK_IMPORTED_MODULE_0__Tag__["a" /* default */]('[DESIGN]', '#FEEDAD', 'https://dl2.macupdate.com/images/icons256/35230.png?d=1508272838'),
    new __WEBPACK_IMPORTED_MODULE_0__Tag__["a" /* default */]('[GIT]', '#4286f4', 'https://gitlab.com/uploads/-/system/project/avatar/13083/logo-extra-whitespace.png'),
];

/* harmony default export */ __webpack_exports__["a"] = (tags);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Tag
{
    /**
     * Construct Tag
     *
     * @param {string} tag
     * @param {string} hexColor
     * @param {string} imageUrl
     */
    constructor(tag, hexColor, imageUrl) {
        this._tag = tag;
        this._hexColor = hexColor;
        this._imageUrl = imageUrl;
    }

    /**
     * @return {string}
     */
    get hexColor() {
        return this._hexColor;
    }

    /**
     * @param {string} hexColor
     */
    set hexColor(hexColor) {
        this._hexColor = hexColor;
    }

    /**
     * @return {string}
     */
    get imageUrl() {
        return this._imageUrl;
    }

    /**
     * @param {string} imageUrl
     */
    set imageUrl(imageUrl) {
        this._imageUrl = imageUrl;
    }

    /**
     * @return {string}
     */
    get tag() {
        return this._tag;
    }

    /**
     * @param {string} tag
     */
    set tag(tag) {
        this._tag = tag;
    }

    /**
     * Make a textual image tag from the image url
     *
     * @return {string}
     */
    getFullImageTag() {
        return `<img src="${this.imageUrl}" class="alex-jira-img"/>`
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Tag);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_Button__ = __webpack_require__(6);


class CollapseTodo extends __WEBPACK_IMPORTED_MODULE_0__button_Button__["a" /* default */]
{
    /**
     * Define button text
     *
     * @return {string}
     */
    buttonText() {
        return "Alleen TODO";
    }

    /**
     * Handle click event of button
     *
     * @return {EventListener}
     * @param event
     */
    handleClick(event) {
        let swimlanes = document.querySelectorAll('.ghx-swimlane');
        for (let i = 0, l = swimlanes.length; i < l; i++) {
            let current = swimlanes[i];
            if( current.querySelector('.ghx-swimlane-header').classList.contains('ghx-done') ){
                current.classList.add('ghx-closed');
            } else {
                current.classList.remove('ghx-closed');
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (CollapseTodo);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Button
{
    /**
     * Get the 'Complete sprint' button
     * Used as reference to place the button in the correct position
     *
     * @return {Element}
     */
    static getCompleteSprintButton() {
        return document.querySelector('#ghx-complete-sprint');
    }

    /**
     * Button constructor
     */
    constructor() {
        let target = document.querySelector('#ghx-header');

        let config = { childList: true };
        let that = this;
        let observer = new MutationObserver((mutations) => {
             that.addButton();
        });
        observer.observe(target, config);
    }

    /**
     * Add button element to dom
     *
     * @return {void}
     */
    addButton() {
        const DOMbutton = this.button();
        Button.getCompleteSprintButton().insertAdjacentElement('beforebegin', DOMbutton);
        DOMbutton.addEventListener('click', this.handleClick);
    }

    /**
     * Define button text
     *
     * @return {string}
     */
    buttonText() {
        return null;
    }

    /**
     * Generate button HTML
     *
     * @return {string}
     */
    buttonHtml() {
        return `<button class="aui-button">${this.buttonText()}</button>`;
    }

    /**
     * Generate button Element
     *
     * @return {Element}
     */
    button() {
        const button = document.createElement('button');
        const content = document.createTextNode(this.buttonText());
        button.classList.add('aui-button');
        button.appendChild(content);
        return button;
    }

    /**
     * Handle click event of button
     *
     * @return {EventListener}
     * @param {EventListener} event
     */
    handleClick(event){
        // void
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjJjNDkwMjczMTczNjc0YWYxMWYiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2lzc3VlLW11dGF0b3IvSXNzdWVNdXRhdG9yLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFncy9UYWdDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFncy9UYWdMaXN0LmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvdGFncy9UYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsYXBzZS10b2RvL0NvbGxhcHNlVG9kby5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2J1dHRvbi9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQzdEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSTs7Ozs7Ozs7QUNaRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1RTs7Ozs7Ozs7QUNuREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0U7Ozs7Ozs7O0FDekNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEOzs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7O0FBRUEsOEQ7Ozs7Ozs7O0FDbkVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUU7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsNkNBQTZDLGtCQUFrQjtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUUiLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIyYzQ5MDI3MzE3MzY3NGFmMTFmIiwiaW1wb3J0IElzc3VlTXV0YXRvciBmcm9tICcuL21vZHVsZXMvaXNzdWUtbXV0YXRvci9Jc3N1ZU11dGF0b3InO1xuaW1wb3J0IENvbGxhcHNlVG9kbyBmcm9tICcuL21vZHVsZXMvY29sbGFwc2UtdG9kby9Db2xsYXBzZVRvZG8nO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiICAgIF9fICBfXyAgICAgICAgICAgX19fICAgICAgICAgICBfX19fX18gICAgICAgICAgIF9fIF9fICAgICAgICAgICBfX19fX18gICAgICAgICAgIF9fX18gICAgICAgICAgICBfXyAgX19fICAgICAgICAgICBfX18gICAgICAgICAgICBfICAgX19cXG5cIiArXG4gICAgICAgIFwiICAgLyAvIC8gLyAgICAgICAgICAvICAgfCAgICAgICAgIC8gX19fXy8gICAgICAgICAgLyAvL18vICAgICAgICAgIC8gX19fXy8gICAgICAgICAgLyBfXyBcXFxcICAgICAgICAgIC8gIHwvICAvICAgICAgICAgIC8gICB8ICAgICAgICAgIC8gfCAvIC9cXG5cIiArXG4gICAgICAgIFwiICAvIC9fLyAvICAgICAgICAgIC8gL3wgfCAgICAgICAgLyAvICAgICAgICAgICAgICAvICw8ICAgICAgICAgICAgLyBfXy8gICAgICAgICAgICAvIC9fLyAvICAgICAgICAgLyAvfF8vIC8gICAgICAgICAgLyAvfCB8ICAgICAgICAgLyAgfC8gLyBcXG5cIiArXG4gICAgICAgIFwiIC8gX18gIC8gICAgICAgICAgLyBfX18gfCAgICAgICAvIC9fX18gICAgICAgICAgIC8gL3wgfCAgICAgICAgICAvIC9fX18gICAgICAgICAgIC8gXywgXy8gICAgICAgICAvIC8gIC8gLyAgICAgICAgICAvIF9fXyB8ICAgICAgICAvIC98ICAvICBcXG5cIiArXG4gICAgICAgIFwiL18vIC9fLyAgICAgICAgICAvXy8gIHxffCAgICAgICBcXFxcX19fXy8gICAgICAgICAgL18vIHxffCAgICAgICAgIC9fX19fXy8gICAgICAgICAgL18vIHxffCAgICAgICAgIC9fLyAgL18vICAgICAgICAgIC9fLyAgfF98ICAgICAgIC9fLyB8Xy8gICBcXG5cIiArXG4gICAgICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcbiAgICBuZXcgSXNzdWVNdXRhdG9yKCk7XG4gICAgbmV3IENvbGxhcHNlVG9kbygpO1xufSgpKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRhZ0NvbnRyb2xsZXIgZnJvbSAnLi4vdGFncy9UYWdDb250cm9sbGVyJ1xuXG5jbGFzcyBJc3N1ZU11dGF0b3JcbntcbiAgICAvKipcbiAgICAgKiBHZXQgaXNzdWUgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgc3RhdGljIGdldElzc3VlcygpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5naHgtaXNzdWUnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcG9vbCBvZiBzd2ltbGFuZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgc3RhdGljIGdldFBvb2woKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2h4LXBvb2wnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgSXNzdWVNdXRhdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBJc3N1ZU11dGF0b3IuZ2V0UG9vbCgpO1xuXG4gICAgICAgIGxldCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSB9O1xuICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc3N1ZXMgPSBJc3N1ZU11dGF0b3IuZ2V0SXNzdWVzKCk7XG4gICAgICAgICAgICBpc3N1ZXMuZm9yRWFjaCggKGlzc3VlKSA9PiB7XG4gICAgICAgICAgICAgICAgVGFnQ29udHJvbGxlci5yZW5kZXJJc3N1ZShpc3N1ZSk7XG4gICAgICAgICAgICAgICAgSXNzdWVNdXRhdG9yLnJlbG9jYXRlQXNzaWduZWUoaXNzdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWxvY2F0ZSBhc3NpZ25lZCBwZXJzb24gb2YgaXNzdWVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc3RhdGljIHJlbG9jYXRlQXNzaWduZWUoaXNzdWUpIHtcbiAgICAgICAgY29uc3QgYXNzaWduZWVfaW1hZ2UgPSBpc3N1ZS5xdWVyeVNlbGVjdG9yKCcuZ2h4LXJvdy5naHgtc3RhdC0yIHNwYW4uZ2h4LWZpZWxkIGltZycpO1xuICAgICAgICBpZiggYXNzaWduZWVfaW1hZ2UgKVxuICAgICAgICAgICAgaXNzdWUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgYXNzaWduZWVfaW1hZ2UpLmNsYXNzTGlzdC5hZGQoLi4uW1wiYWxleC1qaXJhLWltZ1wiLCBcImF2YXRhclwiXSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJc3N1ZU11dGF0b3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2R1bGVzL2lzc3VlLW11dGF0b3IvSXNzdWVNdXRhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB0YWdzIGZyb20gJy4vVGFnTGlzdCc7XG5cbmNsYXNzIFRhZ0NvbnRyb2xsZXJcbntcbiAgICAvKipcbiAgICAgKiBHZXQgYXJyYXkgb2YgdGFncyBkZWZpbmVkIGluIFRhZ0xpc3RcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgdGFncygpIHtcbiAgICAgICAgcmV0dXJuIHRhZ3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBpc3N1ZSB0byBkZXNpcmVkIGxheW91dFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBpc3N1ZVxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgc3RhdGljIHJlbmRlcklzc3VlKGlzc3VlKSB7XG4gICAgICAgIGxldCBoYXNUYWcgPSBmYWxzZTtcbiAgICAgICAgbGV0IGFjdGl2ZVRhZyA9IG51bGw7XG4gICAgICAgIGxldCBzdW1tYXJ5ID0gaXNzdWUucXVlcnlTZWxlY3RvcignLmdoeC1zdW1tYXJ5Jyk7XG4gICAgICAgIGxldCBncmFiYmVyID0gaXNzdWUucXVlcnlTZWxlY3RvcignLmdoeC1ncmFiYmVyJyk7XG5cbiAgICAgICAgVGFnQ29udHJvbGxlci50YWdzLmZvckVhY2goICh0YWcpID0+IHtcbiAgICAgICAgICAgIGhhc1RhZyA9IChzdW1tYXJ5LmlubmVySFRNTC5pbmRleE9mKHRhZy50YWcpID49IDApO1xuICAgICAgICAgICAgaWYoIGhhc1RhZyApe1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhZyA9IHRhZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKCBhY3RpdmVUYWcgPT09IG51bGwgKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIHN1bW1hcnkuaW5uZXJIVE1MID0gc3VtbWFyeS5pbm5lckhUTUwucmVwbGFjZShhY3RpdmVUYWcudGFnLCBhY3RpdmVUYWcuZ2V0RnVsbEltYWdlVGFnKCkpO1xuICAgICAgICBncmFiYmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGFjdGl2ZVRhZy5oZXhDb2xvcjtcblxuICAgICAgICByZXR1cm4gaXNzdWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWdDb250cm9sbGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy90YWdzL1RhZ0NvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRhZyBmcm9tICcuL1RhZyc7XG5cbmNvbnN0IHRhZ3MgPSBbXG4gICAgbmV3IFRhZygnW1BPXScsICcjZjRiMzQyJywgJ2h0dHBzOi8vY2Euc2xhY2stZWRnZS5jb20vVDUyTkFVRUdHLVU3Q1I4Q1dBSy1mNmYxYzFhZjJlOTktNzInKSxcbiAgICBuZXcgVGFnKCdbQkVdJywgJyM3ODdDQjUnLCAnaHR0cHM6Ly9jZG40Lmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvbG9nb3MtMy8yNTYvbGFyYXZlbC02NC5wbmcnKSxcbiAgICBuZXcgVGFnKCdbRkVdJywgJyNFNDREMjYnLCAnaHR0cHM6Ly9jZG4wLmljb25maW5kZXIuY29tL2RhdGEvaWNvbnMvSFRNTDUvMTI4L0hUTUxfTG9nby5wbmcnKSxcbiAgICBuZXcgVGFnKCdbREVTSUdOXScsICcjRkVFREFEJywgJ2h0dHBzOi8vZGwyLm1hY3VwZGF0ZS5jb20vaW1hZ2VzL2ljb25zMjU2LzM1MjMwLnBuZz9kPTE1MDgyNzI4MzgnKSxcbiAgICBuZXcgVGFnKCdbR0lUXScsICcjNDI4NmY0JywgJ2h0dHBzOi8vZ2l0bGFiLmNvbS91cGxvYWRzLy0vc3lzdGVtL3Byb2plY3QvYXZhdGFyLzEzMDgzL2xvZ28tZXh0cmEtd2hpdGVzcGFjZS5wbmcnKSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHRhZ3M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2R1bGVzL3RhZ3MvVGFnTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBUYWdcbntcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgVGFnXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhleENvbG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlVXJsXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodGFnLCBoZXhDb2xvciwgaW1hZ2VVcmwpIHtcbiAgICAgICAgdGhpcy5fdGFnID0gdGFnO1xuICAgICAgICB0aGlzLl9oZXhDb2xvciA9IGhleENvbG9yO1xuICAgICAgICB0aGlzLl9pbWFnZVVybCA9IGltYWdlVXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgaGV4Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZXhDb2xvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4Q29sb3JcbiAgICAgKi9cbiAgICBzZXQgaGV4Q29sb3IoaGV4Q29sb3IpIHtcbiAgICAgICAgdGhpcy5faGV4Q29sb3IgPSBoZXhDb2xvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGltYWdlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW1hZ2VVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlVXJsXG4gICAgICovXG4gICAgc2V0IGltYWdlVXJsKGltYWdlVXJsKSB7XG4gICAgICAgIHRoaXMuX2ltYWdlVXJsID0gaW1hZ2VVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCB0YWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgICAqL1xuICAgIHNldCB0YWcodGFnKSB7XG4gICAgICAgIHRoaXMuX3RhZyA9IHRhZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGEgdGV4dHVhbCBpbWFnZSB0YWcgZnJvbSB0aGUgaW1hZ2UgdXJsXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RnVsbEltYWdlVGFnKCkge1xuICAgICAgICByZXR1cm4gYDxpbWcgc3JjPVwiJHt0aGlzLmltYWdlVXJsfVwiIGNsYXNzPVwiYWxleC1qaXJhLWltZ1wiLz5gXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2R1bGVzL3RhZ3MvVGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbidcblxuY2xhc3MgQ29sbGFwc2VUb2RvIGV4dGVuZHMgQnV0dG9uXG57XG4gICAgLyoqXG4gICAgICogRGVmaW5lIGJ1dHRvbiB0ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgYnV0dG9uVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIFwiQWxsZWVuIFRPRE9cIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgY2xpY2sgZXZlbnQgb2YgYnV0dG9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtFdmVudExpc3RlbmVyfVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGxldCBzd2ltbGFuZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2h4LXN3aW1sYW5lJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gc3dpbWxhbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBzd2ltbGFuZXNbaV07XG4gICAgICAgICAgICBpZiggY3VycmVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LXN3aW1sYW5lLWhlYWRlcicpLmNsYXNzTGlzdC5jb250YWlucygnZ2h4LWRvbmUnKSApe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnZ2h4LWNsb3NlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2doeC1jbG9zZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VUb2RvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy9jb2xsYXBzZS10b2RvL0NvbGxhcHNlVG9kby5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBCdXR0b25cbntcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlICdDb21wbGV0ZSBzcHJpbnQnIGJ1dHRvblxuICAgICAqIFVzZWQgYXMgcmVmZXJlbmNlIHRvIHBsYWNlIHRoZSBidXR0b24gaW4gdGhlIGNvcnJlY3QgcG9zaXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICovXG4gICAgc3RhdGljIGdldENvbXBsZXRlU3ByaW50QnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2doeC1jb21wbGV0ZS1zcHJpbnQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdXR0b24gY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaHgtaGVhZGVyJyk7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICAgICAgIHRoYXQuYWRkQnV0dG9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYnV0dG9uIGVsZW1lbnQgdG8gZG9tXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIGFkZEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgRE9NYnV0dG9uID0gdGhpcy5idXR0b24oKTtcbiAgICAgICAgQnV0dG9uLmdldENvbXBsZXRlU3ByaW50QnV0dG9uKCkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIERPTWJ1dHRvbik7XG4gICAgICAgIERPTWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSBidXR0b24gdGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGJ1dHRvblRleHQoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGJ1dHRvbiBIVE1MXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgYnV0dG9uSHRtbCgpIHtcbiAgICAgICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYXVpLWJ1dHRvblwiPiR7dGhpcy5idXR0b25UZXh0KCl9PC9idXR0b24+YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBidXR0b24gRWxlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBidXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5idXR0b25UZXh0KCkpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYXVpLWJ1dHRvbicpO1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNsaWNrIGV2ZW50IG9mIGJ1dHRvblxuICAgICAqXG4gICAgICogQHJldHVybiB7RXZlbnRMaXN0ZW5lcn1cbiAgICAgKiBAcGFyYW0ge0V2ZW50TGlzdGVuZXJ9IGV2ZW50XG4gICAgICovXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQpe1xuICAgICAgICAvLyB2b2lkXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2R1bGVzL2J1dHRvbi9CdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==