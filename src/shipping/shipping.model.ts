import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "shipping"})
export class Shipping extends Model<Shipping>{
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
    order_id: number;
    
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
}