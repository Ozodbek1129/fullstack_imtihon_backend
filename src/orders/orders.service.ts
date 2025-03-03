import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './orders.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private orderModel: typeof Order){}
  create(createOrderDto: CreateOrderDto) {
    return this.orderModel.create(createOrderDto as CreationAttributes<Order>);
  }

  findAll() {
    return this.orderModel.findAll();
  }

  findOne(id: number) {
    return this.orderModel.findOne({where: {id}});
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const res = await this.orderModel.findOne({where: {id}})
    return res?.update(updateOrderDto);
  }

  remove(id: number) {
    return this.orderModel.destroy({where: {id}});
  }
}
