import { Module } from '@nestjs/common';
import { EnvalidModule } from 'nestjs-envalid';
import { validators } from './config';

@Module({
  imports: [
    EnvalidModule.forRoot({ validators, useDotenv: true, isGlobal: true }),
  ],
})
export class ConfigModule {}
