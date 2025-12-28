import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../db/prisma.service';
import { RegisterRequestDto } from './dto/register-request.dto';
import { RegisterResultDto } from './dto/register-result.dto';

@Injectable()
export class RegisterService {
  private readonly logger = new Logger(RegisterService.name);

  constructor(private readonly prisma: PrismaService) {}

  async do(req: RegisterRequestDto): Promise<RegisterResultDto> {
    await this.checkExists(req.email);

    const user = await this.prisma.user.create({
      data: {
        name: req.name,
        email: req.email,
      },
    });

    return plainToInstance(RegisterResultDto, { userId: user.id });
  }

  private async checkExists(email: string): Promise<void> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    this.logger.debug(`Found user ${JSON.stringify(user)} for email ${email}`);

    if (user) throw new BadRequestException('User already exists');
  }
}
