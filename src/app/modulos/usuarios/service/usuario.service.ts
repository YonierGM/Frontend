import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from '../../modelo/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiUrl = 'http://localhost:8080/users-data/'

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Usuario[]>{
    return this.HttpClient.get<Usuario[]>(this.apiUrl + 'lista');
  }

  public detailId(id: number): Observable<Usuario>{
    return this.HttpClient.get<Usuario>(this.apiUrl + `detailId/${id}`);
  }

  public detailNombre(nombre: string): Observable<Usuario>{
    return this.HttpClient.get<Usuario>(this.apiUrl + `detailNombre/${nombre}`);
  }

  public save(usuario: Usuario):Observable<any> {
    return this.HttpClient.post<any>(this.apiUrl + 'create', usuario);
  }

  public update(id:number, usuario: Usuario):Observable<any> {
    return this.HttpClient.put<any>(this.apiUrl + `update/${id}`, usuario);
  }

  public delete(id:number): Observable<any> {
    return this.HttpClient.delete<any>(this.apiUrl + `delete/${id}`);

  }
}
