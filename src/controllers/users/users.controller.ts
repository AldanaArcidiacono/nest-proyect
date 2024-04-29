import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('text')
  getProductsFilter() {
    return { message: 'This is a verif text of users' };
  }
}
