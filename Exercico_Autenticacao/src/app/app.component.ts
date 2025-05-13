import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ResultadoComponent } from "./resultado/resultado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercico_Autenticacao';
}
