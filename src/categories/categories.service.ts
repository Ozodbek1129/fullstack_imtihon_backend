import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Categories } from './categories.model';
import { CreationAttributes } from 'sequelize';
import { Products } from 'src/products/product.model';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Categories) private categoryModel: typeof Categories){}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto as CreationAttributes<Categories>);
  }

  async findAll() {
    return this.categoryModel.findAll({
      include: [{ model: Products }], 
    });
  }

  findOne(id: number) {
    return this.categoryModel.findOne({where: {id}, include: [{ model: Products }], });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
     const res = await this.categoryModel.findOne({where: {id}})
    return res?.update(updateCategoryDto);
  }

  remove(id: number) {
    return this.categoryModel.destroy({where: {id}});
  }
}
