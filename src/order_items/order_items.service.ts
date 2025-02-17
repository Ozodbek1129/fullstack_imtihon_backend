import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order_items } from './order_items.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class OrderItemsService {
  constructor(@InjectModel(Order_items) private order_itemsModel: typeof Order_items){}
  create(createOrderItemDto: CreateOrderItemDto) {
    return this.order_itemsModel.create(createOrderItemDto as CreationAttributes<Order_items>);
  }

  findAll() {
    return this.order_itemsModel.findAll();
  }

  findOne(id: number) {
    return this.order_itemsModel.findOne({where: {id}});
  }

  async update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    const res = await this.order_itemsModel.findOne({where: {id}});
    return res?.update(updateOrderItemDto);
  }

  remove(id: number) {
    return this.order_itemsModel.destroy({where: {id}});
  }
}
