import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Order } from "src/orders/orders.model";
import { User } from "src/users/users.model";

@Table({tableName: "shipping"})
export class Shipping extends Model<Shipping>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
        type: DataType.STRING,
        allowNull: false
    })
    address: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    city: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    country: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone_number: string;

    @BelongsTo(() => User)
    user: User;
  
    @BelongsTo(() => Order)
    order: Order;
}