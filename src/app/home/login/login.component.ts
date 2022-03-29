import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  token;
  errorsLogin;

  constructor(
     private formBuilder: FormBuilder
    ,private authenticationService: AuthService
    ,private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.formLogin = this.formBuilder.group({
      username:[null,[Validators.required]],
      password:[null,[Validators.required]]
    })
  }


  signin(){
    this.authenticationService.login(this.formLogin.value)
            .pipe(first())
            .subscribe(
                data => {
                  console.log('logou caralho: ' + data);
                  this.router.navigate(['home']);
                },
                error => {
                  this.errorsLogin = JSON.stringify(error);
                });
    /*'
    this.auth.signin(this.formLogin.value);
    if(this.auth){
      this.router.navigate(['home']);
    }else{
      this.errorsLogin = "Problemas no login, esqueceu a senha igual uma tia velha?";
    }
    */
  }

}


