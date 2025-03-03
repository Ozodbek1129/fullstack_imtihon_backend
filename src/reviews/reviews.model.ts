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

@Table({ tableName: 'reviews' })
export class Reviews extends Model<Reviews> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

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
  rating: number;
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  comment: string;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Products)
  product: Products;
}
