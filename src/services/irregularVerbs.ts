import { IrregularVerb } from "../models/IrregularVerb";
import { Level } from "../models/Level";


export const getIrregularVerbs = () => {
    return IrregularVerb.findAll();
}

export const getIrregularVerbWithLevel = () => {
    return IrregularVerb.findAll({
        include: {
            model: Level,
        }
    });
}