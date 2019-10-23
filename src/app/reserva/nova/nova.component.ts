import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/reserva.service';
import { ProfessoresService } from 'src/app/professores.service';
import { SalasService } from 'src/app/salas.service';
import { EquipamentosService } from 'src/app/equipamentos.service';
import { Equipamento, Professor,Sala} from '../../interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nova',
  templateUrl: './nova.component.html',
  styleUrls: ['./nova.component.css']
})
export class NovaComponent implements OnInit {
  form: FormGroup;
  professores: Professor[];
  equipamentos: Equipamento[];
  salas: Sala[];

  constructor(
    private reservaSerice:ReservaService,
    public location:Location,
    private professoresService: ProfessoresService,
    private salasService: SalasService,
    private equipamentosService:EquipamentosService,
    private formBuilder:FormBuilder
    ) {
                this.form = this.formBuilder.group({
                  dataReserva:['', Validators.required],
                  tipoReserva:['', Validators.required],
                  reserva:['', Validators.required],
                  professor:['', Validators.required]
                });
               }

  ngOnInit() {
    this.professores = this.professoresService.listar();
    this.equipamentos = this.equipamentosService.listarEquipamentos()
    this.salas = this.salasService.listar();
  }

  salvar(){
    if(this.form.valid){
      this.form.value.professor = this.getObject(this.professores,this.form.value.professor)
      if(this.form.value.tipoReserva == 'EQUIPAMENTO'){
        this.form.value.reserva = this.getObject(this.equipamentos,this.form.value.reserva)
      }
      if(this.form.value.tipoReserva == 'SALA'){
        this.form.value.reserva = this.getObject(this.salas,this.form.value.reserva)
      }
      this.reservaSerice.addReserva(this.form.value)
      this.location.back();
    }
  }

  getObject(object:any[],id:number){
    for(const i of object){
      if(i.id == id){
        return i
      }
    }
  }
}
