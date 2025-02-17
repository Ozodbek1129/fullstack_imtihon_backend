import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './cart.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartModel: typeof Cart){}
  create(createCartDto: CreateCartDto) {
    return this.cartModel.create(createCartDto as CreationAttributes<Cart>)
  }

  findAll() {
    return this.cartModel.findAll();
  }

  findOne(id: number) {
    return this.cartModel.findOne({where: {id}});
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const res = await this.cartModel.findOne({where: {id}})
    return res?.update(updateCartDto);
  }

  remove(id: number) {
    return this.cartModel.destroy({where: {id}});
  }
}
