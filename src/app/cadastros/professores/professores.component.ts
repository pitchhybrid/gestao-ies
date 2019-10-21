import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfessoresService } from 'src/app/professores.service';

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
