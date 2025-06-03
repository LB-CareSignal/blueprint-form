(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blueprint-icons-split-paths-by-size-loader"],{

/***/ "./node_modules/@blueprintjs/icons/lib/esm/paths-loaders/splitPathsBySizeLoader.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@blueprintjs/icons/lib/esm/paths-loaders/splitPathsBySizeLoader.js ***!
  \*****************************************************************************************/
/*! exports provided: splitPathsBySizeLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitPathsBySizeLoader", function() { return splitPathsBySizeLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! change-case */ "./node_modules/change-case/dist.es2015/index.js");
/* harmony import */ var _iconTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../iconTypes */ "./node_modules/@blueprintjs/icons/lib/esm/iconTypes.js");
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
 * A dynamic loader for icon paths that generates separate chunks for the two size variants.
 */
var splitPathsBySizeLoader = function (name, size) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var key, pathsRecord;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                key = Object(change_case__WEBPACK_IMPORTED_MODULE_1__["pascalCase"])(name);
                if (!(size === _iconTypes__WEBPACK_IMPORTED_MODULE_2__["IconSize"].STANDARD)) return [3 /*break*/, 2];
                return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../generated/16px/paths */ "./node_modules/@blueprintjs/icons/lib/esm/generated/16px/paths/index.js"))];
            case 1:
                pathsRecord = _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../generated/20px/paths */ "./node_modules/@blueprintjs/icons/lib/esm/generated/20px/paths/index.js"))];
            case 3:
                pathsRecord = _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, pathsRecord[key]];
        }
    });
}); };
//# sourceMappingURL=splitPathsBySizeLoader.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJsdWVwcmludGpzL2ljb25zL2xpYi9lc20vcGF0aHMtbG9hZGVycy9zcGxpdFBhdGhzQnlTaXplTG9hZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytDO0FBQ047QUFDRDtBQUN4QztBQUNBO0FBQ0E7QUFDTyxvREFBb0QsUUFBUSx1REFBUztBQUM1RTtBQUNBLFdBQVcseURBQVc7QUFDdEI7QUFDQTtBQUNBLHNCQUFzQiw4REFBVTtBQUNoQywrQkFBK0IsbURBQVE7QUFDdkMscUNBQXFDLCtLQUVTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywrS0FFQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNILGtEIiwiZmlsZSI6ImJsdWVwcmludC1pY29ucy1zcGxpdC1wYXRocy1ieS1zaXplLWxvYWRlci5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMjMgUGFsYW50aXIgVGVjaG5vbG9naWVzLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBwYXNjYWxDYXNlIH0gZnJvbSBcImNoYW5nZS1jYXNlXCI7XG5pbXBvcnQgeyBJY29uU2l6ZSB9IGZyb20gXCIuLi9pY29uVHlwZXNcIjtcbi8qKlxuICogQSBkeW5hbWljIGxvYWRlciBmb3IgaWNvbiBwYXRocyB0aGF0IGdlbmVyYXRlcyBzZXBhcmF0ZSBjaHVua3MgZm9yIHRoZSB0d28gc2l6ZSB2YXJpYW50cy5cbiAqL1xuZXhwb3J0IHZhciBzcGxpdFBhdGhzQnlTaXplTG9hZGVyID0gZnVuY3Rpb24gKG5hbWUsIHNpemUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGtleSwgcGF0aHNSZWNvcmQ7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAga2V5ID0gcGFzY2FsQ2FzZShuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIShzaXplID09PSBJY29uU2l6ZS5TVEFOREFSRCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGltcG9ydChcbiAgICAgICAgICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJibHVlcHJpbnQtaWNvbnMtMTZweC1wYXRoc1wiICovXG4gICAgICAgICAgICAgICAgICAgIFwiLi4vZ2VuZXJhdGVkLzE2cHgvcGF0aHNcIildO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHBhdGhzUmVjb3JkID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCBpbXBvcnQoXG4gICAgICAgICAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJibHVlcHJpbnQtaWNvbnMtMjBweC1wYXRoc1wiICovXG4gICAgICAgICAgICAgICAgXCIuLi9nZW5lcmF0ZWQvMjBweC9wYXRoc1wiKV07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcGF0aHNSZWNvcmQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSA0O1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcGF0aHNSZWNvcmRba2V5XV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3BsaXRQYXRoc0J5U2l6ZUxvYWRlci5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9