import { Column, DataType, Model, PrimaryKey, Table, AutoIncrement, AllowNull, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Level } from './Level';

@Table({
    tableName: 'irregularVerbs',
    createdAt: false,
    updatedAt: false,
})

export class IrregularVerb extends Model {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    infinitive!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    pastSimple!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    pastParticiple!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    translation!: string;

    @AllowNull(true)
    @ForeignKey(() => Level)
    @Column({
        type: DataType.INTEGER,
        field: 'level_id',
    })
    levelId!: number;

    @BelongsTo(() => Level)
    level!: Level | null;
}