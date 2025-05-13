import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {


  _usuario: string = "";
  _senha: string = "";

  status: boolean = true;

  login(){

    const login = document.getElementById("_usuario") as HTMLInputElement
    const senha = document.getElementById("_senha") as HTMLInputElement
    usuario: string = "Matheus Sergio";
    senha: string = "Eu amo o HAS123";

    if (this._usuario == this.usuario && this.senha == this._senha){
      return this.status;
    }else{
      return this.status = false;
    }
  }

}
