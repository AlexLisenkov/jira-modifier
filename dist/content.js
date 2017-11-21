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
/***/ (function(module, exports) {

var find_replace = [
    [
        '[PO]',
        'https://ca.slack-edge.com/T52NAUEGG-U7CR8CWAK-f6f1c1af2e99-72',
        '#f4b342'
    ],
    [
        '[BE]',
        'https://cdn4.iconfinder.com/data/icons/logos-3/256/laravel-64.png',
        '#787CB5'
    ],
    [
        '[FE]',
        'https://cdn0.iconfinder.com/data/icons/HTML5/128/HTML_Logo.png',
        '#E44D26'
    ],
    [
        '[DESIGN]',
        'https://dl2.macupdate.com/images/icons256/35230.png?d=1508272838',
        '#FEEDAD'
    ],
    [
        '[GIT]',
        'https://gitlab.com/uploads/-/system/project/avatar/13083/logo-extra-whitespace.png',
        '#4286f4'
    ]
];


function checkForStories()
{
    var stories = document.querySelectorAll('section.ghx-summary');

    for (var i = 0, l = stories.length; i < l; i++) {
        for (var j = 0, p = find_replace.length; j < p; j++) {
            var parent = jQuery(stories[i]).parent();
            var assigned = parent.find('.ghx-row.ghx-stat-2 span.ghx-field img');
            if( assigned ){
                assigned.addClass('alex-jira-img');
                parent.prepend(assigned);
            }

            parent.find('.ghx-stat-fields').hide();
            var content = stories[i].innerHTML;
            jQuery(stories[i]).css('line-height', '25px');
            parent.css('display', 'flex');

            if( content.indexOf(find_replace[j][0]) >= 0){
                parent.find('.ghx-grabber').css('background-color', find_replace[j][2]);
                var image = '<img class="alex-jira-img" src="'+find_replace[j][1]+'"/>';
                stories[i].innerHTML = content.replace(
                    find_replace[j][0], ''
                );
                parent.prepend(image);
            }
            else if( !parent.find('img.alex-jira-img') ) {
                var image = '<img class="alex-jira-img" src="https://orig00.deviantart.net/87e2/f/2014/003/4/8/emoji_kissingniv_by_ariedry-d70o9rh.png"/>';
                parent.prepend(image);
            }
        }

    }
}

timer = setTimeout(function() {
    checkForStories();

    jQuery('#ghx-complete-sprint').parent().prepend(
        '<button id="collapse" class="aui-button ">Alleen todo aub</button>'
    );

    jQuery('#collapse').click(function () {
        var swimlanes = document.querySelectorAll('.ghx-swimlane-header');
        for (var i = 0, l = swimlanes.length; i < l; i++) {
            var current = jQuery(swimlanes[i]);
            if( current.hasClass('ghx-done') ){
                current.parent().addClass('ghx-closed');
            } else {
                current.parent().removeClass('ghx-closed');
            }
        }
    });
}, 1500);
window.addEventListener("mouseup", function () {
    timer = setTimeout(function() {
        checkForStories();
    }, 1500);
});
checkForStories();
console.log(jQuery('.ghx-modes-tools'));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmExMjJlNDE0NjJjMzk2ZWRkYmYiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLE9BQU87QUFDOUMsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSx3QyIsImZpbGUiOiJjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmExMjJlNDE0NjJjMzk2ZWRkYmYiLCJ2YXIgZmluZF9yZXBsYWNlID0gW1xuICAgIFtcbiAgICAgICAgJ1tQT10nLFxuICAgICAgICAnaHR0cHM6Ly9jYS5zbGFjay1lZGdlLmNvbS9UNTJOQVVFR0ctVTdDUjhDV0FLLWY2ZjFjMWFmMmU5OS03MicsXG4gICAgICAgICcjZjRiMzQyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgICAnW0JFXScsXG4gICAgICAgICdodHRwczovL2NkbjQuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9sb2dvcy0zLzI1Ni9sYXJhdmVsLTY0LnBuZycsXG4gICAgICAgICcjNzg3Q0I1J1xuICAgIF0sXG4gICAgW1xuICAgICAgICAnW0ZFXScsXG4gICAgICAgICdodHRwczovL2NkbjAuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9IVE1MNS8xMjgvSFRNTF9Mb2dvLnBuZycsXG4gICAgICAgICcjRTQ0RDI2J1xuICAgIF0sXG4gICAgW1xuICAgICAgICAnW0RFU0lHTl0nLFxuICAgICAgICAnaHR0cHM6Ly9kbDIubWFjdXBkYXRlLmNvbS9pbWFnZXMvaWNvbnMyNTYvMzUyMzAucG5nP2Q9MTUwODI3MjgzOCcsXG4gICAgICAgICcjRkVFREFEJ1xuICAgIF0sXG4gICAgW1xuICAgICAgICAnW0dJVF0nLFxuICAgICAgICAnaHR0cHM6Ly9naXRsYWIuY29tL3VwbG9hZHMvLS9zeXN0ZW0vcHJvamVjdC9hdmF0YXIvMTMwODMvbG9nby1leHRyYS13aGl0ZXNwYWNlLnBuZycsXG4gICAgICAgICcjNDI4NmY0J1xuICAgIF1cbl07XG5cblxuZnVuY3Rpb24gY2hlY2tGb3JTdG9yaWVzKClcbntcbiAgICB2YXIgc3RvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24uZ2h4LXN1bW1hcnknKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3Rvcmllcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIHAgPSBmaW5kX3JlcGxhY2UubGVuZ3RoOyBqIDwgcDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0galF1ZXJ5KHN0b3JpZXNbaV0pLnBhcmVudCgpO1xuICAgICAgICAgICAgdmFyIGFzc2lnbmVkID0gcGFyZW50LmZpbmQoJy5naHgtcm93LmdoeC1zdGF0LTIgc3Bhbi5naHgtZmllbGQgaW1nJyk7XG4gICAgICAgICAgICBpZiggYXNzaWduZWQgKXtcbiAgICAgICAgICAgICAgICBhc3NpZ25lZC5hZGRDbGFzcygnYWxleC1qaXJhLWltZycpO1xuICAgICAgICAgICAgICAgIHBhcmVudC5wcmVwZW5kKGFzc2lnbmVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyZW50LmZpbmQoJy5naHgtc3RhdC1maWVsZHMnKS5oaWRlKCk7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHN0b3JpZXNbaV0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgalF1ZXJ5KHN0b3JpZXNbaV0pLmNzcygnbGluZS1oZWlnaHQnLCAnMjVweCcpO1xuICAgICAgICAgICAgcGFyZW50LmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG5cbiAgICAgICAgICAgIGlmKCBjb250ZW50LmluZGV4T2YoZmluZF9yZXBsYWNlW2pdWzBdKSA+PSAwKXtcbiAgICAgICAgICAgICAgICBwYXJlbnQuZmluZCgnLmdoeC1ncmFiYmVyJykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgZmluZF9yZXBsYWNlW2pdWzJdKTtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAnPGltZyBjbGFzcz1cImFsZXgtamlyYS1pbWdcIiBzcmM9XCInK2ZpbmRfcmVwbGFjZVtqXVsxXSsnXCIvPic7XG4gICAgICAgICAgICAgICAgc3Rvcmllc1tpXS5pbm5lckhUTUwgPSBjb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgIGZpbmRfcmVwbGFjZVtqXVswXSwgJydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHBhcmVudC5wcmVwZW5kKGltYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoICFwYXJlbnQuZmluZCgnaW1nLmFsZXgtamlyYS1pbWcnKSApIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAnPGltZyBjbGFzcz1cImFsZXgtamlyYS1pbWdcIiBzcmM9XCJodHRwczovL29yaWcwMC5kZXZpYW50YXJ0Lm5ldC84N2UyL2YvMjAxNC8wMDMvNC84L2Vtb2ppX2tpc3NpbmduaXZfYnlfYXJpZWRyeS1kNzBvOXJoLnBuZ1wiLz4nO1xuICAgICAgICAgICAgICAgIHBhcmVudC5wcmVwZW5kKGltYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgY2hlY2tGb3JTdG9yaWVzKCk7XG5cbiAgICBqUXVlcnkoJyNnaHgtY29tcGxldGUtc3ByaW50JykucGFyZW50KCkucHJlcGVuZChcbiAgICAgICAgJzxidXR0b24gaWQ9XCJjb2xsYXBzZVwiIGNsYXNzPVwiYXVpLWJ1dHRvbiBcIj5BbGxlZW4gdG9kbyBhdWI8L2J1dHRvbj4nXG4gICAgKTtcblxuICAgIGpRdWVyeSgnI2NvbGxhcHNlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3dpbWxhbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdoeC1zd2ltbGFuZS1oZWFkZXInKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzd2ltbGFuZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IGpRdWVyeShzd2ltbGFuZXNbaV0pO1xuICAgICAgICAgICAgaWYoIGN1cnJlbnQuaGFzQ2xhc3MoJ2doeC1kb25lJykgKXtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnBhcmVudCgpLmFkZENsYXNzKCdnaHgtY2xvc2VkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2doeC1jbG9zZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufSwgMTUwMCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKCkge1xuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2hlY2tGb3JTdG9yaWVzKCk7XG4gICAgfSwgMTUwMCk7XG59KTtcbmNoZWNrRm9yU3RvcmllcygpO1xuY29uc29sZS5sb2coalF1ZXJ5KCcuZ2h4LW1vZGVzLXRvb2xzJykpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9