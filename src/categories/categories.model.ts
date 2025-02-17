import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "Categories"})
export class Categories extends Model<Categories>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      })
      id: number;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string
}