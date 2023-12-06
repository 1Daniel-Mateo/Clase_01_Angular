import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent {
  username: string | null = null;
  email: string | null = null;
  pass: string | null = null;
  
  constructor(public router: Router) {

    const userData = localStorage.getItem('data');
console.log(userData);

if (userData) {
  const datosActuales = JSON.parse(userData);
  const primerUsuario = datosActuales.usuario[0];
  if (primerUsuario) {
    this.username = primerUsuario.user;
    this.email = primerUsuario.email;
    this.pass = primerUsuario.pass;
  }
}


    


  }

  

  dashboard() {
    console.log("dashboard")
    this.router.navigateByUrl('/dashboard');
  }

  login(){
    this.router.navigateByUrl('/login');
  }
}
