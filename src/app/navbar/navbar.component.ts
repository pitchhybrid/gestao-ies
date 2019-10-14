import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() rota: EventEmitter<string> = new EventEmitter<string>();
  route:Router;
  
  constructor(route:Router) {
    this.route = route;
   }

  ngOnInit() {
  }

  deslogar(){
    localStorage.removeItem("LOGIN")
    this.rota.emit('inicio')
    this.route.navigate(['/'])
  }
}
