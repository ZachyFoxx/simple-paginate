"use strict";
exports.__esModule = true;
exports.SimplePaginator = void 0;
var lib_1 = require("../lib");
var SimplePaginator = function (objects, max) {
    var paginator = new lib_1.Paginator(objects, max);
    return paginator;
};
exports.SimplePaginator = SimplePaginator;
