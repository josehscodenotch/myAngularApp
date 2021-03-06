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
  public usuarioId: number;

  constructor(private apiService: UsuarioService) { }

  mostrarUsuario(id:number)
  {
    this.usuarioId = id;
    if (this.usuarioId > 0)
    {
      this.apiService.getUsuario(this.usuarioId).subscribe((data:Usuario[]) => 
      {    
        this.usuario = data[0];
      }   
      )
    }
    else
      this.usuario = null;
  }  
    
    ngOnInit(): void 
    {
    }

}
