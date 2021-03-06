import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{
  private url = "https://my-api-rest1.herokuapp.com/usuarios";

  public usuarios: Usuario[];
  
  constructor(private http: HttpClient) { }

  getUsuario(id:number)
  {
    return this.http.get(this.url + "/" + id)
  }

  getUsuarios()
  {
    return this.http.get(this.url)
  }

  postUsuario(newUser: Usuario)
  {
    return this.http.post(this.url, newUser)
  }

  delUsuario(id:any)
  {
    console.log(id);
    //const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: id}
    const httpOptions = {headers: null, body: id}
    return this.http.delete(this.url, httpOptions)
  }
}
