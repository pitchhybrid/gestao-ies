import { Injectable } from '@angular/core';
import { Reserva } from './reserva'
import { reservas } from './mock'

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  reservas: Reserva[] = reservas;

  constructor() { }

  listar(): Reserva[] {
    return this.reservas;
  }

  addReserva(reserva: Reserva){
    var id = this.reservas[this.reservas.length -1].id + 1
    this.reservas.push(Object.assign({id,finalizada:false},reserva));
  }

  alterarReserva(){

  }
}
