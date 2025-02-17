import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import bcrypt from "bcrypt"
import { CreationAttributes } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private UserModel: typeof User){}
  async create(createUserDto: CreateUserDto) {
    const dbUser = await this.findUserByEmail(createUserDto.email);
    if (dbUser) {
      throw new BadRequestException('Bunday email oldin royhatdan otgan');
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.UserModel.create({
      ...createUserDto,
      password: hashedPassword,
    } as CreationAttributes<User>);
  }
  findUserByEmail(email) {
    return this.UserModel.findOne({ where: { email } });
  }

  findAll() {
    return this.UserModel.findAll();
  }

  findOne(id: number) {
    return this.UserModel.findOne({where: {id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const res = await this.UserModel.findOne({where: {id}});
    res?.update(updateUserDto);
  }

  remove(id: number) {
    return this.UserModel.destroy({where: {id}});
  }
}
