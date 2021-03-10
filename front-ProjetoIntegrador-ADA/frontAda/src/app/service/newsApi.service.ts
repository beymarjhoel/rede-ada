import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  url: string = 'http://newsapi.org/v2'  //base url

  constructor(
    private http:HttpClient
    
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Security-Policy': '*'
    })

  };  

    //get simples
    getNoticias() {
      return this.http.get<any>(this.url + '/top-headlines?country=br&category=technology&apiKey=c7b072774e3f4bc19f771fe3e4aee367', this.httpOptions)
      
    }

    
  }
