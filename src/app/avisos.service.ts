import { Injectable } from '@angular/core';
import { isEqual } from 'lodash'

import { avisos ,Aviso} from './mock';
@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  avisos:Aviso[] = avisos

  constructor() { }

  listar(){
    return this.avisos
  }

  addAviso(value:string){
    var last = this.avisos[this.avisos.length -1 ].id
    this.avisos.push({id:last + 1,aviso:value})
  }

  deletarAviso(aviso:Aviso){
    this.avisos = this.avisos.filter(function(item,index){
        return !isEqual(item,aviso)
    });  
  }
  
}
