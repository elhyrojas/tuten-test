import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private http: HttpClient
    ) { }

    login(user: User): Observable<any> {
        let headers = {
            'email': user.user,
            'password': user.pass,
            'app': 'APP_BCK'
        };
        return this.http.put<any>(environment.url_path + 'testapis%40tuten.cl', null, { headers: headers });
    }

}