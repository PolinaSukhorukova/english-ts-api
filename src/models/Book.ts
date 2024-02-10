import { Column, DataType, Model, PrimaryKey, Table, AutoIncrement, AllowNull } from 'sequelize-typescript';

@Table({
    tableName: 'books',
    createdAt: false,
    updatedAt: false,
})

export class Book extends Model {
    @PrimaryKey
    @AutoIncrement // Add missing import statement for AutoIncrement decorator
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    title!: string;
}
