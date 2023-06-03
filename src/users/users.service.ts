import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    const newUser = this.userRepository.create(createUserInput);

    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    const tmpUser = {
      username: 'test',
      password: 'test',
    };

    return tmpUser;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
