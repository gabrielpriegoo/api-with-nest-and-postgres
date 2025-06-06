import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AuthenticateController } from './controllers/authenticate.controller';
import { CreateAccountController } from './controllers/create-account.controller';
import { CreateQuestionController } from './controllers/create-questions.controller';
import { FetchRecentsQuestions } from './controllers/fetch-recent-questions.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentsQuestions,
  ],
  providers: [],
})
export class HttpModule {}
