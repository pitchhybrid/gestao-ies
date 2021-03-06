import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from '../../professores.service';
import { Professor } from '../../professor';

@Component({
  selector: 'app-professores-dash',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  professores: Professor[];
  scroll = true;
  constructor(private professorService: ProfessoresService) { }

  ngOnInit() {
    this.professores = this.professorService.listar();
  }

  filtrar(event: string) {
    if (event === '') {
      this.professores = this.professorService.listar();
      return;
    }
    this.professores = this.professores.filter((item, index) => {
      if(event.includes('PROF:.')){
        return item.professor.includes(event.toUpperCase());
      }
      return item.professor.includes('PROF:. ' + event.toUpperCase());
    });
  }

}
