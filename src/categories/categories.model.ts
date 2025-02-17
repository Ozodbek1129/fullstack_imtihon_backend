import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Products } from 'src/products/product.model';

@Table({ tableName: 'Categories' })
export class Categories extends Model<Categories> {
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

  @HasMany(() => Products)
  products: Products[];
}
