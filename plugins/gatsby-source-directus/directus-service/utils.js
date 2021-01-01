"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinUrl = void 0;
var urijs_1 = __importDefault(require("urijs"));
var joinUrl = function (baseUrl, directory, url) {
    var theUrl = new urijs_1.default(url);
    if (theUrl.is("relative")) {
        theUrl = theUrl.absoluteTo(baseUrl);
    }
    return theUrl.directory(directory).toString();
};
exports.joinUrl = joinUrl;
