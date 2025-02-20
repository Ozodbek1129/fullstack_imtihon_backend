import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from './product.model';
import { Op } from 'sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Products) private productModel: typeof Products) {}

  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto as CreationAttributes<Products>);
  }

  async findAll(categoryId?: number, search?: string, page: number = 1, limit: number = 10) {
    const where: any = {};

    if (categoryId) {
      where.category_id = categoryId;
    }

    if (search) {
      where.name = { [Op.iLike]: `%${search}%` };
    }

    const offset = (page - 1) * limit;

    const { count, rows } = await this.productModel.findAndCountAll({
      where,
      limit,
      offset,
    });

    return {
      products: rows,
      total: count,
      totalPages: Math.ceil(count / limit),
    };
  }

  findOne(id: number) {
    return this.productModel.findOne({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const res = await this.productModel.findOne({ where: { id } });
    return res?.update(updateProductDto);
  }

  remove(id: number) {
    return this.productModel.destroy({ where: { id } });
  }

  async updateImage(productId: number, filename: string) {
    const product = await this.productModel.findByPk(productId);
    if (!product) throw new Error('Product not found');

    product.image = `/uploads/${filename}`;
    await product.save();
    return product;
  }
}
