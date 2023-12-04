import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'dashboard', component: DashboardComponent},
  { path:'lista', component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
