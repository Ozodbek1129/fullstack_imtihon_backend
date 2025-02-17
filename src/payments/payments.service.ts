import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './payment.model';
import { CreationAttributes } from 'sequelize';

@Injectable()
export class PaymentsService {
  constructor(@InjectModel(Payment) private paymentModel: typeof Payment){}
  create(createPaymentDto: CreatePaymentDto) {
    return this.paymentModel.create(createPaymentDto as CreationAttributes<Payment>);
  }

  findAll() {
    return this.paymentModel.findAll();
  }

  findOne(id: number) {
    return this.paymentModel.findOne({where: {id}});
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const res = await this.paymentModel.findOne({where: {id}});
    return res?.update(updatePaymentDto);
  }

  remove(id: number) {
    return this.paymentModel.destroy({where: {id}});
  }
}
