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
  public usuarios: Usuario[]
  public noExiste: boolean;
  public idBuscado: number;

  constructor(public apiService: UsuarioService, private toast: ToastrService) 
  {
    this.noExiste = false;
  }

  mostrarUsuario(id:number)
  {
    this.idBuscado = id;
    if (id > 0)
    {
      this.apiService.getUsuario(id).subscribe((data:Usuario[]) => 
      {    
        this.usuario = data[0];
        console.log(this.usuario);
        if (this.usuario==undefined)
        {console.log("pasa por aqui")
        this.toast.warning("El usuario con id: " + id + " no existe.");
      }
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
