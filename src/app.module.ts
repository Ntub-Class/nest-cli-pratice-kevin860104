import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { StudentModule } from './student/student.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [UserModule, StudentModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
