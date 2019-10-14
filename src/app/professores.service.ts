import { Injectable } from '@angular/core';
import { isEqual } from 'lodash'
import {Professor,professores} from './mock'
@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  professores:Professor[] = professores;
  constructor() { }

  listar(){
    return this.professores
  }

  addProfessor(value:string){
    var index:number = this.professores[this.professores.length -1 ].id 
    this.professores.push({id:index +1,professor:value })
  }

  deletarProfessor(value:Professor){
    this.professores = this.professores.filter(function(item,index){
        return !isEqual(item,value);
    });
  }
}
