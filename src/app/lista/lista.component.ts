import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  username: string | null = null;

   constructor(public router: Router) {
    
     const userData = localStorage.getItem('nombre');
     console.log(userData)
     if (userData) {
      const user = JSON.parse(userData);
      this.username = user.username;
    }
  }

  dashboard() {
    console.log("dashboard")
    this.router.navigateByUrl('/dashboard');
  }
}
