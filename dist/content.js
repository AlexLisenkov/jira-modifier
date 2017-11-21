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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_issue_mutator_IssueMutator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_collapse_todo_CollapseTodo__ = __webpack_require__(7);



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
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TagList__ = __webpack_require__(3);


class TagController {
    static get tags() {
        return __WEBPACK_IMPORTED_MODULE_0__TagList__["a" /* default */];
    }
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
class Tag {
    constructor(tag, hexColor, imageUrl) {
        this._tag = tag;
        this._hexColor = hexColor;
        this._imageUrl = imageUrl;
    }
    get hexColor() {
        return this._hexColor;
    }
    set hexColor(hexColor) {
        this._hexColor = hexColor;
    }
    get imageUrl() {
        return this._imageUrl;
    }
    set imageUrl(imageUrl) {
        this._imageUrl = imageUrl;
    }
    get tag() {
        return this._tag;
    }
    set tag(tag) {
        this._tag = tag;
    }
    getFullImageTag() {
        return `<img src="${this.imageUrl}" class="alex-jira-img"/>`
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Tag);

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tags_TagController__ = __webpack_require__(2);


class IssueMutator {
    static getIssues() {
        return document.querySelectorAll('div.ghx-issue');
    }
    static getPool() {
        return document.querySelector('#ghx-pool');
    }
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
    static relocateAssignee(issue) {
        const assignee_image = issue.querySelector('.ghx-row.ghx-stat-2 span.ghx-field img');
        if( assignee_image )
            issue.insertAdjacentElement('afterbegin', assignee_image).classList.add(...["alex-jira-img", "avatar"]);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (IssueMutator);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_Button__ = __webpack_require__(8);


class CollapseTodo extends __WEBPACK_IMPORTED_MODULE_0__button_Button__["a" /* default */] {
    buttonText() {
        return "Alleen TODO";
    }
    handeClick(event) {
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
class Button {
    static getCompleteSprintButton() {
        return document.querySelector('#ghx-complete-sprint');
    }
    constructor() {
        let target = document.querySelector('#ghx-header');

        let config = { childList: true };
        let that = this;
        let observer = new MutationObserver((mutations) => {
             that.addButton();
        });
        observer.observe(target, config);
    }
    addButton() {
        const DOMbutton = this.button();
        Button.getCompleteSprintButton().insertAdjacentElement('beforebegin', DOMbutton);
        DOMbutton.addEventListener('click', this.handeClick);
    }
    buttonText() {
        return null;
    }
    buttonHtml() {
        return `<button class="aui-button">${this.buttonText()}</button>`;
    }
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
     * @param event
     */
    handeClick(event) {

    }

}

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2Q1NDdlZmUwNzQ4Yjc5ZDI2ZmQiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhZ3MvVGFnQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhZ3MvVGFnTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL3RhZ3MvVGFnLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvaXNzdWUtbXV0YXRvci9Jc3N1ZU11dGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jb2xsYXBzZS10b2RvL0NvbGxhcHNlVG9kby5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2J1dHRvbi9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQzdEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsQ0FBQyxJOzs7Ozs7Ozs7QUNkRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdFOzs7Ozs7OztBQzVCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRDs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTs7QUFFQSw4RDs7Ozs7Ozs7O0FDN0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1RTs7Ozs7Ozs7QUM3QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUU7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxrQkFBa0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGlFIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3ZDU0N2VmZTA3NDhiNzlkMjZmZCIsImltcG9ydCBJc3N1ZU11dGF0b3IgZnJvbSAnLi9tb2R1bGVzL2lzc3VlLW11dGF0b3IvSXNzdWVNdXRhdG9yJztcbmltcG9ydCBDb2xsYXBzZVRvZG8gZnJvbSAnLi9tb2R1bGVzL2NvbGxhcHNlLXRvZG8vQ29sbGFwc2VUb2RvJztcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIiAgICBfXyAgX18gICAgICAgICAgIF9fXyAgICAgICAgICAgX19fX19fICAgICAgICAgICBfXyBfXyAgICAgICAgICAgX19fX19fICAgICAgICAgICBfX19fICAgICAgICAgICAgX18gIF9fXyAgICAgICAgICAgX19fICAgICAgICAgICAgXyAgIF9fXFxuXCIgK1xuICAgICAgICBcIiAgIC8gLyAvIC8gICAgICAgICAgLyAgIHwgICAgICAgICAvIF9fX18vICAgICAgICAgIC8gLy9fLyAgICAgICAgICAvIF9fX18vICAgICAgICAgIC8gX18gXFxcXCAgICAgICAgICAvICB8LyAgLyAgICAgICAgICAvICAgfCAgICAgICAgICAvIHwgLyAvXFxuXCIgK1xuICAgICAgICBcIiAgLyAvXy8gLyAgICAgICAgICAvIC98IHwgICAgICAgIC8gLyAgICAgICAgICAgICAgLyAsPCAgICAgICAgICAgIC8gX18vICAgICAgICAgICAgLyAvXy8gLyAgICAgICAgIC8gL3xfLyAvICAgICAgICAgIC8gL3wgfCAgICAgICAgIC8gIHwvIC8gXFxuXCIgK1xuICAgICAgICBcIiAvIF9fICAvICAgICAgICAgIC8gX19fIHwgICAgICAgLyAvX19fICAgICAgICAgICAvIC98IHwgICAgICAgICAgLyAvX19fICAgICAgICAgICAvIF8sIF8vICAgICAgICAgLyAvICAvIC8gICAgICAgICAgLyBfX18gfCAgICAgICAgLyAvfCAgLyAgXFxuXCIgK1xuICAgICAgICBcIi9fLyAvXy8gICAgICAgICAgL18vICB8X3wgICAgICAgXFxcXF9fX18vICAgICAgICAgIC9fLyB8X3wgICAgICAgICAvX19fX18vICAgICAgICAgIC9fLyB8X3wgICAgICAgICAvXy8gIC9fLyAgICAgICAgICAvXy8gIHxffCAgICAgICAvXy8gfF8vICAgXFxuXCIgK1xuICAgICAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXG5cblxuICAgIG5ldyBJc3N1ZU11dGF0b3IoKTtcbiAgICBuZXcgQ29sbGFwc2VUb2RvKCk7XG59KCkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdGFncyBmcm9tICcuL1RhZ0xpc3QnO1xuXG5jbGFzcyBUYWdDb250cm9sbGVyIHtcbiAgICBzdGF0aWMgZ2V0IHRhZ3MoKSB7XG4gICAgICAgIHJldHVybiB0YWdzO1xuICAgIH1cbiAgICBzdGF0aWMgcmVuZGVySXNzdWUoaXNzdWUpIHtcbiAgICAgICAgbGV0IGhhc1RhZyA9IGZhbHNlO1xuICAgICAgICBsZXQgYWN0aXZlVGFnID0gbnVsbDtcbiAgICAgICAgbGV0IHN1bW1hcnkgPSBpc3N1ZS5xdWVyeVNlbGVjdG9yKCcuZ2h4LXN1bW1hcnknKTtcbiAgICAgICAgbGV0IGdyYWJiZXIgPSBpc3N1ZS5xdWVyeVNlbGVjdG9yKCcuZ2h4LWdyYWJiZXInKTtcblxuICAgICAgICBUYWdDb250cm9sbGVyLnRhZ3MuZm9yRWFjaCggKHRhZykgPT4ge1xuICAgICAgICAgICAgaGFzVGFnID0gKHN1bW1hcnkuaW5uZXJIVE1MLmluZGV4T2YodGFnLnRhZykgPj0gMCk7XG4gICAgICAgICAgICBpZiggaGFzVGFnICl7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFnID0gdGFnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYoIGFjdGl2ZVRhZyA9PT0gbnVsbCApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgc3VtbWFyeS5pbm5lckhUTUwgPSBzdW1tYXJ5LmlubmVySFRNTC5yZXBsYWNlKGFjdGl2ZVRhZy50YWcsIGFjdGl2ZVRhZy5nZXRGdWxsSW1hZ2VUYWcoKSk7XG4gICAgICAgIGdyYWJiZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYWN0aXZlVGFnLmhleENvbG9yO1xuXG4gICAgICAgIHJldHVybiBpc3N1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZ0NvbnRyb2xsZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2R1bGVzL3RhZ3MvVGFnQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGFnIGZyb20gJy4vVGFnJztcblxuY29uc3QgdGFncyA9IFtcbiAgICBuZXcgVGFnKCdbUE9dJywgJyNmNGIzNDInLCAnaHR0cHM6Ly9jYS5zbGFjay1lZGdlLmNvbS9UNTJOQVVFR0ctVTdDUjhDV0FLLWY2ZjFjMWFmMmU5OS03MicpLFxuICAgIG5ldyBUYWcoJ1tCRV0nLCAnIzc4N0NCNScsICdodHRwczovL2NkbjQuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9sb2dvcy0zLzI1Ni9sYXJhdmVsLTY0LnBuZycpLFxuICAgIG5ldyBUYWcoJ1tGRV0nLCAnI0U0NEQyNicsICdodHRwczovL2NkbjAuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9IVE1MNS8xMjgvSFRNTF9Mb2dvLnBuZycpLFxuICAgIG5ldyBUYWcoJ1tERVNJR05dJywgJyNGRUVEQUQnLCAnaHR0cHM6Ly9kbDIubWFjdXBkYXRlLmNvbS9pbWFnZXMvaWNvbnMyNTYvMzUyMzAucG5nP2Q9MTUwODI3MjgzOCcpLFxuICAgIG5ldyBUYWcoJ1tHSVRdJywgJyM0Mjg2ZjQnLCAnaHR0cHM6Ly9naXRsYWIuY29tL3VwbG9hZHMvLS9zeXN0ZW0vcHJvamVjdC9hdmF0YXIvMTMwODMvbG9nby1leHRyYS13aGl0ZXNwYWNlLnBuZycpLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgdGFncztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvdGFncy9UYWdMaXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFRhZyB7XG4gICAgY29uc3RydWN0b3IodGFnLCBoZXhDb2xvciwgaW1hZ2VVcmwpIHtcbiAgICAgICAgdGhpcy5fdGFnID0gdGFnO1xuICAgICAgICB0aGlzLl9oZXhDb2xvciA9IGhleENvbG9yO1xuICAgICAgICB0aGlzLl9pbWFnZVVybCA9IGltYWdlVXJsO1xuICAgIH1cbiAgICBnZXQgaGV4Q29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZXhDb2xvcjtcbiAgICB9XG4gICAgc2V0IGhleENvbG9yKGhleENvbG9yKSB7XG4gICAgICAgIHRoaXMuX2hleENvbG9yID0gaGV4Q29sb3I7XG4gICAgfVxuICAgIGdldCBpbWFnZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ltYWdlVXJsO1xuICAgIH1cbiAgICBzZXQgaW1hZ2VVcmwoaW1hZ2VVcmwpIHtcbiAgICAgICAgdGhpcy5faW1hZ2VVcmwgPSBpbWFnZVVybDtcbiAgICB9XG4gICAgZ2V0IHRhZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhZztcbiAgICB9XG4gICAgc2V0IHRhZyh0YWcpIHtcbiAgICAgICAgdGhpcy5fdGFnID0gdGFnO1xuICAgIH1cbiAgICBnZXRGdWxsSW1hZ2VUYWcoKSB7XG4gICAgICAgIHJldHVybiBgPGltZyBzcmM9XCIke3RoaXMuaW1hZ2VVcmx9XCIgY2xhc3M9XCJhbGV4LWppcmEtaW1nXCIvPmBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvdGFncy9UYWcuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRhZ0NvbnRyb2xsZXIgZnJvbSAnLi4vdGFncy9UYWdDb250cm9sbGVyJ1xuXG5jbGFzcyBJc3N1ZU11dGF0b3Ige1xuICAgIHN0YXRpYyBnZXRJc3N1ZXMoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuZ2h4LWlzc3VlJyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRQb29sKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2doeC1wb29sJyk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gSXNzdWVNdXRhdG9yLmdldFBvb2woKTtcblxuICAgICAgICBsZXQgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUgfTtcbiAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNzdWVzID0gSXNzdWVNdXRhdG9yLmdldElzc3VlcygpO1xuICAgICAgICAgICAgaXNzdWVzLmZvckVhY2goIChpc3N1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIFRhZ0NvbnRyb2xsZXIucmVuZGVySXNzdWUoaXNzdWUpO1xuICAgICAgICAgICAgICAgIElzc3VlTXV0YXRvci5yZWxvY2F0ZUFzc2lnbmVlKGlzc3VlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZyk7XG4gICAgfVxuICAgIHN0YXRpYyByZWxvY2F0ZUFzc2lnbmVlKGlzc3VlKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbmVlX2ltYWdlID0gaXNzdWUucXVlcnlTZWxlY3RvcignLmdoeC1yb3cuZ2h4LXN0YXQtMiBzcGFuLmdoeC1maWVsZCBpbWcnKTtcbiAgICAgICAgaWYoIGFzc2lnbmVlX2ltYWdlIClcbiAgICAgICAgICAgIGlzc3VlLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGFzc2lnbmVlX2ltYWdlKS5jbGFzc0xpc3QuYWRkKC4uLltcImFsZXgtamlyYS1pbWdcIiwgXCJhdmF0YXJcIl0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXNzdWVNdXRhdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbW9kdWxlcy9pc3N1ZS1tdXRhdG9yL0lzc3VlTXV0YXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbi9CdXR0b24nXG5cbmNsYXNzIENvbGxhcHNlVG9kbyBleHRlbmRzIEJ1dHRvbiB7XG4gICAgYnV0dG9uVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIFwiQWxsZWVuIFRPRE9cIjtcbiAgICB9XG4gICAgaGFuZGVDbGljayhldmVudCkge1xuICAgICAgICBsZXQgc3dpbWxhbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdoeC1zd2ltbGFuZScpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHN3aW1sYW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gc3dpbWxhbmVzW2ldO1xuICAgICAgICAgICAgaWYoIGN1cnJlbnQucXVlcnlTZWxlY3RvcignLmdoeC1zd2ltbGFuZS1oZWFkZXInKS5jbGFzc0xpc3QuY29udGFpbnMoJ2doeC1kb25lJykgKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2doeC1jbG9zZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdnaHgtY2xvc2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlVG9kbztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL21vZHVsZXMvY29sbGFwc2UtdG9kby9Db2xsYXBzZVRvZG8uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgQnV0dG9uIHtcbiAgICBzdGF0aWMgZ2V0Q29tcGxldGVTcHJpbnRCdXR0b24oKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2h4LWNvbXBsZXRlLXNwcmludCcpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaHgtaGVhZGVyJyk7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICAgICAgIHRoYXQuYWRkQnV0dG9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwgY29uZmlnKTtcbiAgICB9XG4gICAgYWRkQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBET01idXR0b24gPSB0aGlzLmJ1dHRvbigpO1xuICAgICAgICBCdXR0b24uZ2V0Q29tcGxldGVTcHJpbnRCdXR0b24oKS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgRE9NYnV0dG9uKTtcbiAgICAgICAgRE9NYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kZUNsaWNrKTtcbiAgICB9XG4gICAgYnV0dG9uVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGJ1dHRvbkh0bWwoKSB7XG4gICAgICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImF1aS1idXR0b25cIj4ke3RoaXMuYnV0dG9uVGV4dCgpfTwvYnV0dG9uPmA7XG4gICAgfVxuICAgIGJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmJ1dHRvblRleHQoKSk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhdWktYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgY2xpY2sgZXZlbnQgb2YgYnV0dG9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtFdmVudExpc3RlbmVyfVxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqL1xuICAgIGhhbmRlQ2xpY2soZXZlbnQpIHtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9tb2R1bGVzL2J1dHRvbi9CdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==