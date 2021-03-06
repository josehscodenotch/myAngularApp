import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertarUsuarioComponent } from './pages/insertar-usuario/insertar-usuario.component';
import { MostrarUsuarioComponent } from './pages/mostrar-usuario/mostrar-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './pages/menu/menu.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InsertarUsuarioComponent,
    MostrarUsuarioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
