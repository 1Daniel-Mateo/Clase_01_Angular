import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { CheckboxRequiredValidator } from '@angular/forms';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  
  username: string | null = null;
  mostrarModal: boolean = false;
  mostrarModalR: boolean = false;
  trabajos: { codigo: string, nombre: string, fecha: Date, descripcion: string, telefono: string, estudio: string, experiencia: string }[] = [];

   constructor(public router: Router) {
    
     const userData = localStorage.getItem('nombre');
     console.log(userData)
     if (userData) {
      const user = JSON.parse(userData);
      this.username = user.username;
    }
    this.actualizarTrabajos();
  }

  private actualizarTrabajos(): void {
    const almacen = localStorage.getItem('data');
    const datosActuales = almacen ? JSON.parse(almacen) : { trabajo: [] };
    this.trabajos = datosActuales.trabajo;
  }
  //aplicar aun trabajo

  abrirModal1(){
    this.mostrarModalR = true;
  }

  cerrarModal1(){
    this.mostrarModalR = false;
  }

  abrirModal(){
    this.mostrarModal = true;
  }

  cerrarCancelarModal(){
    this.mostrarModal = false;
  }

  datos(): { trabajo: { codigo: string, nombre: string, fecha: Date, descripcion: string,
  telefono:string, estudio:string, experiencia:string }[] } {
    const almacen = localStorage.getItem('data');
    return almacen ? JSON.parse(almacen) : { trabajo: [] };
  }

  // registrar(event: Event): void {
  //   event.preventDefault();
  //   console.log('Método registrar ejecutado');
  
  //   const codigo: string = (document.getElementById('codigo') as HTMLInputElement).value;
  //   const nombre: string = (document.getElementById('nombre') as HTMLInputElement).value;
  //   const fecha: string = (document.getElementById('fecha') as HTMLInputElement).value;
  //   const descripcion: string = (document.getElementById('descripcion') as HTMLInputElement).value;
  //   const telefono: string = (document.getElementById('telefono') as HTMLInputElement).value;
  //   const estudio: string = (document.getElementById('estudio') as HTMLInputElement).value;
  //   const experiencia: string = (document.getElementById('experiencia') as HTMLInputElement).value;
  
  //   if (!codigo || !nombre || !fecha || !descripcion || !telefono || !estudio || !experiencia) {
  //     console.log('Por favor, complete todos los campos.');
  //     return;
  //   }
  
  //   const datosActuales = this.datos();
  
  //   const nuevoTrabajo = {
  //     codigo: codigo,
  //     nombre: nombre,
  //     fecha: new Date(fecha),
  //     descripcion: descripcion,
  //     telefono: telefono,
  //     estudio: estudio,
  //     experiencia: experiencia
  //   };
  
  //   datosActuales.trabajo.push(nuevoTrabajo);
  
  //   localStorage.setItem('data', JSON.stringify(datosActuales));
  //   this.cerrarModal1()
  //   this.trabajos = datosActuales.trabajo;
  
  //   // Limpiar el formulario si es necesario
  //   (document.getElementById('codigo') as HTMLInputElement).value = '';
  //   (document.getElementById('nombre') as HTMLInputElement).value = '';
  //   (document.getElementById('fecha') as HTMLInputElement).value = '';
  //   (document.getElementById('descripcion') as HTMLInputElement).value = '';
  //   (document.getElementById('telefono') as HTMLInputElement).value = '';
  //   (document.getElementById('estudio') as HTMLInputElement).value = '';
  //   (document.getElementById('experiencia') as HTMLInputElement).value = '';
  // }
  


  chekeo(): { aplico: number} {
    const almacen = localStorage.getItem('data');
    return almacen ? JSON.parse(almacen) : { aplico: 0};
  }

  aplico(){
    const aplica = (document.getElementById('aplico') as HTMLInputElement).checked;

    if(aplica){
      const almacen = this.chekeo();

      if (almacen.aplico === 0) {
        almacen.aplico = 1;

        localStorage.setItem('data', JSON.stringify(almacen));
        this.cerrarCancelarModal();
        console.log('aplico');
        
      } else {
        console.log('Ya has aplicado a un trabajo previamente.');
      }
     
    }else{
      console.log('debes de aceptar los terminos y condiciones para poder aplicar')
    }
  }

  dashboard() {
    console.log("dashboard")
    this.router.navigateByUrl('/dashboard');
  }

  login(){
    this.router.navigateByUrl('/login');
  }
  cuenta(){
    this.router.navigateByUrl('/cuenta');
  }
}
