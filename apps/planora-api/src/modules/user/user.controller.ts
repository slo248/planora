import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AuthGuard } from 'nest-keycloak-connect';
import type { TypedRequest } from 'src/types/request';
import { RegisterRequestDto } from './dto/register-request.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
export class UserController {
  constructor(private readonly registerService: UserService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, type: UserDto })
  register(@Req() req: TypedRequest) {
    return this.registerService.register(
      plainToInstance(RegisterRequestDto, req.user),
    );
  }

  @Get('me')
  @ApiResponse({ status: HttpStatus.OK, type: UserDto })
  getMe(@Req() req: TypedRequest) {
    return this.registerService.getByEmail(req.user.email);
  }
}
