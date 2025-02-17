import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "wishlist"})
export class Wishlist extends Model<Wishlist>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      })
      id: number;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    product_id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number;
}