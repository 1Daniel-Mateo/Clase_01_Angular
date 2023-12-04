import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  mensaje: string = ""
  mostrarMensaje: boolean = false;

  constructor(public router: Router) {
  }

  mostrar(mensaje: string) {
    this.mensaje = mensaje;
    this.mostrarMensaje = true;

    // este metodo nos muestra el mensaje por tres segundos
    setTimeout(() => {
      this.mensaje = "";
    }, 3000);
  }

  ocultar() {
    this.mostrarMensaje = false;
    this.mensaje = "";
  }

  ingresoLogin(e: Event) {
    e.preventDefault();
    const username: string = (document.getElementById('usuario') as HTMLInputElement).value;
    const password: string = (document.getElementById('clave') as HTMLInputElement).value;

    //constantes con local storage.getitem
    const almacen = localStorage.getItem('data');
    console.log(almacen)

    if (username === "" || password === "") {
      this.mostrar('Campo nombre o contraseña vacío');
      return;
    }

    if (almacen) {
      const datosU = JSON.parse(almacen);
      //Constantes para comparar usuario y contraseña
      const UserCorrect = datosU.usuario.some((user: { user: string; pass: string; }) => user.user === username);
      const PassCorrect = datosU.usuario.some((user: { user: string; pass: string; }) => user.pass === password);

      if (UserCorrect && PassCorrect) {

        const nombre = {
          username: username,
        }
        localStorage.setItem('nombre', JSON.stringify(nombre));

        this.dashboard()
        this.mensaje = `Bienvenido`
      } else {
        if (!UserCorrect) {
          this.mostrar('Este usuario, no existe tienes que registrarlo');
        } else {
          this.mostrar('Contraseña incorrecta');
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
