import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { usuarios } from './../mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Output() name = new EventEmitter<string>();
  
  usuarios = usuarios;
  
  matricula:string;
  senha: string;

  ngOnInit() {
    
  }

  change(){
    this.name.emit('cadastrar');
  }

  logar(){
    for(var i of usuarios){
      if(this.matricula == i.matricula && this.senha == i.senha){
        this.name.emit('none')
      }
    }
  }
}
