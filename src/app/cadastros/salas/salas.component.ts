import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/salas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Sala } from 'src/app/interfaces';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {
  modal: boolean = false;
  form:FormGroup;
  salas: Sala[];
  start: number = 0;
  end: number = 10;
  max: number;
  constructor(private salasService:SalasService,private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      bloco:['', Validators.required],
      sala:['', Validators.required],
    });

  }

  ngOnInit() {
    this.max = this.salasService.salas.length;
    this.salas = this.paginate(0,10);
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
    this.salas = this.paginate(this.start,this.end);
  }

  anterior(){
    this.start -= 10
    this.end -= 10
    if(this.end < 10){
      this.start = 0
      this.end = 10
    }
    this.salas = this.paginate(this.start,this.end);
  }

  paginate(start: number,end:number): Sala[]{
    var salas:Sala[] = this.salasService.listar();
    var a: Sala[] = []
    for(var i = start;i < end;i++){
      a.push(salas[i])
    }
    return a;
  }
}
