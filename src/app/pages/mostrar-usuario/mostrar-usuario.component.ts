import { Component, OnInit } from '@angular/core';
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

  constructor(public apiService: UsuarioService) { }

  mostrarUsuario(id:number)
  {
    if (id > 0)
    {
      this.apiService.getUsuario(id).subscribe((data:Usuario[]) => 
      {    
        this.usuario = data[0];
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
