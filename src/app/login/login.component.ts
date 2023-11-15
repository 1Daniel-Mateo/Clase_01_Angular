import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  constructor(public router: Router) {
  }

  ingresoLogin(){
    
    const username: string = (document.getElementById('usuario') as HTMLInputElement).value;
    const password: string = (document.getElementById('clave') as HTMLInputElement).value;

    //constantes con local storage.getitem
   const almacen = localStorage.getItem('data');
    console.log(almacen)


    if (almacen) {
      const datosU = JSON.parse(almacen);

      const userExists = datosU.usuario.some((user: { user: string; pass: string; }) => user.user === username && user.pass === password);

      if (!userExists) {
        alert('Los valores ingresados no existen, tienes que registrarte');
        this.register()
      }else {
        alert('Bienvenido');
        this.dashboard()
      }

    }
  }

  register() {
    console.log("registro")
    this.router.navigateByUrl('/register');
  }

  dashboard(){
    console.log("dashboard")
    this.router.navigateByUrl('/dashboard');
  }
  
}
