import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAughtGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  getHello(): string {
    return ''; // this.appService.getHello();
  }
}
