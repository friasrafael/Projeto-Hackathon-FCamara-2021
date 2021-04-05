import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string = 'http://localhost:8080/api/filho';
  private options: any = { headers: new HttpHeaders({'Content-Type' : 'application/json; charset=UTF-8'}) }

  constructor(private http: HttpClient) { } 

  readData() {
    return this.http.get(`${this.api}`);
  }

  createData(data: any) {
    return this.http.post(`${this.api}`, JSON.stringify(data), this.options);
  }

}
