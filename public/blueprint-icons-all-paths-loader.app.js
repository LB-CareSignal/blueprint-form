(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blueprint-icons-all-paths-loader"],{

/***/ "./node_modules/@blueprintjs/icons/lib/esm/paths-loaders/allPathsLoader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@blueprintjs/icons/lib/esm/paths-loaders/allPathsLoader.js ***!
  \*********************************************************************************/
/*! exports provided: allPathsLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPathsLoader", function() { return allPathsLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A simple module loader which concatenates all icon paths into a single chunk.
 */
var allPathsLoader = function (name, size) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var getIconPaths;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../allPaths */ "./node_modules/@blueprintjs/icons/lib/esm/allPaths.js"))];
            case 1:
                getIconPaths = (_a.sent()).getIconPaths;
                return [2 /*return*/, getIconPaths(name, size)];
        }
    });
}); };
//# sourceMappingURL=allPathsLoader.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJsdWVwcmludGpzL2ljb25zL2xpYi9lc20vcGF0aHMtbG9hZGVycy9hbGxQYXRoc0xvYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytDO0FBQy9DO0FBQ0E7QUFDQTtBQUNPLDRDQUE0QyxRQUFRLHVEQUFTO0FBQ3BFO0FBQ0EsV0FBVyx5REFBVztBQUN0QjtBQUNBLHlDQUF5QyxpSkFFWDtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSCwwQyIsImZpbGUiOiJibHVlcHJpbnQtaWNvbnMtYWxsLXBhdGhzLWxvYWRlci5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjMgUGFsYW50aXIgVGVjaG5vbG9naWVzLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG4vKipcbiAqIEEgc2ltcGxlIG1vZHVsZSBsb2FkZXIgd2hpY2ggY29uY2F0ZW5hdGVzIGFsbCBpY29uIHBhdGhzIGludG8gYSBzaW5nbGUgY2h1bmsuXG4gKi9cbmV4cG9ydCB2YXIgYWxsUGF0aHNMb2FkZXIgPSBmdW5jdGlvbiAobmFtZSwgc2l6ZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2V0SWNvblBhdGhzO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoXG4gICAgICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJibHVlcHJpbnQtaWNvbnMtYWxsLXBhdGhzXCIgKi9cbiAgICAgICAgICAgICAgICBcIi4uL2FsbFBhdGhzXCIpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBnZXRJY29uUGF0aHMgPSAoX2Euc2VudCgpKS5nZXRJY29uUGF0aHM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdldEljb25QYXRocyhuYW1lLCBzaXplKV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWxsUGF0aHNMb2FkZXIuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==