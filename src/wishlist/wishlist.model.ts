import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Products } from 'src/products/product.model';
import { User } from 'src/users/users.model';

@Table({ tableName: 'wishlist' })
export class Wishlist extends Model<Wishlist> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Products)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => Products)
  product: Products;

  @BelongsTo(() => User)
  user: User;
}
