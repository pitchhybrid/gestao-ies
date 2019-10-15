import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../usuarios.service';
import { Usuario, usuarios } from '../mock';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  @Output() name = new EventEmitter<string>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService) {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      matricula: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  change() {
    this.name.emit('login');
  }

  cadastrar() {
    const index = this.usuariosService.usuarios[this.usuariosService.usuarios.length - 1 ].id;
    if (this.form.valid) {
      if (this.form.value.senha === this.form.value.confirmarSenha) {
        const { confirmarSenha, ...usuario} = this.form.value;
        this.usuariosService.adicionar(usuario);
      }
    }
  }
}
