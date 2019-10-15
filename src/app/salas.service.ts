import { Injectable } from '@angular/core';
import { salas , Sala} from './mock';
@Injectable({
  providedIn: 'root'
})
export class SalasService {
  salas: Sala[] = salas;
  constructor() { }

  listar(): Sala[] {
    return this.salas;
  }
}
