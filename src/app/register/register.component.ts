import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  mensaje: string = ""

  constructor(public router: Router){
  }

  datos(): { usuario: { user: string, email: string, pass: string }[] } {
    const almacen = localStorage.getItem('data');
    return almacen ? JSON.parse(almacen) : { usuario: [] };
  }
  
  // Función para registrar un nuevo usuario
registrar(event: Event): void {
  event.preventDefault();

  const nombre: string = (document.getElementById('nombre') as HTMLInputElement).value;
  const correo: string = (document.getElementById('correo') as HTMLInputElement).value;
  const contraseña: string = (document.getElementById('contraseña') as HTMLInputElement).value;

  if (nombre === "" || correo === "" || contraseña === "") {
    this.mensaje = "Campos vacíos";
    return;
  }

  const datosActuales = this.datos();
  
  const usuarioExistente = datosActuales.usuario.find(usuario => usuario.email === correo);
  const contraseñaExistente = datosActuales.usuario.find(usuario => usuario.pass === contraseña )


  if (usuarioExistente) {
    this.mensaje = `El correo ya existe `
  }else if(contraseñaExistente){
    this.mensaje = `La contraseña ya existe `
  }else {
    const nuevoUsuario = { user: nombre, email: correo, pass: contraseña };
    datosActuales.usuario.push(nuevoUsuario);
    localStorage.setItem('data', JSON.stringify(datosActuales));
    
    this.login(nombre, contraseña);
  }
  
  
}

login(username: string, password: string) {
  console.log('Redirigiendo al componente de inicio de sesión...');
  this.mensaje = `Nuevo usuario registrado`
  this.router.navigateByUrl(`/login?name=${username}&pass=${password}`);
}


}
