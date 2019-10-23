import { Injectable } from '@angular/core';
import { isEqual } from 'lodash';

import { avisos} from './mock';
import {Aviso} from './aviso';
@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  avisos: Aviso[] = avisos;

  constructor() { }

  listar() {
    return this.avisos;
  }

  addAviso(value: string) {
    const last = this.avisos[this.avisos.length - 1 ].id;
    this.avisos.unshift({id: last + 1, aviso: value});
  }

  deletarAviso(aviso: Aviso) {
    this.avisos = this.avisos.filter((item, index) => {
        return !isEqual(item, aviso);
    });
  }

}
