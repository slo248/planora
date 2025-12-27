import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { RegisterService } from './register.service';

@Module({
  controllers: [UserController],
  providers: [RegisterService],
})
export class UserModule {}
