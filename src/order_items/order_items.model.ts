import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "order_items"})
export class Order_items extends Model<Order_items>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    order_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    price: number;
}