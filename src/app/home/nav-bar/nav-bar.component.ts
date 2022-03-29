import { Usuario } from './../../usuario/usuario';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: Usuario;

  constructor(
    private authService: AuthService
    , private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(response => {
      if (response) {
        this.user = response;
      }
    })
  }

  hasRole(role: string): boolean {
    if (this.user && this.user.roleUser) {
      return this.user.roleUser.includes(role);
    }
    return false;
  }

  logout() {
    this.authService.logout();
    this.user = null
    this.router.navigate(['login']);
  }
}
