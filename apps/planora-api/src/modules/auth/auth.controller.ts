import { Controller, Get, Logger, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'nest-keycloak-connect';
import type { TypedRequest } from 'src/types/request';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  @Get('keycloak')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  keycloak(@Req() req: TypedRequest) {
    this.logger.debug(`Accessed by user: ${JSON.stringify(req.user)}`);
    return { message: 'You have accessed a protected route from Keycloak!' };
  }
}
