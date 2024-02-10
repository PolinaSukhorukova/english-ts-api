import { Level } from "../models/Level";

export const getLevels = async() => {
    return Level.findAll();
}

export const getLevelById = async (levelId: number) => {
    return Level.findByPk(levelId);
};

