import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel) private userRepository: typeof UserModel,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);

    return user;
  }

  async getAllUsers(): Promise<Array<Omit<UserModel, 'password'>>> {
    const users = await this.userRepository.findAll({
      attributes: { exclude: ['password'] },
    });

    return users;
  }

  async getUserByEmail(email: string): Promise<UserModel | null> {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    return user;
  }
}
