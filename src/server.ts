import  express from 'express';
import cors from 'cors';

import { router as bookRouter } from './routes/books';
import { router as levelRouter } from './routes/levels';
import { router as irregularVerbsByLevelRouter } from './routes/irregularVerbsByLevel';
import { dbInit } from './utils/initDB';

const app = express();
app.use(cors());

dbInit();


app.use('/books', bookRouter);
app.use('/levels', levelRouter);
// app.use('/irregular-verbs', irregularVerbRouter);
app.use('/irregularVerbsByLevel', irregularVerbsByLevelRouter);

app.listen(5000);
