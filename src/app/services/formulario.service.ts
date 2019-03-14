import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  usuario:Usuario;
  constructor(
    //public http:HttpClient
  ) { }



  postUser(usuario:Usuario){
  const url="www.apiConsumible.app/registro";

    this.usuario=usuario;
    console.log(usuario.name);
    console.log(usuario.age);
    
    
    //Aqui se haria la insercion mediante metodo post

  //   return this.http.post(url, usuario)
  //     .map((resp: any) => {
  //       console.log('usuario creado');
        
  //       return resp.usuario;
  //     })
  //     .catch(err => {
  //       console.log(err.error.mensaje);

  //       return Observable.throw(err);
  //     })
   }
}
