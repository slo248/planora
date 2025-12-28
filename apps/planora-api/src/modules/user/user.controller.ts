import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthGuard } from 'nest-keycloak-connect';
import type { TypedRequest } from 'src/types/request';
import { RegisterRequestDto } from './dto/register-request.dto';
import { RegisterService } from './register.service';

@Controller('users')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  @ApiBearerAuth()
  register(@Req() req: TypedRequest) {
    return this.registerService.do(
      plainToInstance(RegisterRequestDto, req.user),
    );
  }
}
