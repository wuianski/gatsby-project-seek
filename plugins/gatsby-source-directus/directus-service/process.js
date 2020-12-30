"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.createAllNodes = exports.transformRelation = void 0;
var transformRelation = function (relations) {
    return relations.map(function (x) {
        var relation = {
            oneCollection: x.one_collection,
            oneField: x.one_field,
            onePrimary: x.one_primary,
            manyCollection: x.many_collection,
            manyField: x.many_field,
            manyPrimary: x.many_primary,
        };
        return relation;
    });
};
exports.transformRelation = transformRelation;
var createNodesByObject = function (table, dataset, oneCollectionRelation, manyCollectionRelation, gatsbyNodesArgs) { return __awaiter(void 0, void 0, void 0, function () {
    var actions, createNodeId, createContentDigest, createNode, _loop_1, i, dataId;
    return __generator(this, function (_a) {
        actions = gatsbyNodesArgs.actions, createNodeId = gatsbyNodesArgs.createNodeId, createContentDigest = gatsbyNodesArgs.createContentDigest;
        createNode = actions.createNode;
        _loop_1 = function (i) {
            var ocr = oneCollectionRelation[i];
            if (dataset[ocr.manyCollection] && dataset[ocr.manyCollection] instanceof Array) {
                dataset[ocr.manyCollection + "___NODE"] = dataset[ocr.manyCollection]
                    .map(function (v) { return createNodeId(ocr.manyCollection + "-" + v); });
                delete dataset[ocr.manyCollection];
            }
        };
        // Mapping the id of O2M field
        for (i = 0; i < oneCollectionRelation.length; i++) {
            _loop_1(i);
        }
        dataId = createNodeId(table + "-" + dataset['id']);
        // Create the node
        console.log('create node');
        createNode(__assign(__assign({}, dataset), { id: dataId, parent: null, children: [], internal: {
                type: table,
                content: JSON.stringify(dataset),
                contentDigest: createContentDigest(dataset)
            } }));
        return [2 /*return*/];
    });
}); };
var createAllNodes = function (table, dataset, relations, gatsbyNodesArgs) { return __awaiter(void 0, void 0, void 0, function () {
    var oneCollectionRelation, manyCollectionRelation, index, element;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                oneCollectionRelation = relations.filter(function (x) { return x.oneCollection == table; });
                manyCollectionRelation = relations.filter(function (x) { return x.manyCollection == table; });
                if (!(dataset instanceof Array)) return [3 /*break*/, 5];
                index = 0;
                _a.label = 1;
            case 1:
                if (!(index < dataset.length)) return [3 /*break*/, 4];
                element = dataset[index];
                return [4 /*yield*/, createNodesByObject(table, element, oneCollectionRelation, manyCollectionRelation, gatsbyNodesArgs)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                index++;
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, createNodesByObject(table, dataset, oneCollectionRelation, manyCollectionRelation, gatsbyNodesArgs)];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.createAllNodes = createAllNodes;
