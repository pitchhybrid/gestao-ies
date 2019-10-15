import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logado = false;
  rota: string;
  router: Router;
  constructor(router: Router) {
    this.router = router;
    const login = localStorage.getItem('LOGIN');
    if (login) {
      this.logado = true;
    }

  }

  ngOnInit() {
    this.rota = 'inicio';
    if (this.logado) {
      this.rota = 'dashboard';
      this.router.navigate(['/dashboard']);
    }
  }

  listener(event: string) {
    if (event === 'error') {
      alert('Usuario ou senha incorretos');
    } else {
      this.rota = event;

    }
  }

}
