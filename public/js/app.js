/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/accordion.js":
/*!***********************************!*\
  !*** ./resources/js/accordion.js ***!
  \***********************************/
/***/ (() => {

var accordionItems = document.querySelectorAll('.challenge-projects__item');
var accordionContentPanes = document.querySelectorAll('.challenge-projects__item-content'); // Show first by default
// accordionItems[0].classList.add('challenge-projects__item--active');
// Hide each besides the targeted accordion on click

accordionItems.forEach(function (accordion) {
  // Clicked accordions clickable target
  var accordionTitleRow = accordion.firstElementChild;
  accordionTitleRow.addEventListener('click', toggleAccordion);
});

function toggleAccordion(e) {
  accordionContentPanes.forEach(function (content) {
    // Check if the clicked row matches the content's previous element sibling
    if (content.previousElementSibling === e.target) {
      content.parentElement.classList.add('challenge-projects__item--active');
    } else {
      content.parentElement.classList.remove('challenge-projects__item--active');
    }
  });
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// require("./bootstrap");
__webpack_require__(/*! ./projects */ "./resources/js/projects.js");

__webpack_require__(/*! ./select */ "./resources/js/select.js");

__webpack_require__(/*! ./accordion */ "./resources/js/accordion.js");

__webpack_require__(/*! ./meeting */ "./resources/js/meeting.js");

__webpack_require__(/*! ./form */ "./resources/js/form.js");

__webpack_require__(/*! ./slider */ "./resources/js/slider.js");

/***/ }),

/***/ "./resources/js/form.js":
/*!******************************!*\
  !*** ./resources/js/form.js ***!
  \******************************/
/***/ (() => {

var docId = 'jLQsVfBqj4';
var tableIdOrName = 'grid-F4qsM_bt7P';
var token = '3974b4fb-0494-491e-b106-6d8689d287fc';
var url = "https://coda.io/apis/v1/docs/".concat(docId, "/tables/").concat(tableIdOrName, "/rows");
var myForm = document.querySelector('#challenge-form');
var fullname = document.querySelector('#name');
var phone = document.querySelector('#phone');
var email = document.querySelector('#email');
var companyName = document.querySelector('#companyName');
var type = document.querySelector('#type');
var level = document.querySelector('#level');
var desc = document.querySelector('#description');
myForm.addEventListener('submit', function (event) {
  event.preventDefault();
  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  var fullnameValue = fullname.value.trim();
  var phoneValue = phone.value.trim();
  var emailValue = email.value.trim();
  var companyNameValue = companyName.value.trim();
  var typeValue = type.value.trim();
  var levelValue = level.value.trim();
  var descValue = desc.value.trim();
  var itsOkToFetch = true;

  if (fullnameValue === '') {
    itsOkToFetch = false;
    setErrorFor(fullname, 'پر کردن فیلد نام ضروری است');
  } else {
    setSuccessFor(fullname);
  }

  if (phoneValue === '') {
    itsOkToFetch = false;
    setErrorFor(phone, 'پر کردن فیلد تلفن ضروری است');
  } else {
    setSuccessFor(phone);
  }

  if (emailValue === '') {
    itsOkToFetch = false;
    setErrorFor(email, 'پر کردن فیلد ایمیل ضروری است');
  } else {
    setSuccessFor(email);
  }

  if (companyNameValue === '') {
    itsOkToFetch = false;
    setErrorFor(companyName, 'پر کردن فیلد ایمیل ضروری است');
  } else {
    setSuccessFor(companyName);
  }

  if (typeValue === '') {
    itsOkToFetch = false;
    setErrorFor(type, 'پر کردن فیلد ایمیل ضروری است');
  } else {
    setSuccessFor(type);
  }

  if (levelValue === '') {
    itsOkToFetch = false;
    setErrorFor(level, 'پر کردن فیلد ایمیل ضروری است');
  } else {
    setSuccessFor(level);
  }

  if (descValue === '') {
    itsOkToFetch = false;
    setErrorFor(desc, 'پر کردن فیلد ایمیل ضروری است');
  } else {
    setSuccessFor(desc);
  }

  var data = {
    'rows': [{
      'cells': [{
        'column': 'name',
        'value': fullnameValue
      }, {
        'column': 'phone',
        'value': phoneValue
      }, {
        'column': 'email',
        'value': emailValue
      }, {
        'column': 'company',
        'value': companyNameValue
      }, {
        'column': 'type',
        'value': typeValue
      }, {
        'column': 'level',
        'value': levelValue
      }, {
        'column': 'desc',
        'value': descValue
      }]
    }]
  };

  if (itsOkToFetch) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer ".concat(token)
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log('Success: ', data); // document.querySelector('.challenge-form__notif').classList.remove('challenge-form__notif--hidden');
    })["catch"](function (error) {
      console.error('Error: ', error);
    });
  }
}

function setErrorFor(input, message) {
  var fieldWrap = input.parentElement;
  console.log(fieldWrap);
  fieldWrap.classList.remove('challenge-form__field--success');
  fieldWrap.classList.add('challenge-form__field--error');
}

function setSuccessFor(input, message) {
  var fieldWrap = input.parentElement;
  fieldWrap.classList.remove('challenge-form__field--error');
  fieldWrap.classList.add('challenge-form__field--success');
}

/***/ }),

