import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EquipamentosService } from 'src/app/equipamentos.service';
import { Equipamento } from 'src/app/interfaces';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.component.html',
  styleUrls: ['./equipamentos.component.css']
})
export class EquipamentosComponent implements OnInit {

  form: FormGroup;
  modal = false;
  edicao = false;
  dados: object;
  start: number = 0;
  end: number = 10;
  max: number;
  equipamentos: Equipamento[];

  constructor(private formBuilder: FormBuilder, private equipamentoService: EquipamentosService) {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      status: ['', Validators.required],
      equipamento: ['', Validators.required],
      tipo: ['', Validators.required],
      modelo: ['', Validators.required],
      fabricante: ['', Validators.required],
      serie: ['', Validators.required],
      ultimaManutencao: ['', Validators.required]
    });
  }

  resetForm() {
    this.form.setValue({ id: '', status: '', equipamento: '', tipo: '', modelo: '', fabricante: '', serie: '', ultimaManutencao: ''});
  }

  ngOnInit() {
    this.max = this.equipamentoService.equipamentos.length;
    this.equipamentos = this.paginate(0,10);
  }

  proximo(){
    this.start += 10
    this.end += 10
    var max = this.max - this.end
    if(max < 10){
      this.start = this.start + max
      this.end = this.end + max
      console.log(max)
    }
    this.equipamentos = this.paginate(this.start,this.end);
  }

  anterior(){
    this.start -= 10
    this.end -= 10
    if(this.end < 10){
      this.start = 0
      this.end = 10
    }
    this.equipamentos = this.paginate(this.start,this.end);
  }

  paginate(start: number,end:number): Equipamento[]{
    var equipamentos:Equipamento[] = this.equipamentoService.listarEquipamentos();
    var a: Equipamento[] = []
    for(var i = start;i < end;i++){
      a.push(equipamentos[i])
    }
    return a;
  }

  active() {
    this.modal = true;
  }

  cancelar() {
    this.modal = false;
    this.resetForm();
  }

  adicionarEquipamento() {
    if (this.edicao) {
      this.equipamentoService.editarEquipamento({ formObject: this.dados, value: this.form.value });
      this.edicao = false;
    } else {
      if (this.form.valid) {
        this.equipamentoService.addEquipamento(this.form.value);
      }
    }
    this.resetForm();
    this.modal = false;
  }

  editar(value: object) {
    this.edicao = true;
    this.active();
    this.dados = value;
    this.form.setValue(this.dados);
  }

  deletar(value: object) {
    this.equipamentoService.deletarEquipamento(value);
  }

}
