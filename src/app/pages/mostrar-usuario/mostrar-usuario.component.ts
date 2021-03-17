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
  public noExiste: boolean;
  public idBuscado: number;

  constructor(public apiService: UsuarioService) 
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
        this.noExiste = (this.usuario==undefined);
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
