import express from 'express';
import * as irrgularVerbsByLevelController from '../controller/irrgularVerbsByLevel';

export const router = express.Router();

router.get('/:levelId', irrgularVerbsByLevelController.getIrregularVerbsByLevel);
