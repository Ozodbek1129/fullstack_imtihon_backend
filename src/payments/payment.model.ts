import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'payments'})
export class Payment extends Model<Payment>{
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
    amount: number;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    status: string;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    payment_method: string;
}