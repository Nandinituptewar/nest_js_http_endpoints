import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [CarModule,
          MongooseModule.forRoot('http://localhost:27017')],

})
export class AppModule {}
