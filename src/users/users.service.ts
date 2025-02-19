import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';
import { CreationAttributes } from 'sequelize';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private UserModel: typeof User, 
  private jwtService: JwtService,
  ){}
  async create(createUserDto: CreateUserDto) {
    const dbUser = await this.findUserByEmail(createUserDto.email);
    if (dbUser) {
      throw new BadRequestException('Bunday email oldin royhatdan otgan');
    }
    if (!createUserDto.password) {
      throw new Error('Password is required');
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

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.UserModel.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Email yoki parol notogri!');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Email yoki parol notogri!');
    }

    const token = this.jwtService.sign({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return { message: 'Muvaffaqiyatli login', token, user };
  }

  findAll() {
    return this.UserModel.findAll();
  }

  findOne(id: number) {
    return this.UserModel.findOne({where: {id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const res = await this.UserModel.findOne({where: {id}});
    return res?.update(updateUserDto);
  }

  remove(id: number) {
    return this.UserModel.destroy({where: {id}});
  }
  async updateAvatar(userId: number, filename: string) {
    const user = await this.UserModel.findByPk(userId);
    if (!user) throw new Error('User not found');

    user.avatar = `/uploads/${filename}`;
    await user.save();
    return user;
  }
  
}
