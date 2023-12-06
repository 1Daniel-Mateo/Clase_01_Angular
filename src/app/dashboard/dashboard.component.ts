import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username: string | null = null;

   constructor(public router: Router) {
    
     const userData = localStorage.getItem('nombre');
     console.log(userData)
     if (userData) {
      const user = JSON.parse(userData);
      this.username = user.username;
    }
   }

   lista(){
    this.router.navigateByUrl('/lista');
   }

   login(){
     this.router.navigateByUrl('/login');
   }

   cuenta(){
    this.router.navigateByUrl('/cuenta');
   }
  
}
