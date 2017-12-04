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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
        let target = document.querySelector('#ghx-modes-tools');

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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_issue_mutator_IssueMutatorController__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_collapse_todo_CollapseTodo__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_collapse_done_CollapseDone__ = __webpack_require__(8);




(function () {
    console.log("    __  __           ___           ______           __ __           ______           ____            __  ___           ___            _   __\n" +
        "   / / / /          /   |         / ____/          / //_/          / ____/          / __ \\          /  |/  /          /   |          / | / /\n" +
        "  / /_/ /          / /| |        / /              / ,<            / __/            / /_/ /         / /|_/ /          / /| |         /  |/ / \n" +
        " / __  /          / ___ |       / /___           / /| |          / /___           / _, _/         / /  / /          / ___ |        / /|  /  \n" +
        "/_/ /_/          /_/  |_|       \\____/          /_/ |_|         /_____/          /_/ |_|         /_/  /_/          /_/  |_|       /_/ |_/   \n" +
        "                                                                                                                                            ")
    new __WEBPACK_IMPORTED_MODULE_0__modules_issue_mutator_IssueMutatorController__["a" /* default */]();
    new __WEBPACK_IMPORTED_MODULE_1__modules_collapse_todo_CollapseTodo__["a" /* default */]();
    new __WEBPACK_IMPORTED_MODULE_2__modules_collapse_done_CollapseDone__["a" /* default */]();
}());

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IssueMutator__ = __webpack_require__(3);


class IssueMutatorController
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
        let target = IssueMutatorController.getPool();

        let config = { childList: true, attributes: true, subtree: true };
        let observer = new MutationObserver((mutations) => {
            const issues = IssueMutatorController.getIssues();
            issues.forEach( (issue) => {
                new __WEBPACK_IMPORTED_MODULE_0__IssueMutator__["a" /* default */](issue);
            });
        });
        observer.observe(target, config);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (IssueMutatorController);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tags_TagController__ = __webpack_require__(4);


class IssueMutator
{
    /**
     * Construct IssueMutator
     *
     * @param {Element} issue
     */
    constructor(issue) {
        this.issue = issue;
        __WEBPACK_IMPORTED_MODULE_0__tags_TagController__["a" /* default */].renderIssue(this.issue);
        this.relocateAssignee();
        this.observeForChanges();
    }

    /**
     * Relocate assigned person of issue
     *
     * @return {void}
     */
    relocateAssignee() {
        const assignee_image = this.issue.querySelector('.ghx-row.ghx-stat-2 span.ghx-field img');
        if( assignee_image )
            this.issue.insertAdjacentElement('afterbegin', assignee_image).classList.add(...["alex-jira-img", "avatar"]);
    }

    /**
     * Add MutationObserver to issue
     *
     * @return void
     */
    observeForChanges() {
        let config = { childList: true, attributes: true };
        let observer = new MutationObserver((mutations) => {
            __WEBPACK_IMPORTED_MODULE_0__tags_TagController__["a" /* default */].renderIssue(this.issue);
            this.relocateAssignee();
        });
        observer.observe(this.issue, config);
    }

    /**
     * Set issue dom element
     *
     * @param {Element} issue
     */
    set issue(issue) {
        this._issue = issue;
    }

