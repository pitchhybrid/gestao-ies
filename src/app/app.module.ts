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
import { AvisosComponent } from './avisos/avisos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { SalasComponent } from './salas/salas.component';
import { NovaComponent } from './reserva/nova/nova.component';
import { ReservasComponent } from './reserva/reservas/reservas.component';

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
    SalasComponent,
    NovaComponent,
    ReservasComponent
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
