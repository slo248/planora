import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'nest-keycloak-connect';

@Controller('auth')
export class AuthController {
  @Get('keycloak')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  keycloak() {
    return { message: 'You have accessed a protected route from Keycloak!' };
  }
}
