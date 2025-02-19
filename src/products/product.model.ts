import {
    BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.model';
import { Categories } from 'src/categories/categories.model';
import { Order_items } from 'src/order_items/order_items.model';
import { Reviews } from 'src/reviews/reviews.model';
import { Wishlist } from 'src/wishlist/wishlist.model';

@Table({ tableName: 'products' })
export class Products extends Model<Products> {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: false
  })
  is_new: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: false
  })
  is_like: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  date: string;

  @ForeignKey(() => Categories)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  category_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @BelongsTo(() => Categories)
  category: Categories;

  @HasMany(() => Order_items)
  orderItems: Order_items[];

  @HasMany(() => Cart)
  carts: Cart[];

  @HasMany(() => Reviews)
  reviews: Reviews[];

  @HasMany(() => Wishlist)
  wishlists: Wishlist[];
}
