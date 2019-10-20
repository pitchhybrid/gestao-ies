import { Component, OnInit } from '@angular/core';
import { Reserva } from './../../reserva'
import { ReservaService } from 'src/app/reserva.service';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  reservas: Reserva[];
  constructor(private reservaService: ReservaService) { }


  ngOnInit() {
    this.reservas = this.reservaService.listar();
  }

  filtrar(search: string){
    search = search.toUpperCase();
    if(search === ''){
      this.reservas = this.reservaService.listar();
      return;
    }
    this.reservas = this.reservas.filter((item,index)=>{ 
      return item.dataReserva.toDateString().includes(search) || 
      item.professor.professor.toUpperCase().includes(search) ||
      item.tipoReserva.toUpperCase().includes(search)
    });
  }

  editar(reserva: Reserva){
    console.log(reserva)
  }
}
