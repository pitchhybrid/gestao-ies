import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { usuarios } from './../mock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Output() name = new EventEmitter<string>();
  @Output() login = new EventEmitter<string>();

  usuarios = usuarios;
  
  matricula:string;
  senha: string;
  router:Router;

  constructor(router:Router){
    this.router = router;
  }
  
  ngOnInit() {
    
  }

  change(){
    this.name.emit('cadastrar');
  }

  logado():boolean{
    for(var i of usuarios){
      if(this.matricula == i.matricula && this.senha == i.senha)
        return true
    }
    return false;
  }

  logar(){
    if(this.logado()){
      this.login.emit('dashboard')
      this.router.navigate(['/dashboard'])
    }else{
      this.login.emit('error')
    }
  }
}
