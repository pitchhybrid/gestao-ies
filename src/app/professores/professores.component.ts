import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../professores.service';
import { Professor } from '../mock';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  modal:boolean = false;
  professores:Professor[]
  professor:string
  scroll: boolean = true
  constructor(private professorService:ProfessoresService) { }

  ngOnInit() {
    this.professores = this.professorService.listar();
  }

  addProfessor(){
    if(this.professor){
      this.professorService.addProfessor(this.professor.toUpperCase())
      this.cancelar()
    }
  }

  filtrar(event:string){
    if(event == ''){
      this.professores = this.professorService.listar()
      return;
    }
    this.professores = this.professores.filter((item,index)=>{
      return item.professor.includes(event.toUpperCase())
    });
  }

  active(){
    this.modal = true
  }

  cancelar(){
    this.modal = false
  }
}
