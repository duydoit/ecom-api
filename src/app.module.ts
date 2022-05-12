import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    // Configuration
    // https://docs.nestjs.com/techniques/configuration
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    //Authentication
    AuthModule,
    //Shared Module
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
