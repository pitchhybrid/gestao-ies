import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../../avisos.service';
import { Aviso } from '../../aviso';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-avisos-dash',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {
  form: FormGroup;
  avisos: Aviso[];
  scroll: boolean = true;
  modal: boolean = false;
  constructor( private avisosService: AvisosService,private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group({
        aviso:['', Validators.required]    
    });
   }

  ngOnInit() {
    this.avisos = this.avisosService.listar();
  }

  filtrar(event: string) {
    if (event === '') {
      this.avisos = this.avisosService.listar();
      return;
    }
    this.avisos = this.avisos.filter((item, index) => {
      return item.aviso.includes(event.toUpperCase());
    });
  }
  adicionar(){
    if(this.form.valid){
      this.avisosService.addAviso(this.form.value.aviso);
    }
    this.modal = false
    this.avisos = this.avisosService.listar();
    this.form.setValue({aviso:''})
  }
}
