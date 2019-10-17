import { Injectable } from '@angular/core';
import { equipamentos } from './mock';
import { Equipamento } from './equipamento'

import { isEqual } from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class EquipamentosService {

  equipamentos: Equipamento[] = equipamentos;
  constructor() {
    this.equipamentos = this.listarEquipamentos();
  }

  listarEquipamentos(): Equipamento[] {
    return this.equipamentos;
  }

  addEquipamento(value: object): void {
    this.equipamentos.push(value);
  }

  editarEquipamento({ formObject, value }: { formObject: object; value: object; }): void {
    const index = this.equipamentos.indexOf(formObject);
    this.equipamentos[index] = value;
  }

  deletarEquipamento(value: object): void {
    this.equipamentos = this.equipamentos.filter((item, index) => {
      return !isEqual(item, value);
    });
  }
}
