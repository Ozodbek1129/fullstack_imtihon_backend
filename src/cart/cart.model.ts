import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "cart"})
export class Cart extends Model<Cart>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number

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
    quantity: number;
}