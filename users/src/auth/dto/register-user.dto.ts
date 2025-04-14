import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { IsEmail, IsString, Length } from 'class-validator';

export class RegisterUserDto extends CreateUserDto {
  @IsEmail()
  declare email: string;

  @IsString()
  @Length(6, 64)
  declare password: string;
}
