import { Usuario } from './../usuario/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;
  private readonly SERVER_URL = `${environment.API}authenticate`;


  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

    public get currentUserValue(): Usuario {
        return this.currentUserSubject.value;
    }

    login(login: FormData) {
        return this.http.post<any>(this.SERVER_URL, login)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }



  public postSignin(login: FormData){
    return this.http.post(this.SERVER_URL, login);
  }

  signin(login: FormData){
    this.postSignin(login)
    .subscribe(data => {
      data['token'];
    },
    (error) =>{

    });
  }

}
