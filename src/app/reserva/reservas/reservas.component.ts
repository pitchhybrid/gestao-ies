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
  start: number = 0;
  end: number = 10;
  max: number;
  constructor(private reservaService: ReservaService) { }


  ngOnInit() {
    this.max = this.reservaService.reservas.length;
    this.reservas = this.paginate(0,10);
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
  proximo(){
    this.start += 10
    this.end += 10
    var max = this.max - this.end
    if(max < 10){
      this.start = this.start + max
      this.end = this.end + max
    }
    this.reservas = this.paginate(this.start,this.end);
  }

  anterior(){
    this.start -= 10
    this.end -= 10
    if(this.end < 10){
      this.start = 0
      this.end = 10
    }
    this.reservas = this.paginate(this.start,this.end);
  }

  paginate(start: number,end:number): Reserva[]{
    var reservas:Reserva[] = this.reservaService.listar();
    var a: Reserva[] = []
    for(var i = start;i < end;i++){
      a.push(reservas[i])
    }
    return a;
  }
}
