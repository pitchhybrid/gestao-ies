import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../../avisos.service';
import { Aviso } from '../../aviso';

@Component({
  selector: 'app-avisos-dash',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  avisos: Aviso[];
  scroll = true;
  constructor( private avisosService: AvisosService) { }

  ngOnInit() {
    this.avisos = this.avisosService.listar();
  }

  filtrar(event: string) {
    if (event === '') {
      this.avisos = this.avisosService.listar();
      return;
    }
    this.avisos = this.avisos.filter((item, index) => {
      return item.aviso.includes(event.toUpperCase());
    });
  }
}
