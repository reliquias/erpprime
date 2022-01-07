import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'erpprime';


constructor(private authenticationService: AuthService) { }

logado(){
  console.log(this.authenticationService.currentUserValue);
  return this.authenticationService.currentUserValue != null;
}


}


