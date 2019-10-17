import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() name = new EventEmitter<string>();
  @Output() login = new EventEmitter<string>();

  usuarios: Usuario[];
  form: FormGroup;
  router: Router;

  constructor(router: Router, formBuilder: FormBuilder, private usuariosService: UsuariosService) {
    this.router = router;
    this.form = formBuilder.group({
      matricula: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.usuarios = this.usuariosService.listar();
  }

  change() {
    this.name.emit('cadastrar');
  }

  logado(): boolean {
    if (this.form.valid) {
      for (const usuario of this.usuarios) {
        if (this.form.value.matricula === usuario.matricula && this.form.value.senha === usuario.senha) {
          localStorage.setItem('LOGIN', btoa(`{"login":"${usuario.matricula}","senha":"${usuario.senha}"}`));
          return true;
        }
      }
    }
    return false;
  }

  logar() {
    if (this.logado()) {
      this.login.emit('dashboard');
      this.router.navigate(['/dashboard']);
    } else {
      this.login.emit('error');
    }
  }
}
