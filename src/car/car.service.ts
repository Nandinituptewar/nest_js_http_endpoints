import { Injectable , HttpException } from '@nestjs/common' ;
import {CARS} from './car.mock' ;
import { Logger } from '@nestjs/common';


@Injectable()
export class CarService {

    private cars= CARS ;
    public getCars () :Promise<any> {
        return new Promise((resolve)=>{
            return resolve(this.cars);
        });
    }

    async getCarById (id:number){
            const carId =  Number(id);
            const carobj = this.cars.find((car)=>car.id===carId);
            if(!carobj){
                throw new HttpException("Not Found",404);
            }
            return carobj;
    }

    public postCar (car) {
        return this.cars.push(car);
    }
//
    async deleteCarById (id:number)  {
        const carId = Number(id); 
        const index = this.cars.findIndex((car)=>car.id===carId) ;
        if(index==-1){
            throw new HttpException("Not Found",404);
        }
        this.cars.splice(index,1);
        return await this.cars;
    }
///
    async putCarById (id : number , propertyName : string, propertyValue : string ){
        const carId = Number(id);
        const index = this.cars.findIndex((car)=>car.id===carId) ;
        if(index==-1){
            throw new HttpException("Not Found",404);
        }
        this.cars[index][propertyName] = propertyValue;
        return await this.cars;
    }
}
