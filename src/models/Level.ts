import { Column, DataType, Model, PrimaryKey, Table, AutoIncrement, AllowNull } from 'sequelize-typescript';

@Table({
    tableName: 'levels',
    createdAt: false,
    updatedAt: false,
})

export class Level extends Model {
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
    name!: string;
}