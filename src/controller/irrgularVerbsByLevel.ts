import * as levelService from '../services/levels';
import * as irregularVerbService from '../services/irregularVerbs';
import { Request, Response } from 'express';
import { Level } from '../models/Level';

interface MyRequest extends Request {
  params: {
    levelId: string;
  };
}
export interface IrregularVerb {
    level: Level | null;
    // other properties...
  }

export const getIrregularVerbsByLevel = async (req: MyRequest, res: Response) => {
    const { levelId } = req.params;

    if(isNaN(+levelId)) {
        res.sendStatus(422);
        
        return;
    }

    const irregularVerbsWithLevels = await irregularVerbService.getIrregularVerbWithLevel();

    const irregularVerbsByLevel = irregularVerbsWithLevels.filter((verb) => {
    if (verb === null) {
        return false;
    }
    
    return verb.levelId === +levelId;
    });

    res.send(irregularVerbsByLevel);
}