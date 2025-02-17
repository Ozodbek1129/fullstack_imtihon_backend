import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Categories } from './categories.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Categories) private categoryModel: typeof Categories){}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModel.create(createCategoryDto as CreationAttributes<Categories>);
  }

  findAll() {
    return this.categoryModel.findAll();
  }

  findOne(id: number) {
    return this.categoryModel.findOne({where: {id}});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
     const res = await this.categoryModel.findOne({where: {id}})
    return res?.update(updateCategoryDto);
  }

  remove(id: number) {
    return this.categoryModel.destroy({where: {id}});
  }
}
