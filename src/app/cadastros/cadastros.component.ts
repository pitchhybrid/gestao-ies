import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
// import * as _ from 'lodash'
import { isEqual } from 'lodash'
import { EquipamentosService } from '../equipamentos.service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {
  form:FormGroup;
  modal: boolean = false; 
  edicao: boolean = false;
  dados: Object
  
  constructor(private formBuilder:FormBuilder,private equipamentoService:EquipamentosService){
    this.form = formBuilder.group({
      codigo:['',Validators.required],
      status:['',Validators.required],
      equipamento:['',Validators.required],
      tipo:['',Validators.required],
      modelo:['',Validators.required],
      fabricante:['',Validators.required],
      serie:['',Validators.required],
      ultimaManutencao:['',Validators.required]
    })
  }

  resetForm(){
    this.form.setValue({
        codigo:'',
        status:'',
        equipamento:'',
        tipo:'',
        modelo:'',
        fabricante:'',
        serie:'',
        ultimaManutencao:''
      });
  }

  ngOnInit() {
    
  }

  active(){
    this.modal = true 
  }

  cancelar(){
    this.modal = false
    this.resetForm()
  }

  adicionarEquipamento(){
      
    if(this.edicao){
      this.equipamentoService.editarEquipamento(this.dados,this.form.value);
      this.edicao = false
    }else{
      if(this.form.valid){
        this.equipamentoService.addEquipamento(this.form.value)
      }
    }
    this.resetForm()
    this.modal = false
  }

  editar(value:Object){
    this.edicao = true
    this.active()
    this.dados = value
    this.form.setValue(this.dados);
  }

  deletar(value:Object){
    this.equipamentoService.deletarEquipamento(value)
  }
}
