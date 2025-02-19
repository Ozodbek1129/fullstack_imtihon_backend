import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.model';
import { Order_items } from 'src/order_items/order_items.model';
import { Order } from 'src/orders/orders.model';
import { Payment } from 'src/payments/payment.model';
import { Products } from 'src/products/product.model';
import { Reviews } from 'src/reviews/reviews.model';
import { Shipping } from 'src/shipping/shipping.model';
import { Wishlist } from 'src/wishlist/wishlist.model';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  second_name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: "user"
  })
  role: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: false
  })
  is_active: boolean;

  @Column({
    type: DataType.STRING,
  })
  avatar?: string;

  @HasMany(() => Order)
  orders: Order[];

  @HasMany(() => Cart)
  carts: Cart[];

  @HasMany(() => Payment)
  payments: Payment[];

  @HasMany(() => Reviews)
  reviews: Reviews[];

  @HasMany(() => Shipping)
  shippings: Shipping[];

  @HasMany(() => Wishlist)
  wishlists: Wishlist[];
}
