import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfessoresService } from 'src/app/professores.service';
import { Professor } from 'src/app/interfaces';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  form: FormGroup;
  modal = false;
  edicao = false;
  dados: object;
  professores: Professor[];
  start: number = 0;
  end: number = 10;
  max:number;
  constructor(private formBuilder: FormBuilder, private professoresService: ProfessoresService) {
    this.form = this.formBuilder.group({
      professor: ['', Validators.required],
      id: ['', Validators.required],
      titulo: ['', Validators.required],      
    });
  }

  resetForm() {
    this.form.setValue({ id:'',professor:'', titulo:'' });
  }

  ngOnInit() {
    this.professores = this.paginate(0,10);
    this.max = this.professoresService.professores.length;
  }
 
  proximo(){
    this.start += 10
    this.end += 10
    var max = this.max - this.end
    if(max < 10){
      this.start = this.start + max
      this.end = this.end + max
    }
    this.professores = this.paginate(this.start,this.end);
  }

  anterior(){
    this.start -= 10
    this.end -= 10
    if(this.end < 10){
      this.start = 0
      this.end = 10
    }
    this.professores = this.paginate(this.start,this.end);
  }

  paginate(start: number,end:number): Professor[]{
    var professores:Professor[] = this.professoresService.listar();
    var a: Professor[] = []
    for(var i = start;i < end;i++){
      a.push(professores[i])
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

  adicionarProfessor() {
    if (this.edicao) {
      // this.professoresService.addProfessor(this.form.value);
      this.edicao = false;
    } else {
      if (this.form.valid) {
        this.professoresService.addProfessor(this.form.value);      
      }
    }
    this.resetForm();
    this.modal = false;
    this.professores = this.paginate(0,10);
  }

  editar(value: object) {
    this.edicao = true;
    this.active();
    this.dados = value;
    this.form.setValue(this.dados);
  }

  deletar(value: object) {
    this.professoresService.deletarProfessor(value);
  }


}
