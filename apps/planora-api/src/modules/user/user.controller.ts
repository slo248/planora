import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthGuard } from 'nest-keycloak-connect';
import type { TypedRequest } from 'src/types/request';
import { RegisterRequestDto } from './dto/register-request.dto';
import { UserService } from './user.service';

@Controller('users')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class UserController {
  constructor(private readonly registerService: UserService) {}

  @Post()
  register(@Req() req: TypedRequest) {
    return this.registerService.register(
      plainToInstance(RegisterRequestDto, req.user),
    );
  }

  @Get('me')
  getMe(@Req() req: TypedRequest) {
    return this.registerService.getByEmail(req.user.email);
  }
}
