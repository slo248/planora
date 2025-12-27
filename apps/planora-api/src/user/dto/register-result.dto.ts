import { ApiProperty } from '@nestjs/swagger';

export class RegisterResultDto {
  @ApiProperty()
  userId: string;
}
