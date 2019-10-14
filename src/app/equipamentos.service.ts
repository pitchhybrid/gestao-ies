import { Injectable } from '@angular/core';
import {equipamentos,Equipamento} from './mock'

import { isEqual } from 'lodash'
@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {

  equipamentos:Equipamento[] = equipamentos
  constructor() { 
    this.equipamentos = this.listarEquipamentos();
  }

  listarEquipamentos():Equipamento[]{
    return this.equipamentos
  }
  
  addEquipamento(value:Object){
    this.equipamentos.push(value)
  }

  editarEquipamento(formObject:Object,value:Object){
    var index = this.equipamentos.indexOf(formObject)
    this.equipamentos[index] = value
  }

  deletarEquipamento(value:Object){
    this.equipamentos = this.equipamentos.filter(function(item,index){
      return !isEqual(item,value)
    })
  }
}
