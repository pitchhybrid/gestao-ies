import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any): any {
    var val = value
    if(typeof value == 'string'){
      if(value == 'true'){
        val = true 
      }
      if(value == 'false'){
        val = false
      }
    }
    if(val){
      return 'ATIVO'
    }
    else{
      return 'INATIVO'
    }
  }

}
