import express from 'express';
import * as levelController from '../controller/levels';

export const router = express.Router();

router.get('/', levelController.getLevels);
router.get('/:levelId', levelController.getLevelById);