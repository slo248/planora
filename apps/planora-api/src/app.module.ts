import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from './modules/config/config.module';
import { DbModule } from './modules/db/db.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [AuthModule, ConfigModule, DbModule, UserModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
