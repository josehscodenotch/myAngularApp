import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../share/usuario.service';

@Component({
  selector: 'app-insertar-usuario',
  templateUrl: './insertar-usuario.component.html',
  styleUrls: ['./insertar-usuario.component.css']
})
export class InsertarUsuarioComponent implements OnInit 
{

  constructor(private apiService: UsuarioService, private toast: ToastrService) 
  { 

  }

  insertarUsuario(nombre:string, apellido1: string, apellido2:string)
  {
    let nuevoUsuario: Usuario = new Usuario(0,nombre,apellido1, apellido2)
    this.apiService.postUsuario(nuevoUsuario)
    .subscribe((data:string) =>
    {
      console.log(data);
      if (data != "-1")
        this.toast.success("Usuario insertado satisfactoriamente con id  " + data, "",
                           {timeOut: 2000, positionClass:'toast-center-center'});
      else
        this.toast.error("Error al insertar al usuario", "", 
                         {timeOut: 2000, positionClass:'toast-center-center'});

      nuevoUsuario.id = Number(data);  
      this.apiService.usuarios.push(nuevoUsuario);
    })

  } 

  eliminarUsuario(id:string)
  {
    /*this.apiService.delUsuario({"id":id})
    .subscribe((data) =>
    {
      console.log(data);
    })
*/
  } 
  ngOnInit(): void 
  {
   
  }
}
