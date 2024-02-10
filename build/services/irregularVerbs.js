"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIrregularVerbWithLevel = exports.getIrregularVerbs = void 0;
const IrregularVerb_1 = require("../models/IrregularVerb");
const Level_1 = require("../models/Level");
const getIrregularVerbs = () => {
    return IrregularVerb_1.IrregularVerb.findAll();
};
exports.getIrregularVerbs = getIrregularVerbs;
const getIrregularVerbWithLevel = () => {
    return IrregularVerb_1.IrregularVerb.findAll({
        include: {
            model: Level_1.Level,
        }
    });
};
exports.getIrregularVerbWithLevel = getIrregularVerbWithLevel;
