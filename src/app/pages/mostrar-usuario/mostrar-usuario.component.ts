import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../share/usuario.service';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit {
  public usuario : Usuario

  constructor(public apiService: UsuarioService, private toast: ToastrService) 
  {

  }

  mostrarUsuario(id:number)
  {
    if (id > 0)
    {
      this.apiService.getUsuario(id).subscribe((data:Usuario[]) => 
      {    
        this.usuario = data[0];
        if (this.usuario==undefined)
          this.toast.warning("El usuario con id  " + id + " no existe.", "", 
                             {timeOut: 2000, positionClass:'toast-center-center'});
      
        this.apiService.usuarios = null;
      }   
      )
    }
    else
    {
      this.apiService.getUsuarios().subscribe((data:Usuario[]) => 
      {    
        this.apiService.usuarios = data;
        this.usuario = null;
      }   
      )
    }
  }  
    
  ngOnInit(): void 
  {
  }

}
