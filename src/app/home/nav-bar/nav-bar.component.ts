import { Usuario } from './../../usuario/usuario';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: Usuario;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.user = this.authService.currentUserValue;
  }

  hasRole(role: string): boolean{
    if(this.user && this.user.roleUser){
    return this.user.roleUser.includes(role);
   }
   return false;
  }

  logado(){
    return this.user != null;
  }

}