    /**
     * Get issue dom element
     *
     * @return {Element} issue
     */
    get issue() {
        return this._issue;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (IssueMutator);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TagList__ = __webpack_require__(5);


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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Tag__ = __webpack_require__(6);


const tags = [
    new __WEBPACK_IMPORTED_MODULE_0__Tag__["a" /* default */]('[PO]', '#f4b342', 'https://ca.slack-edge.com/T52NAUEGG-U7CR8CWAK-f6f1c1af2e99-72'),
    new __WEBPACK_IMPORTED_MODULE_0__Tag__["a" /* default */]('[BE]', '#787CB5', 'https://cdn4.iconfinder.com/data/icons/logos-3/256/laravel-64.png'),
    new __WEBPACK_IMPORTED_MODULE_0__Tag__["a" /* default */]('[FE]', '#E44D26', 'https://cdn0.iconfinder.com/data/icons/HTML5/128/HTML_Logo.png'),
    new __WEBPACK_IMPORTED_MODULE_0__Tag__["a" /* default */]('[DESIGN]', '#FEEDAD', 'https://dl2.macupdate.com/images/icons256/35230.png?d=1508272838'),
    new __WEBPACK_IMPORTED_MODULE_0__Tag__["a" /* default */]('[GIT]', '#4286f4', 'https://gitlab.com/uploads/-/system/project/avatar/13083/logo-extra-whitespace.png'),
];

/* harmony default export */ __webpack_exports__["a"] = (tags);

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_Button__ = __webpack_require__(0);


class CollapseTodo extends __WEBPACK_IMPORTED_MODULE_0__button_Button__["a" /* default */]
{
    /**
     * Define button text
     *
     * @return {string}
     */
    buttonText() {
        return "TODO";
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_Button__ = __webpack_require__(0);


class CollapseDone extends __WEBPACK_IMPORTED_MODULE_0__button_Button__["a" /* default */]
{
    /**
     * Define button text
     *
     * @return {string}
     */
    buttonText() {
        return "DONE";
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
                current.classList.remove('ghx-closed');
            } else {
                current.classList.add('ghx-closed');
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (CollapseDone);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2FkNzI4NTE5NDU0OWQ0NTE3MDMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9idXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovLy8uL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9pc3N1ZS1tdXRhdG9yL0lzc3VlTXV0YXRvckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9pc3N1ZS1tdXRhdG9yL0lzc3VlTXV0YXRvci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhZ3MvVGFnQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhZ3MvVGFnTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhZ3MvVGFnLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY29sbGFwc2UtdG9kby9Db2xsYXBzZVRvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsYXBzZS1kb25lL0NvbGxhcHNlRG9uZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUU7Ozs7Ozs7O0FDaENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUUiLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdhZDcyODUxOTQ1NDlkNDUxNzAzIiwiY2xhc3MgQnV0dG9uXG57XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSAnQ29tcGxldGUgc3ByaW50JyBidXR0b25cbiAgICAgKiBVc2VkIGFzIHJlZmVyZW5jZSB0byBwbGFjZSB0aGUgYnV0dG9uIGluIHRoZSBjb3JyZWN0IHBvc2l0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb21wbGV0ZVNwcmludEJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaHgtY29tcGxldGUtc3ByaW50Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnV0dG9uIGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2h4LW1vZGVzLXRvb2xzJyk7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICAgICAgdGhhdC5hZGRCdXR0b24oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBidXR0b24gZWxlbWVudCB0byBkb21cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgYWRkQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBET01idXR0b24gPSB0aGlzLmJ1dHRvbigpO1xuICAgICAgICBCdXR0b24uZ2V0Q29tcGxldGVTcHJpbnRCdXR0b24oKS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgRE9NYnV0dG9uKTtcbiAgICAgICAgRE9NYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIGJ1dHRvbiB0ZXh0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgYnV0dG9uVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYnV0dG9uIEhUTUxcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBidXR0b25IdG1sKCkge1xuICAgICAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJhdWktYnV0dG9uXCI+JHt0aGlzLmJ1dHRvblRleHQoKX08L2J1dHRvbj5gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGJ1dHRvbiBFbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIGJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmJ1dHRvblRleHQoKSk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhdWktYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgY2xpY2sgZXZlbnQgb2YgYnV0dG9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtFdmVudExpc3RlbmVyfVxuICAgICAqIEBwYXJhbSB7RXZlbnRMaXN0ZW5lcn0gZXZlbnRcbiAgICAgKi9cbiAgICBoYW5kbGVDbGljayhldmVudCl7XG4gICAgICAgIC8vIHZvaWRcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvYnV0dG9uL0J1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSXNzdWVNdXRhdG9yQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvaXNzdWUtbXV0YXRvci9Jc3N1ZU11dGF0b3JDb250cm9sbGVyJztcbmltcG9ydCBDb2xsYXBzZVRvZG8gZnJvbSAnLi9tb2R1bGVzL2NvbGxhcHNlLXRvZG8vQ29sbGFwc2VUb2RvJztcbmltcG9ydCBDb2xsYXBzZURvbmUgZnJvbSAnLi9tb2R1bGVzL2NvbGxhcHNlLWRvbmUvQ29sbGFwc2VEb25lJztcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIiAgICBfXyAgX18gICAgICAgICAgIF9fXyAgICAgICAgICAgX19fX19fICAgICAgICAgICBfXyBfXyAgICAgICAgICAgX19fX19fICAgICAgICAgICBfX19fICAgICAgICAgICAgX18gIF9fXyAgICAgICAgICAgX19fICAgICAgICAgICAgXyAgIF9fXFxuXCIgK1xuICAgICAgICBcIiAgIC8gLyAvIC8gICAgICAgICAgLyAgIHwgICAgICAgICAvIF9fX18vICAgICAgICAgIC8gLy9fLyAgICAgICAgICAvIF9fX18vICAgICAgICAgIC8gX18gXFxcXCAgICAgICAgICAvICB8LyAgLyAgICAgICAgICAvICAgfCAgICAgICAgICAvIHwgLyAvXFxuXCIgK1xuICAgICAgICBcIiAgLyAvXy8gLyAgICAgICAgICAvIC98IHwgICAgICAgIC8gLyAgICAgICAgICAgICAgLyAsPCAgICAgICAgICAgIC8gX18vICAgICAgICAgICAgLyAvXy8gLyAgICAgICAgIC8gL3xfLyAvICAgICAgICAgIC8gL3wgfCAgICAgICAgIC8gIHwvIC8gXFxuXCIgK1xuICAgICAgICBcIiAvIF9fICAvICAgICAgICAgIC8gX19fIHwgICAgICAgLyAvX19fICAgICAgICAgICAvIC98IHwgICAgICAgICAgLyAvX19fICAgICAgICAgICAvIF8sIF8vICAgICAgICAgLyAvICAvIC8gICAgICAgICAgLyBfX18gfCAgICAgICAgLyAvfCAgLyAgXFxuXCIgK1xuICAgICAgICBcIi9fLyAvXy8gICAgICAgICAgL18vICB8X3wgICAgICAgXFxcXF9fX18vICAgICAgICAgIC9fLyB8X3wgICAgICAgICAvX19fX18vICAgICAgICAgIC9fLyB8X3wgICAgICAgICAvXy8gIC9fLyAgICAgICAgICAvXy8gIHxffCAgICAgICAvXy8gfF8vICAgXFxuXCIgK1xuICAgICAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgbmV3IElzc3VlTXV0YXRvckNvbnRyb2xsZXIoKTtcbiAgICBuZXcgQ29sbGFwc2VUb2RvKCk7XG4gICAgbmV3IENvbGxhcHNlRG9uZSgpO1xufSgpKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IElzc3VlTXV0YXRvciBmcm9tICcuL0lzc3VlTXV0YXRvcidcblxuY2xhc3MgSXNzdWVNdXRhdG9yQ29udHJvbGxlclxue1xuICAgIC8qKlxuICAgICAqIEdldCBpc3N1ZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SXNzdWVzKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmdoeC1pc3N1ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBwb29sIG9mIHN3aW1sYW5lc1xuICAgICAqXG4gICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UG9vbCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaHgtcG9vbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBJc3N1ZU11dGF0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IElzc3VlTXV0YXRvckNvbnRyb2xsZXIuZ2V0UG9vbCgpO1xuXG4gICAgICAgIGxldCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc3N1ZXMgPSBJc3N1ZU11dGF0b3JDb250cm9sbGVyLmdldElzc3VlcygpO1xuICAgICAgICAgICAgaXNzdWVzLmZvckVhY2goIChpc3N1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5ldyBJc3N1ZU11dGF0b3IoaXNzdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElzc3VlTXV0YXRvckNvbnRyb2xsZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2R1bGVzL2lzc3VlLW11dGF0b3IvSXNzdWVNdXRhdG9yQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGFnQ29udHJvbGxlciBmcm9tICcuLi90YWdzL1RhZ0NvbnRyb2xsZXInXG5cbmNsYXNzIElzc3VlTXV0YXRvclxue1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBJc3N1ZU11dGF0b3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gaXNzdWVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihpc3N1ZSkge1xuICAgICAgICB0aGlzLmlzc3VlID0gaXNzdWU7XG4gICAgICAgIFRhZ0NvbnRyb2xsZXIucmVuZGVySXNzdWUodGhpcy5pc3N1ZSk7XG4gICAgICAgIHRoaXMucmVsb2NhdGVBc3NpZ25lZSgpO1xuICAgICAgICB0aGlzLm9ic2VydmVGb3JDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVsb2NhdGUgYXNzaWduZWQgcGVyc29uIG9mIGlzc3VlXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbG9jYXRlQXNzaWduZWUoKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbmVlX2ltYWdlID0gdGhpcy5pc3N1ZS5xdWVyeVNlbGVjdG9yKCcuZ2h4LXJvdy5naHgtc3RhdC0yIHNwYW4uZ2h4LWZpZWxkIGltZycpO1xuICAgICAgICBpZiggYXNzaWduZWVfaW1hZ2UgKVxuICAgICAgICAgICAgdGhpcy5pc3N1ZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBhc3NpZ25lZV9pbWFnZSkuY2xhc3NMaXN0LmFkZCguLi5bXCJhbGV4LWppcmEtaW1nXCIsIFwiYXZhdGFyXCJdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgTXV0YXRpb25PYnNlcnZlciB0byBpc3N1ZVxuICAgICAqXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgb2JzZXJ2ZUZvckNoYW5nZXMoKSB7XG4gICAgICAgIGxldCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgYXR0cmlidXRlczogdHJ1ZSB9O1xuICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICBUYWdDb250cm9sbGVyLnJlbmRlcklzc3VlKHRoaXMuaXNzdWUpO1xuICAgICAgICAgICAgdGhpcy5yZWxvY2F0ZUFzc2lnbmVlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuaXNzdWUsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGlzc3VlIGRvbSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGlzc3VlXG4gICAgICovXG4gICAgc2V0IGlzc3VlKGlzc3VlKSB7XG4gICAgICAgIHRoaXMuX2lzc3VlID0gaXNzdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGlzc3VlIGRvbSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSBpc3N1ZVxuICAgICAqL1xuICAgIGdldCBpc3N1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzc3VlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXNzdWVNdXRhdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy9pc3N1ZS1tdXRhdG9yL0lzc3VlTXV0YXRvci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdGFncyBmcm9tICcuL1RhZ0xpc3QnO1xuXG5jbGFzcyBUYWdDb250cm9sbGVyXG57XG4gICAgLyoqXG4gICAgICogR2V0IGFycmF5IG9mIHRhZ3MgZGVmaW5lZCBpbiBUYWdMaXN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IHRhZ3MoKSB7XG4gICAgICAgIHJldHVybiB0YWdzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgaXNzdWUgdG8gZGVzaXJlZCBsYXlvdXRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gaXNzdWVcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fVxuICAgICAqL1xuICAgIHN0YXRpYyByZW5kZXJJc3N1ZShpc3N1ZSkge1xuICAgICAgICBsZXQgaGFzVGFnID0gZmFsc2U7XG4gICAgICAgIGxldCBhY3RpdmVUYWcgPSBudWxsO1xuICAgICAgICBsZXQgc3VtbWFyeSA9IGlzc3VlLnF1ZXJ5U2VsZWN0b3IoJy5naHgtc3VtbWFyeScpO1xuICAgICAgICBsZXQgZ3JhYmJlciA9IGlzc3VlLnF1ZXJ5U2VsZWN0b3IoJy5naHgtZ3JhYmJlcicpO1xuXG4gICAgICAgIFRhZ0NvbnRyb2xsZXIudGFncy5mb3JFYWNoKCAodGFnKSA9PiB7XG4gICAgICAgICAgICBoYXNUYWcgPSAoc3VtbWFyeS5pbm5lckhUTUwuaW5kZXhPZih0YWcudGFnKSA+PSAwKTtcbiAgICAgICAgICAgIGlmKCBoYXNUYWcgKXtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWcgPSB0YWc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiggYWN0aXZlVGFnID09PSBudWxsIClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBzdW1tYXJ5LmlubmVySFRNTCA9IHN1bW1hcnkuaW5uZXJIVE1MLnJlcGxhY2UoYWN0aXZlVGFnLnRhZywgYWN0aXZlVGFnLmdldEZ1bGxJbWFnZVRhZygpKTtcbiAgICAgICAgZ3JhYmJlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhY3RpdmVUYWcuaGV4Q29sb3I7XG5cbiAgICAgICAgcmV0dXJuIGlzc3VlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnQ29udHJvbGxlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvdGFncy9UYWdDb250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUYWcgZnJvbSAnLi9UYWcnO1xuXG5jb25zdCB0YWdzID0gW1xuICAgIG5ldyBUYWcoJ1tQT10nLCAnI2Y0YjM0MicsICdodHRwczovL2NhLnNsYWNrLWVkZ2UuY29tL1Q1Mk5BVUVHRy1VN0NSOENXQUstZjZmMWMxYWYyZTk5LTcyJyksXG4gICAgbmV3IFRhZygnW0JFXScsICcjNzg3Q0I1JywgJ2h0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2xvZ29zLTMvMjU2L2xhcmF2ZWwtNjQucG5nJyksXG4gICAgbmV3IFRhZygnW0ZFXScsICcjRTQ0RDI2JywgJ2h0dHBzOi8vY2RuMC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL0hUTUw1LzEyOC9IVE1MX0xvZ28ucG5nJyksXG4gICAgbmV3IFRhZygnW0RFU0lHTl0nLCAnI0ZFRURBRCcsICdodHRwczovL2RsMi5tYWN1cGRhdGUuY29tL2ltYWdlcy9pY29uczI1Ni8zNTIzMC5wbmc/ZD0xNTA4MjcyODM4JyksXG4gICAgbmV3IFRhZygnW0dJVF0nLCAnIzQyODZmNCcsICdodHRwczovL2dpdGxhYi5jb20vdXBsb2Fkcy8tL3N5c3RlbS9wcm9qZWN0L2F2YXRhci8xMzA4My9sb2dvLWV4dHJhLXdoaXRlc3BhY2UucG5nJyksXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB0YWdzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy90YWdzL1RhZ0xpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgVGFnXG57XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IFRhZ1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhDb2xvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZVVybFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRhZywgaGV4Q29sb3IsIGltYWdlVXJsKSB7XG4gICAgICAgIHRoaXMuX3RhZyA9IHRhZztcbiAgICAgICAgdGhpcy5faGV4Q29sb3IgPSBoZXhDb2xvcjtcbiAgICAgICAgdGhpcy5faW1hZ2VVcmwgPSBpbWFnZVVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IGhleENvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGV4Q29sb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhleENvbG9yXG4gICAgICovXG4gICAgc2V0IGhleENvbG9yKGhleENvbG9yKSB7XG4gICAgICAgIHRoaXMuX2hleENvbG9yID0gaGV4Q29sb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldCBpbWFnZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlVXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZVVybFxuICAgICAqL1xuICAgIHNldCBpbWFnZVVybChpbWFnZVVybCkge1xuICAgICAgICB0aGlzLl9pbWFnZVVybCA9IGltYWdlVXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgdGFnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAgICAgKi9cbiAgICBzZXQgdGFnKHRhZykge1xuICAgICAgICB0aGlzLl90YWcgPSB0YWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZSBhIHRleHR1YWwgaW1hZ2UgdGFnIGZyb20gdGhlIGltYWdlIHVybFxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEZ1bGxJbWFnZVRhZygpIHtcbiAgICAgICAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7dGhpcy5pbWFnZVVybH1cIiBjbGFzcz1cImFsZXgtamlyYS1pbWdcIi8+YFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy90YWdzL1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CdXR0b24nXG5cbmNsYXNzIENvbGxhcHNlVG9kbyBleHRlbmRzIEJ1dHRvblxue1xuICAgIC8qKlxuICAgICAqIERlZmluZSBidXR0b24gdGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGJ1dHRvblRleHQoKSB7XG4gICAgICAgIHJldHVybiBcIlRPRE9cIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgY2xpY2sgZXZlbnQgb2YgYnV0dG9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtFdmVudExpc3RlbmVyfVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGxldCBzd2ltbGFuZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2h4LXN3aW1sYW5lJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gc3dpbWxhbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBzd2ltbGFuZXNbaV07XG4gICAgICAgICAgICBpZiggY3VycmVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LXN3aW1sYW5lLWhlYWRlcicpLmNsYXNzTGlzdC5jb250YWlucygnZ2h4LWRvbmUnKSApe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LmFkZCgnZ2h4LWNsb3NlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2doeC1jbG9zZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VUb2RvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy9jb2xsYXBzZS10b2RvL0NvbGxhcHNlVG9kby5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CdXR0b24nXG5cbmNsYXNzIENvbGxhcHNlRG9uZSBleHRlbmRzIEJ1dHRvblxue1xuICAgIC8qKlxuICAgICAqIERlZmluZSBidXR0b24gdGV4dFxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGJ1dHRvblRleHQoKSB7XG4gICAgICAgIHJldHVybiBcIkRPTkVcIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgY2xpY2sgZXZlbnQgb2YgYnV0dG9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtFdmVudExpc3RlbmVyfVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGxldCBzd2ltbGFuZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2h4LXN3aW1sYW5lJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gc3dpbWxhbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBzd2ltbGFuZXNbaV07XG4gICAgICAgICAgICBpZiggY3VycmVudC5xdWVyeVNlbGVjdG9yKCcuZ2h4LXN3aW1sYW5lLWhlYWRlcicpLmNsYXNzTGlzdC5jb250YWlucygnZ2h4LWRvbmUnKSApe1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ2h4LWNsb3NlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2doeC1jbG9zZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VEb25lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy9jb2xsYXBzZS1kb25lL0NvbGxhcHNlRG9uZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9