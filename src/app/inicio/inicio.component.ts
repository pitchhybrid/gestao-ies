import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @Output() rota = new EventEmitter<string>();
  rendered: string;
  
  constructor() { }

  ngOnInit() {
    this.rendered = 'app';
  }

  listener(event){
    if(event == 'app'|| event == 'cadastrar' || event == 'login')
    this.rendered = event;
    if(event == 'error')
    this.rota.emit(event)
    if(event == 'dashboard')
    this.rota.emit(event)
  }
}
