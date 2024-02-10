import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Book } from '../models/Book';
import { IrregularVerb } from '../models/IrregularVerb';
import { Level } from '../models/Level';

dotenv.config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const url = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:5432/${PGDATABASE}`;
console.log(url);

export const dbInit = () => {
  return new Sequelize(url, {
    models: [Book, IrregularVerb, Level],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });
};