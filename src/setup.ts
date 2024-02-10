import { Book } from "./models/Book"
import { IrregularVerb } from "./models/IrregularVerb";
import { Level } from "./models/Level";
import { dbInit } from "./utils/initDB";

(async () => {
    dbInit();
    await Book.sync({ alter: true });
    await Level.sync({ alter: true });
    await IrregularVerb.sync({ force: true });

    await Level.create({ name: 'Elementary' });
    await Level.create({ name: 'Pre-Intermediate' });
    await Level.create({ name: 'Intermediate' });
    await Level.create({ name: 'Upper-Intermediate' });
    await Level.create({ name: 'Advanced' });
    await IrregularVerb.create({infinitive: "be", pastSimple: "was/were", pastParticiple: "been", translation: "быть", levelId: "1",  });
})()