/***/ "./resources/js/meeting.js":
/*!*********************************!*\
  !*** ./resources/js/meeting.js ***!
  \*********************************/
/***/ (() => {

var meetingTabs = document.querySelector(".challenge-meetings__tabs");
var meetingTabsButtons = meetingTabs.querySelectorAll(".challenge-meetings__tab");
var meetingBoxes = document.querySelector(".challenge-meetings__boxes");
var meetingTabsBoxes = meetingBoxes.querySelectorAll(".challenge-meetings__box");

function displayMeetingTab(current) {
  for (var i = 0; i < meetingTabsBoxes.length; i++) {
    if (current === i) {
      meetingTabsBoxes[i].style.display = "block";
      meetingTabsButtons.forEach(function (element) {
        element.classList.remove("challenge-meetings__tab--active");
      });
      meetingTabsButtons[i].classList.add("challenge-meetings__tab--active");
    } else {
      meetingTabsBoxes[i].style.display = "none";
    }
  }
}

displayMeetingTab(0);
meetingTabs.addEventListener("click", function (event) {
  if (event.target.className === "challenge-meetings__tab") {
    for (var i = 0; i < meetingTabsButtons.length; i++) {
      if (event.target === meetingTabsButtons[i]) {
        displayMeetingTab(i);
        break;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/projects.js":
/*!**********************************!*\
  !*** ./resources/js/projects.js ***!
  \**********************************/
/***/ (() => {

var tabs = document.querySelector(".challenge-projects__tabs");
var tabsButtons = tabs.querySelectorAll(".challenge-projects__tab");
var boxes = document.querySelector(".challenge-projects__boxes");
var tabsBoxes = boxes.querySelectorAll(".challenge-projects__box");

function displayCurrentTab(current) {
  for (var i = 0; i < tabsBoxes.length; i++) {
    if (current === i) {
      tabsBoxes[i].style.display = "block";
      tabsButtons.forEach(function (element) {
        element.classList.remove("challenge-projects__tab--active");
      });
      tabsButtons[i].classList.add("challenge-projects__tab--active");
    } else {
      tabsBoxes[i].style.display = "none";
    }
  }
}

displayCurrentTab(0);
tabs.addEventListener("click", function (event) {
  if (event.target.className === "challenge-projects__tab") {
    for (var i = 0; i < tabsButtons.length; i++) {
      if (event.target === tabsButtons[i]) {
        displayCurrentTab(i);
        break;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/select.js":
/*!********************************!*\
  !*** ./resources/js/select.js ***!
  \********************************/
/***/ (() => {

// Custom Select
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "challenge-form__select":*/

x = document.getElementsByClassName("challenge-form__select");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/

  a = document.createElement("DIV");
  a.setAttribute("class", "challenge-form__select--selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/

  b = document.createElement("DIV");
  b.setAttribute("class", "challenge-form__select-items challenge-form__select--hide");

  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;

      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("challenge-form__select--same-as-selected");
          yl = y.length;

          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }

          this.setAttribute("class", "challenge-form__select--same-as-selected");
          break;
        }
      }

      h.click();
    });
    b.appendChild(c);
  }

  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("challenge-form__select--hide");
    this.classList.toggle("challenge-form__select--active");
  });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
  x = document.getElementsByClassName("challenge-form__select-items");
  y = document.getElementsByClassName("challenge-form__select--selected");
  xl = x.length;
  yl = y.length;

  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("challenge-form__select--active");
    }
  }

  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("challenge-form__select--hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/


document.addEventListener("click", closeAllSelect);

/***/ }),

/***/ "./resources/js/slider.js":
/*!********************************!*\
  !*** ./resources/js/slider.js ***!
  \********************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var chevronRight = document.querySelector('.challenge-success__chevron--right');
var chevronLeft = document.querySelector('.challenge-success__chevron--left');
var sliderItems = document.querySelectorAll('.challenge-success__item');
var sliderTotal = sliderItems.length;
var sliderCount = 0;
var sliderPosition = 0;
chevronRight.addEventListener('click', function (e) {
  sliderCount++;
  sliderPosition = sliderCount * 20;

  if (sliderCount > 0) {
    chevronLeft.classList.remove('challenge-success__chevron--hide');
  }

  var _iterator = _createForOfIteratorHelper(sliderItems),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;
      i.style.right = "-".concat(sliderPosition, "%");

      if (sliderCount > 6) {
        chevronRight.classList.add('challenge-success__chevron--hide');
        sliderCount = 7;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
chevronLeft.addEventListener('click', function (e) {
  sliderCount--;
  sliderPosition = sliderCount * 20;

  if (sliderCount > 0) {
    chevronRight.classList.remove('challenge-success__chevron--hide');
  }

  var _iterator2 = _createForOfIteratorHelper(sliderItems),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var i = _step2.value;
      i.style.right = "-".concat(sliderPosition, "%");

      if (sliderCount === 0) {
        chevronLeft.classList.add('challenge-success__chevron--hide');
      }

      if (sliderCount < 0) {
        sliderCount = 0;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;