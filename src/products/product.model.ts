import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "products"})
export class Products extends Model<Products>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    price: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    naeme: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    date: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    category_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    image?: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    quantity: number;
}