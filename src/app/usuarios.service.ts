import { Injectable } from '@angular/core';
import { usuarios } from './mock';
import { Usuario } from './usuario'
import { isEqual } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios: Usuario[] = usuarios;
  constructor() { }

  listar(): Usuario[] {
    return this.usuarios;
  }
  adicionar(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  remover(usuario: Usuario): void {
    this.usuarios = this.usuarios.filter((item, index) => {
        return !isEqual( item, usuario);
    });
  }

  alterar(): void {

  }
}
