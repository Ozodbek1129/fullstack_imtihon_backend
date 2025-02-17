import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "reviews"})
export class Reviews extends Model<Reviews>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      })
      id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    product_id: number;
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    rating: number;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    comment: string;
}