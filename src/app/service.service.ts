import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  buscarPaises(code: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/region/${code}`);
  }
}
