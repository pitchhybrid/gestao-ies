import { Component, OnInit } from '@angular/core';
import { ReservaService } from './../../reserva.service'
import { Reserva } from 'src/app/interfaces';

@Component({
  selector: 'app-reservas-dash',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  scroll: boolean = true;
  reservas: Reserva[];

  constructor( private reservaService: ReservaService) { }

  ngOnInit() {
      this.reservas = this.reservaService.listar();
  }

  filtrar(value: string){
    value = value.toUpperCase();
    if(value == ''){
      this.reservas = this.reservaService.listar();
    }
      this.reservas = this.reservas.filter(item =>{
        if(item.reserva.sala){
          return item.reserva.sala.toUpperCase().includes(value);
        }
        if(item.reserva.equipamento){
          return item.reserva.equipamento.toUpperCase().includes(value);
        }
        return item.tipoReserva.toUpperCase().includes(value);
      });
  }
}
