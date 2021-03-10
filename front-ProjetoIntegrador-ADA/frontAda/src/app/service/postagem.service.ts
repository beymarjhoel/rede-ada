import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';


@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http:HttpClient
  ) { }

  token = {
    headers:new HttpHeaders().set('Authorization',environment.token)
    }
  
  getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://rede-ada.herokuapp.com/postagem', this.token)
  }
  getByIdPostagem(id:number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://rede-ada.herokuapp.com/postagem/${id}`, this.token)
  }
  /* postagem */
  getByDescricaoPostagem(descricao: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`https://rede-ada.herokuapp.com/postagem/descricao/${descricao}`, this.token)
  }

  postPostagem(postagem:Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://rede-ada.herokuapp.com/postagem',postagem, this.token)
  }
  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://rede-ada.herokuapp.com/postagem',postagem, this.token)
  }
  deletePostagem(id:number){
    return this.http.delete(`https://rede-ada.herokuapp.com/postagem/${id}`, this.token)
  }   
}
