import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  mensaje: string = ""

  constructor(public router: Router) {
  }

  ingresoLogin(e: Event) {
    e.preventDefault();
    const username: string = (document.getElementById('usuario') as HTMLInputElement).value;
    const password: string = (document.getElementById('clave') as HTMLInputElement).value;

    //constantes con local storage.getitem
    const almacen = localStorage.getItem('data');
    console.log(almacen)

    if (username == "") {
      this.mensaje = "campo nombre vacio"
    } else if (password == "") {
      this.mensaje = "campo password vacio"
    }else if (almacen) {
      const datosU = JSON.parse(almacen);

      const userExists = datosU.usuario.some((user: { user: string; pass: string; }) => user.user === username && user.pass === password);

      if (!userExists) {
        this.mensaje = "Los valores ingresados no existen, tienes que registrarte"
      }else if (username !== userExists && password !== userExists) {
        this.mensaje = "los datos que ingresaste son incorrectos"
      }else if(username !== userExists){
        this.mensaje = "usuario incorrecto"
      }else if(password !== userExists){
        this.mensaje = "contraseña incorrecta"
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

  dashboard() {
    console.log("dashboard")
    this.router.navigateByUrl('/dashboard');
  }

}
