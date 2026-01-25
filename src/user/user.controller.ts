import { Body, Controller, Post } from '@nestjs/common';
// 修复模块路径，确保正确引入 UserService
import { UserService } from '../user/user.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  register(@Body() registerUser: RegisterUserDto) {
    return this.userService.register(registerUser);
  }
}
