import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  rota: string;
  ngOnInit(){
    this.rota = 'inicio'; 
  }
  
  listener(event){
    if(event == 'error'){
      alert('Usuario ou senha incorretos')
    }else{
      this.rota = event;
      
    }
  }

}
