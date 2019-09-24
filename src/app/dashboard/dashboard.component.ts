import { Component, OnInit } from '@angular/core';
import  { mensagens ,professores } from '../mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menssagens: string[] = mensagens;
  professores: string[] = professores;
  constructor() { }

  ngOnInit() {
  }

}
