import { IsString, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name?: string;

  @IsString()
  surname?: string;

  @IsString()
  specialization?: string;

  @IsString()
  about?: string;

  @IsString()
  role?: string;

  @IsEmail()
  email?: string;

  @IsString()
  refreshToken?: string;
}
