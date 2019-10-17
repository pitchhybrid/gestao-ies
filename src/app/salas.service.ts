import { Injectable } from '@angular/core';
import { salas } from './mock';
import { Sala } from './sala'
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
