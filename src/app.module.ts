import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt.guard';
import { UserModule } from './user/user.module';
import { KidsService } from './kids/kids.service';
import { KidsModule } from './kids/kids.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    UserModule,
    KidsModule,],
  controllers: [],
  providers: [
    {provide: APP_GUARD, useClass: JwtAuthGuard},
    KidsService
  ],
})
export class AppModule {}
