import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Wishlist } from './wishlist.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class WishlistService {
  constructor(@InjectModel(Wishlist) private wishlistModel: typeof Wishlist){}
  create(createWishlistDto: CreateWishlistDto) {
    return this.wishlistModel.create(createWishlistDto as CreationAttributes<Wishlist>)
  }

  findAll() {
    return this.wishlistModel.findAll();
  }

  findOne(id: number) {
    return this.wishlistModel.findOne({where: {id}});
  }

  async update(id: number, updateWishlistDto: UpdateWishlistDto) {
    const res = await this.wishlistModel.findOne({where: {id}})
    return res?.update(updateWishlistDto);
  }

  remove(id: number) {
    return this.wishlistModel.destroy({where: {id}});
  }
}
