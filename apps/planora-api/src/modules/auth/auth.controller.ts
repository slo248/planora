import {
  Controller,
  Get,
  HttpStatus,
  Logger,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from 'nest-keycloak-connect';
import type { TypedRequest } from 'src/types/request';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  @Get('keycloak')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Accessed protected route successfully',
    type: String,
  })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  keycloak(@Req() req: TypedRequest) {
    this.logger.debug(`Accessed by user: ${JSON.stringify(req.user)}`);
    return 'You have accessed a protected route from Keycloak!';
  }
}
