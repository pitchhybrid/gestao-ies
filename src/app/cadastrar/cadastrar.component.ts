import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  @Output() name = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  change(){
    this.name.emit('login');
  }
}
