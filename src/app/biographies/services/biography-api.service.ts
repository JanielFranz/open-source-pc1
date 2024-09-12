import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BiographyApiService {

  baseUrl: string = 'https://www.who.int/api'
  constructor(private http: HttpClient) {

  }

  getPeopleBiography(){
    console.log('ingreso')
    return this.http.get(`${this.baseUrl}/news/biographies`)
  }

}
