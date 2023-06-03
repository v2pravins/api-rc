import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(1); // username

    if (user && user.password === password) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(user: User) {
    // loginUserInput: LoginUserInput
    // const payload = { name: user.name, sub: user.id };
    // const user = await this.userService.findOne(1); //loginUserInput.username
    // const { password, ...result } = user;

    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }), //this.jwtService.sign(payload),
      user,
    };
  }
}
