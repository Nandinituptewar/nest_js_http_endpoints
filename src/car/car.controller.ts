import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import {CarService} from './car.service' ;
import {CarDTO} from './car.dto'
import { query } from 'express';

@Controller('car')
export class CarController {

    constructor(private carservice : CarService){}
      
    @Get()
      async getCars(){
        return this.carservice.getCars();
    }
    @Post()  
      async postCar(@Body() car: CarDTO){
        return await this.carservice.postCar(car);
    }
    @Delete(':id') 
      async deleteCarById(@Param('id') id:number){
        return await this.carservice.deleteCarById(id);
    }
    @Get(':id')
       async getCarById(@Param('id') id:number){
         return await this.carservice.getCarById(id);
    }
    @Put(':id')
       async putCarById(@Param('id') id:number, @Query() query ){
          const propertyName = query.property_name;
          const propertyValue = query.property_value;
          return await this.carservice.putCarById(id,propertyName,propertyValue);
    }

}
