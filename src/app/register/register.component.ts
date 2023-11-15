import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

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

  const datosActuales = this.datos();
  
  const usuarioExistente = datosActuales.usuario.find(usuario => usuario.user === nombre);



  if (usuarioExistente) {
    alert(`el usuario ${usuarioExistente} ya existe`)
  } else {
    const nuevoUsuario = { user: nombre, email: correo, pass: contraseña };
    datosActuales.usuario.push(nuevoUsuario);
    localStorage.setItem('data', JSON.stringify(datosActuales));
    alert('usuario registrado')
    this.login(nombre, contraseña);
  }
  
  
}

login(username: string, password: string) {
  console.log('Redirigiendo al componente de inicio de sesión...');
  this.router.navigateByUrl(`/login?name=${username}&pass=${password}`);
}


}
