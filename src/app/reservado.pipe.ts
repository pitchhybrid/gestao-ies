import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reservado'
})
export class ReservadoPipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): any {
    if(value){
      return "CONCLUIDO"
    }
    return "RESERVADO";
  }

}
