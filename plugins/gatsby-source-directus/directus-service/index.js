"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectusService = void 0;
var sdk_js_1 = __importDefault(require("@directus/sdk-js"));
var utils_1 = require("./utils");
var DirectusService = /** @class */ (function () {
    function DirectusService(config) {
        try {
            this._api = this._initSDK(config.url);
            this._ready = this._login(config.auth);
        }
        catch (error) {
            throw error;
        }
    }
    DirectusService.prototype._initSDK = function (host) {
        return new sdk_js_1.default(host);
    };
    DirectusService.prototype._login = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!!this._api.auth.token) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._api.auth.login(credentials)];
                    case 1:
                        response = _a.sent();
                        if (!response || !response.data.access_token) {
                            throw new Error('Invalid response returned.');
                        }
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DirectusService.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._ready];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DirectusService.prototype.getAssetUrl = function (id) {
        return utils_1.joinUrl(this._api.url, 'assets', id);
    };
    DirectusService.prototype.getItems = function (collection) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._api.items(collection).read()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DirectusService.prototype.getRelations = function (reporter) {
        return __awaiter(this, void 0, void 0, function () {
            var relations, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        reporter.info('Start fetching directus relation data...');
                        return [4 /*yield*/, this._api.relations.read()];
                    case 1:
                        relations = _a.sent();
                        reporter.success('Directus relations fetched.');
                        return [2 /*return*/, relations.data.map(function (x) {
                                var _a, _b, _c, _d, _e, _f;
                                var relation = {
                                    oneCollection: (_a = x.one_collection) !== null && _a !== void 0 ? _a : '',
                                    oneField: (_b = x.one_field) !== null && _b !== void 0 ? _b : '',
                                    onePrimary: (_c = x.one_primary) !== null && _c !== void 0 ? _c : '',
                                    manyCollection: (_d = x.many_collection) !== null && _d !== void 0 ? _d : '',
                                    manyField: (_e = x.many_field) !== null && _e !== void 0 ? _e : '',
                                    manyPrimary: (_f = x.many_primary) !== null && _f !== void 0 ? _f : '',
                                };
                                return relation;
                            })];
                    case 2:
                        error_2 = _a.sent();
                        reporter.error(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DirectusService.prototype.getFields = function (reporter) {
        return __awaiter(this, void 0, void 0, function () {
            var fields, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        reporter.info('Start fetching directus field data...');
                        return [4 /*yield*/, this._api.fields.read()];
                    case 1:
                        fields = _a.sent();
                        reporter.success('Directus fields fetched.');
                        return [2 /*return*/, fields.data.map(function (x) {
                                var _a, _b, _c, _d, _e;
                                return ({
                                    collection: (_a = x.collection) !== null && _a !== void 0 ? _a : '',
                                    field: (_b = x.field) !== null && _b !== void 0 ? _b : '',
                                    type: (_c = x.type) !== null && _c !== void 0 ? _c : '',
                                    interface: (_e = (_d = x.meta) === null || _d === void 0 ? void 0 : _d.interface) !== null && _e !== void 0 ? _e : '',
                                });
                            })];
                    case 2:
                        error_3 = _a.sent();
                        reporter.error(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DirectusService.prototype.getFileInfos = function (reporter) {
        return __awaiter(this, void 0, void 0, function () {
            var files, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        reporter.info('Start fetching directus file data...');
                        return [4 /*yield*/, this._api.files.read()];
                    case 1:
                        files = _a.sent();
                        console.log(files);
                        reporter.success('Directus files fetched.');
                        return [2 /*return*/, files.data.map(function (x) {
                                var _a, _b, _c, _d, _e;
                                return ({
                                    fileId: (_a = x.id) !== null && _a !== void 0 ? _a : '',
                                    filename_download: (_b = x.filename_download) !== null && _b !== void 0 ? _b : '',
                                    title: (_c = x.title) !== null && _c !== void 0 ? _c : '',
                                    description: (_d = x.description) !== null && _d !== void 0 ? _d : '',
                                    tags: (_e = x.tags) !== null && _e !== void 0 ? _e : [],
                                });
                            })];
                    case 2:
                        error_4 = _a.sent();
                        reporter.error(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return DirectusService;
}());
exports.DirectusService = DirectusService;
