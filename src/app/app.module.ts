import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertarUsuarioComponent } from './pages/insertar-usuario/insertar-usuario.component';
import { MostrarUsuarioComponent } from './pages/mostrar-usuario/mostrar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertarUsuarioComponent,
    MostrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
