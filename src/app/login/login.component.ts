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

    if (username === "" || password === "") {
      this.mensaje = "Campo nombre o contraseña vacío";
      return;
    }

    if (almacen) {
      const datosU = JSON.parse(almacen);
        //Constantes para comparar usuario y contraseña
        const UserCorrect = datosU.usuario.some((user: { user: string; pass: string; }) => user.user === username);
        const PassCorrect = datosU.usuario.some((user: { user: string; pass: string; }) => user.pass === password);

        if (UserCorrect && PassCorrect){
            this.dashboard()
            alert('Bienvenido');  
        }else {
          if(!UserCorrect){
            this.mensaje = "Este usuario, no existe tienes que registrarlo"; 
          }else{
            this.mensaje = "Contraseña incorrecta";
          }
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
