import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany, HasOne } from "sequelize-typescript";
import { Order_items } from "src/order_items/order_items.model";
import { Payment } from "src/payments/payment.model";
import { Shipping } from "src/shipping/shipping.model";
import { User } from "src/users/users.model";

@Table({ tableName: "orders" })
export class Order extends Model<Order> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    total_price: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    status: string;

    @BelongsTo(() => User)
    user: User;
  
    @HasMany(() => Order_items)
    orderItems: Order_items[];
  
    @HasOne(() => Payment)
    payment: Payment;
  
    @HasOne(() => Shipping)
    shipping: Shipping;
}
