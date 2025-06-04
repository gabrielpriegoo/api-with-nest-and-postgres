import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { AuthenticateController } from './http/controllers/authenticate.controller';
import { CreateAccountController } from './http/controllers/create-account.controller';
import { envSchema } from './env';
import { PrismaService } from './database/prisma/prisma.service';
import { CreateQuestionController } from './http/controllers/create-questions.controller';
import { FetchRecentsQuestions } from './http/controllers/fetch-recent-questions.controller';
import { HttpModule } from './http/http.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
  ],
})
export class AppModule {}
