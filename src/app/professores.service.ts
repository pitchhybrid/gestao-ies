import { Injectable } from '@angular/core';
import { isEqual } from 'lodash';
import { professores} from './mock';
import { Professor } from './professor'
@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  professores: Professor[] = professores;
  constructor() { }

  listar(): Professor[] {
    return this.professores;
  }

  addProfessor(value: object): void {
    const index: number = this.professores[this.professores.length - 1 ].id;
    this.professores.push(Object.assign({id: index + 1},value));
  }

  deletarProfessor(value: Professor): void {
    this.professores = this.professores.filter((item, index) => {
        return !isEqual(item, value);
    });
  }
}
