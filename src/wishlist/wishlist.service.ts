import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Wishlist } from './wishlist.model';
import { CreationAttributes } from 'sequelize';
import { Products } from 'src/products/product.model';

@Injectable()
export class WishlistService {
  constructor(@InjectModel(Wishlist) private wishlistModel: typeof Wishlist){}
  create(createWishlistDto: CreateWishlistDto) {
    return this.wishlistModel.create(createWishlistDto as CreationAttributes<Wishlist>)
  }

  findAll(userId: number) {
    return this.wishlistModel.findAll({
      where: { user_id: userId },
      include: [{ model: Products }] 
    });
  }
  

  findOne(id: number) {
    return this.wishlistModel.findOne({where: {id}});
  }

  async update(id: number, updateWishlistDto: UpdateWishlistDto) {
    const res = await this.wishlistModel.findOne({where: {id}})
    return res?.update(updateWishlistDto);
  }

  remove(product_id: number) {
    return this.wishlistModel.destroy({where: {product_id}});
  }
}
