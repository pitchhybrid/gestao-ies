import { Component, OnInit } from '@angular/core';
import { SalasService } from '../salas.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {
  scroll: boolean = true;
  constructor( private salasService: SalasService) { }

  ngOnInit() {
  }

}
