import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../db/prisma.service';
import { RegisterRequestDto } from './dto/register-request.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly prisma: PrismaService) {}

  async register(req: RegisterRequestDto): Promise<UserDto> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: req.email },
    });
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    const user = await this.prisma.user.create({
      data: {
        name: req.name,
        email: req.email,
      },
    });

    return plainToInstance(UserDto, {
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }

  async getByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return plainToInstance(UserDto, {
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }
}
