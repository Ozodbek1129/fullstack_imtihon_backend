import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Products } from "src/products/product.model";
import { User } from "src/users/users.model";

@Table({tableName: "cart"})
export class Cart extends Model<Cart>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(()=> User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number;

    @ForeignKey(()=> Products)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    product_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity: number;

    @BelongsTo(() => User)
    user: User;
  
    @BelongsTo(() => Products)
    product: Products;
}