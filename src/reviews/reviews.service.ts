import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Reviews } from './reviews.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel(Reviews) private reviewsModel: typeof Reviews){}
  create(createReviewDto: CreateReviewDto) {
    return this.reviewsModel.create(createReviewDto  as CreationAttributes<Reviews>);
  }

  findAll() {
    return this.reviewsModel.findAll()
  }

  findOne(id: number) {
    return this.reviewsModel.findOne({where: {id}});
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const res = await this.reviewsModel.findOne({where: {id}});
    return res?.update(updateReviewDto);
  }

  remove(id: number) {
    return this.reviewsModel.destroy({where: {id}});
  }
}
