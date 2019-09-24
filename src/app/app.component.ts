import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  rendered: string;

  ngOnInit(){
    this.rendered = 'app'; 
  }
  
  listener(event){
    this.rendered = event;
  }

}
