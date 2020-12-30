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
var createNodesByObject = function (table, dataset, oneCollectionRelation, manyCollectionRelation, gatsbyNodesArgs) {
    var actions = gatsbyNodesArgs.actions, createNodeId = gatsbyNodesArgs.createNodeId, createContentDigest = gatsbyNodesArgs.createContentDigest;
    var createNode = actions.createNode;
    var _loop_1 = function (i) {
        var ocr = oneCollectionRelation[i];
        if (dataset[ocr.manyCollection] && dataset[ocr.manyCollection] instanceof Array) {
            dataset[ocr.manyCollection + "___NODE"] = dataset[ocr.manyCollection]
                .map(function (v) { return createNodeId(ocr.manyCollection + "-" + v); });
            delete dataset[ocr.manyCollection];
        }
    };
    // Mapping the id of O2M field
    for (var i = 0; i < oneCollectionRelation.length; i++) {
        _loop_1(i);
    }
    var dataId = createNodeId(table + "-" + dataset['id']);
    // Create the node
    createNode(__assign(__assign({}, dataset), { id: dataId, parent: null, children: [], internal: {
            type: table,
            content: JSON.stringify(dataset),
            contentDigest: createContentDigest(dataset)
        } }));
};
var createAllNodes = function (table, dataset, relations, gatsbyNodesArgs) {
    var oneCollectionRelation = relations.filter(function (x) { return x.oneCollection == table; });
    var manyCollectionRelation = relations.filter(function (x) { return x.manyCollection == table; });
    if (dataset instanceof Array) {
        dataset.forEach(function (element) {
            createNodesByObject(table, element, oneCollectionRelation, manyCollectionRelation, gatsbyNodesArgs);
        });
    }
    else {
        createNodesByObject(table, dataset, oneCollectionRelation, manyCollectionRelation, gatsbyNodesArgs);
    }
};
exports.createAllNodes = createAllNodes;
