import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TypedRequest } from 'src/types/request';
import { PrismaService } from '../modules/db/prisma.service';

@Injectable()
export class GetUserInterceptor implements NestInterceptor {
  constructor(private readonly prisma: PrismaService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest<TypedRequest>();
    const email = request.user?.email;
    if (!email) {
      throw new BadRequestException('Email not provided in request');
    }
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    request.user.id = user.id;
    return next.handle();
  }
}
