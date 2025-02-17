import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Order } from "src/orders/orders.model";
import { User } from "src/users/users.model";

@Table({tableName: 'payments'})
export class Payment extends Model<Payment>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

@ForeignKey(()=> Order)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    order_id: number;

    @ForeignKey(()=> User)
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

    @BelongsTo(() => User)
    user: User;
  
    @BelongsTo(() => Order)
    order: Order;
}