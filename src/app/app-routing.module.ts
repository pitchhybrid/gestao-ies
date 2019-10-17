import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { ReservaComponent } from './reserva/reserva.component';
import { NovaComponent } from './reserva/nova/nova.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cadastros', component: CadastrosComponent},
  { path: 'reserva', component: ReservaComponent ,children:[
    { path:'nova-reserva', component:NovaComponent }
  ]},
  { path: '', redirectTo: '/', pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
