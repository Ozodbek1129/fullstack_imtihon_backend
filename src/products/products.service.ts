import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from './product.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Products) private productModel: typeof Products){}
  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto as CreationAttributes<Products>)
  }

  findAll() {
    return this.productModel.findAll();
  }

  findOne(id: number) {
    return this.productModel.findOne({where: {id}});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const res = await this.productModel.findOne({where: {id}});
    return res?.update(updateProductDto);
  }

  remove(id: number) {
    return this.productModel.destroy({where: {id}});
  }
}
