import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UtcService {

    constructor(
        private http: HttpClient
    ) { }

    utcCalculate(time: string, timezone: string): Observable<any> {
        let headers = {
            'Content-Type': 'application/json'
        };
        return this.http.post<any>('http://localhost:8080/calculate', { time: time, timezone: timezone }, { headers: headers });
    }
}
