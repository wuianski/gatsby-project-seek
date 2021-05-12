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
exports.createAllNodes = void 0;
var gatsby_source_filesystem_1 = require("gatsby-source-filesystem");
var createNodesByObject = function (directus, table, dataset, relations, fieldInfos, fileInfos, additionalCollections, gatsbyNodesArgs) { return __awaiter(void 0, void 0, void 0, function () {
    var actions, store, cache, createNodeId, createContentDigest, reporter, createNode, thisNodeId, fileFields, _loop_1, i, manyFileFields, projectsDirectusFiles2, i, element, arrayFileId, idSet, _loop_2, k, o2mFieldInfos, _loop_3, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                actions = gatsbyNodesArgs.actions, store = gatsbyNodesArgs.store, cache = gatsbyNodesArgs.cache, createNodeId = gatsbyNodesArgs.createNodeId, createContentDigest = gatsbyNodesArgs.createContentDigest, reporter = gatsbyNodesArgs.reporter;
                createNode = actions.createNode;
                thisNodeId = createNodeId(table + "-" + dataset['id']);
                fileFields = fieldInfos.filter(function (x) { return x.field !== '' && x.type === 'uuid' && (x.interface === 'file-image' || x.interface === 'file'); });
                _loop_1 = function (i) {
                    var element, val, fileInfo, url, fileInfoNodeId, fileNode, error_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                element = fileFields[i];
                                val = dataset[element.field];
                                if (!val) {
                                    return [2 /*return*/, "continue"];
                                }
                                fileInfo = fileInfos.find(function (f) { return f.fileId == val; });
                                if (!fileInfo) {
                                    return [2 /*return*/, "continue"];
                                }
                                url = directus.getAssetUrl(val);
                                if (element.field === 'planimetric_map' || element.field === 'apply_for') {
                                    reporter.info(url);
                                }
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                fileInfoNodeId = createNodeId("fileInfo-" + fileInfo.fileId);
                                return [4 /*yield*/, gatsby_source_filesystem_1.createRemoteFileNode({
                                        url: url,
                                        store: store,
                                        cache: cache,
                                        parentNodeId: thisNodeId,
                                        createNode: createNode,
                                        createNodeId: createNodeId,
                                        reporter: reporter
                                    })];
                            case 2:
                                fileNode = _b.sent();
                                fileNode['directus'] = __assign({ fileInfoId: fileInfoNodeId }, fileInfo);
                                createNode({
                                    directus: __assign({}, fileInfo),
                                    id: fileInfoNodeId,
                                    parent: thisNodeId,
                                    children: [],
                                    internal: {
                                        type: 'fileInfo',
                                        contentDigest: createContentDigest(fileInfo)
                                    }
                                });
                                dataset[element.field + "___NODE"] = fileNode.id;
                                delete dataset[element.field];
                                return [3 /*break*/, 4];
                            case 3:
                                error_1 = _b.sent();
                                reporter.error(error_1);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                };
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < fileFields.length)) return [3 /*break*/, 4];
                return [5 /*yield**/, _loop_1(i)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4:
                manyFileFields = fieldInfos.filter(function (x) { return x.type === 'files'; });
                projectsDirectusFiles2 = additionalCollections['projects_directus_files_2'];
                i = 0;
                _a.label = 5;
            case 5:
                if (!(i < manyFileFields.length)) return [3 /*break*/, 11];
                element = manyFileFields[i];
                arrayFileId = dataset[element.field];
                if (!arrayFileId || arrayFileId.length === 0) {
                    return [3 /*break*/, 10];
                }
                idSet = [];
                _loop_2 = function (k) {
                    var o2mId, pdf2, fileId, fileInfo, url, fileInfoNodeId, fileNode, error_2;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                o2mId = arrayFileId[k];
                                pdf2 = projectsDirectusFiles2.find(function (x) { return x.id == o2mId; });
                                if (!pdf2) {
                                    return [2 /*return*/, "continue"];
                                }
                                fileId = pdf2['directus_files_id'];
                                fileInfo = fileInfos.find(function (f) { return f.fileId == fileId; });
                                if (!fileInfo) {
                                    return [2 /*return*/, "continue"];
                                }
                                url = directus.getAssetUrl(fileId);
                                _c.label = 1;
                            case 1:
                                _c.trys.push([1, 3, , 4]);
                                fileInfoNodeId = createNodeId("fileInfo-" + fileInfo.fileId);
                                return [4 /*yield*/, gatsby_source_filesystem_1.createRemoteFileNode({
                                        url: url,
                                        store: store,
                                        cache: cache,
                                        parentNodeId: thisNodeId,
                                        createNode: createNode,
                                        createNodeId: createNodeId,
                                        reporter: reporter,
                                    })];
                            case 2:
                                fileNode = _c.sent();
                                fileNode['directus'] = __assign({ fileInfoId: fileInfoNodeId }, fileInfo);
                                createNode({
                                    directus: __assign({}, fileInfo),
                                    id: fileInfoNodeId,
                                    parent: thisNodeId,
                                    children: [],
                                    internal: {
                                        type: 'fileInfo',
                                        contentDigest: createContentDigest(fileInfo)
                                    }
                                });
                                idSet.push(fileNode.id);
                                return [3 /*break*/, 4];
                            case 3:
                                error_2 = _c.sent();
                                reporter.error(error_2);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                };
                k = 0;
                _a.label = 6;
            case 6:
                if (!(k < arrayFileId.length)) return [3 /*break*/, 9];
                return [5 /*yield**/, _loop_2(k)];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8:
                k++;
                return [3 /*break*/, 6];
            case 9:
                dataset[element.field + "___NODE"] = idSet;
                delete dataset[element.field];
                _a.label = 10;
            case 10:
                i++;
                return [3 /*break*/, 5];
            case 11:
                o2mFieldInfos = fieldInfos.filter(function (x) { return x.type === 'o2m'; });
                _loop_3 = function (i) {
                    var o2mFieldInfo = o2mFieldInfos[i];
                    var relation = relations.find(function (x) { return x.oneCollection === table && x.oneField === o2mFieldInfo.field; });
                    if (!relation) {
                        return "continue";
                    }
                    var o2mFieldData = dataset[o2mFieldInfo.field];
                    if (!o2mFieldData) {
                        return "continue";
                    }
                    dataset[o2mFieldInfo.field + "___NODE"] = o2mFieldData
                        .map(function (vId) { return createNodeId(relation.manyCollection + "-" + vId); });
                    delete dataset[o2mFieldInfo.field];
                    delete dataset[relation.manyCollection];
                };
                for (i = 0; i < o2mFieldInfos.length; i++) {
                    _loop_3(i);
                }
                // Create the node
                createNode({
                    directus: __assign({}, dataset),
                    id: thisNodeId,
                    parent: null,
                    children: [],
                    internal: {
                        type: table,
                        content: JSON.stringify(dataset),
                        contentDigest: createContentDigest(dataset)
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
var createAllNodes = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var directus, table, dataset, relations, fields, fileInfos, additionalCollections, gatsbyNodesArgs, collectionFieldInfos, index, element;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                directus = args.directus, table = args.table, dataset = args.dataset, relations = args.relations, fields = args.fields, fileInfos = args.fileInfos, additionalCollections = args.additionalCollections, gatsbyNodesArgs = args.gatsbyNodesArgs;
                collectionFieldInfos = fields.filter(function (x) { return x.collection == table; });
                if (!(dataset instanceof Array)) return [3 /*break*/, 5];
                index = 0;
                _a.label = 1;
            case 1:
                if (!(index < dataset.length)) return [3 /*break*/, 4];
                element = dataset[index];
                return [4 /*yield*/, createNodesByObject(directus, table, element, relations, collectionFieldInfos, fileInfos, additionalCollections, gatsbyNodesArgs)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                index++;
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, createNodesByObject(directus, table, dataset, relations, collectionFieldInfos, fileInfos, additionalCollections, gatsbyNodesArgs)];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.createAllNodes = createAllNodes;
