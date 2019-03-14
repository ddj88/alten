import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import 'rxjs';
import { FormularioService } from 'src/app/services/formulario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent {
  titulo:string='bienvenido';
  forma:FormGroup;
  usuario:Usuario=new Usuario;
  step:number=0;
  

  constructor(  public _fs:FormularioService,
                 ) { 
          
    this.forma= new FormGroup({
      'name': new FormControl('',Validators.required),
      'age': new FormControl('', Validators.required)
    })
  }

  next(n){
    this.step+=n;

    switch (this.step) {
      case 1:
        this.titulo ='Edad'; 
        break;
      
      case 2:
        this.forma.value.name = null;
        this.resume();
        this.titulo = 'Resumen';
        break;

      case 3:
        
        this.resume();
        this.titulo = 'enviado';
        break;

      default:
        break;
    }    
  }

  resume(){
    this.usuario.name=this.forma.value.name; 
    this.usuario.age = this.forma.value.age.getFullYear();

   
   
  }

  enviar(){
  
    //Aqui se consume el servicio 
    if (this.forma.status=='valid') {
         //this._fs.postUser(this.usuario).subscribe();
    }else{
      console.log(this.forma.errors);
    }
  }

}
