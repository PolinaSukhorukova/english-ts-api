import { Level } from '../models/Level';
import * as levelService from '../services/levels';

export const getLevels = async (req: any, res: { send: (arg0: Level[]) => void; }) => {
    const levels = await levelService.getLevels();

    res.send(levels);
};

export const getLevelById = async (req: { params: { levelId: any; }; }, res: { sendStatus: (arg0: number) => void; send: (arg0: Level) => void; }) => {
    const { levelId } = req.params;

    if(isNaN(+levelId)) {
        res.sendStatus(422);
        
        return;
    }
    const foundLevel = await levelService.getLevelById(+levelId);

    if (!foundLevel) {
        res.sendStatus(404);
        
        return;
    }

    res.send(foundLevel);
}