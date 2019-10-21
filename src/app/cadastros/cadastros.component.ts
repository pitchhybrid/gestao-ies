import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EquipamentosService } from '../equipamentos.service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {
  
  klasses: string[] = ['is-active','','','']
  view:number = 0
  ngOnInit(){

  }

  change(event:number){
    this.view = event
    var um = '', dois='', tres='', quatro = ''
    if(event == 0) um = 'is-active'
    if(event == 1) dois = 'is-active'
    if(event == 2) tres = 'is-active'
    if(event == 3) quatro = 'is-active'
    this.klasses = [um,dois,tres,quatro]
  }
}
