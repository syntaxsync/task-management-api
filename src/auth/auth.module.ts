import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepositry } from './user.repositry';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepositry])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}