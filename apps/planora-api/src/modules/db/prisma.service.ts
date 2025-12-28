import { Inject, Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { ENVALID } from 'nestjs-envalid';
import type { Config } from 'src/config/config';
import { PrismaClient } from 'src/generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(@Inject(ENVALID) env: Config) {
    const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });
    super({ adapter });
  }
}
