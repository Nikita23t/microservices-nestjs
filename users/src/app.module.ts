import { Module } from '@nestjs/common'
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [],
  providers: [],
  imports: [
    MongooseModule.forRoot(`${process.env.MONGO}`),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    AuthModule
  ],
})
export class AppModule {}