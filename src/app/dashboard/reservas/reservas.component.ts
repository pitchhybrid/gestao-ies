import { Component, OnInit } from '@angular/core';
import { ReservaService } from './../../reserva.service'

@Component({
  selector: 'app-reservas-dash',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  scroll: boolean = true;
  constructor( private reservaService: ReservaService) { }

  ngOnInit() {
  }

}
