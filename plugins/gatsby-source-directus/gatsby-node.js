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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sourceNodes = void 0;
var directus_service_1 = require("./directus-service");
var process_1 = require("./directus-service/process");
var sourceNodes = function (gatsbyArgs, pluginOptions) { return __awaiter(void 0, void 0, void 0, function () {
    var url, email, password, tables, directus, relations, transformedRelations, index, table, dataset, error_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = pluginOptions.url, email = pluginOptions.email, password = pluginOptions.password, tables = pluginOptions.tables;
                directus = new directus_service_1.DirectusService({
                    url: url,
                    auth: {
                        email: email,
                        password: password
                    }
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 11, , 12]);
                console.log("Start parsing...");
                return [4 /*yield*/, directus.init()];
            case 2:
                _a.sent();
                return [4 /*yield*/, directus.getRelations()];
            case 3:
                relations = _a.sent();
                transformedRelations = process_1.transformRelation(relations.data);
                if (!(tables && tables instanceof Array)) return [3 /*break*/, 10];
                index = 0;
                _a.label = 4;
            case 4:
                if (!(index < tables.length)) return [3 /*break*/, 10];
                table = tables[index];
                _a.label = 5;
            case 5:
                _a.trys.push([5, 8, , 9]);
                console.log("start create node:: " + table);
                return [4 /*yield*/, directus.getItems(table)];
            case 6:
                dataset = _a.sent();
                return [4 /*yield*/, process_1.createAllNodes(table, dataset.data, transformedRelations, gatsbyArgs)];
            case 7:
                _a.sent();
                console.log("create " + table + " finished");
                return [3 /*break*/, 9];
            case 8:
                error_1 = _a.sent();
                console.error(table + ":: " + error_1);
                return [3 /*break*/, 9];
            case 9:
                index++;
                return [3 /*break*/, 4];
            case 10:
                console.log("Success.");
                return [3 /*break*/, 12];
            case 11:
                error_2 = _a.sent();
                console.error("" + error_2);
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); };
exports.sourceNodes = sourceNodes;
