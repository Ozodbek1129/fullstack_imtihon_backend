import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "orders"})
export class Orders extends Model<Orders>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    total_price: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    status: string;
}