import { Injectable } from '@nestjs/common';
import { CreateShippingDto } from './dto/create-shipping.dto';
import { UpdateShippingDto } from './dto/update-shipping.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Shipping } from './shipping.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class ShippingService {
  constructor(@InjectModel(Shipping) private shippingModel: typeof Shipping){}
  create(createShippingDto: CreateShippingDto) {
    return this.shippingModel.create(createShippingDto as CreationAttributes<Shipping>);
  }

  findAll() {
    return this.shippingModel.findAll();
  }

  findOne(id: number) {
    return this.shippingModel.findOne({where: {id}});
  }

  async update(id: number, updateShippingDto: UpdateShippingDto) {
    const res  = await this.shippingModel.findOne({where: {id}})
    return res?.update(updateShippingDto);
  }

  remove(id: number) {
    return this.shippingModel.destroy({where: {id}});
  }
}
