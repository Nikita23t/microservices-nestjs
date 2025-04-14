import { IsString, IsEmail, Length, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name?: string;

  @IsString()
  surname?: string;

  @IsString()
  specialization?: string;

  @IsString()
  about?: string;

  @IsString()
  role: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 64)
  password: string;
  
  @IsOptional()
  passwordHash?: string; 
}
