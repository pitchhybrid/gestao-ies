import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './inicio/login/login.component';
import { CadastrarComponent } from './inicio/cadastrar/cadastrar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { StatusPipe } from './status.pipe';
import { ReservaComponent } from './reserva/reserva.component';
import { AvisosComponent } from './dashboard/avisos/avisos.component';
import { ProfessoresComponent } from './dashboard/professores/professores.component';
import { NovaComponent } from './reserva/nova/nova.component';
import { ReservasComponent } from './reserva/reservas/reservas.component';
import { ReservasComponent as ReservasDashboard } from './dashboard/reservas/reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    CadastrarComponent,
    NavbarComponent,
    InicioComponent,
    CadastrosComponent,
    StatusPipe,
    ReservaComponent,
    AvisosComponent,
    ProfessoresComponent,
    NovaComponent,
    ReservasComponent,
    ReservasDashboard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
