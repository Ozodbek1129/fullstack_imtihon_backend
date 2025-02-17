import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Order } from 'src/orders/orders.model';
import { Products } from 'src/products/product.model';

@Table({ tableName: 'order_items' })
export class Order_items extends Model<Order_items> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order_id: number;
  
  @ForeignKey(()=> Products)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @BelongsTo(() => Order)
  order: Order;

  @BelongsTo(() => Products)
  product: Products;
}
