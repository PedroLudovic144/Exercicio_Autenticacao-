import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  status: boolean = true;
  usuario: string = "Matheus Sergio";
  senha: string = "Eu amo o HAS123";


  loginForm : FormGroup;
  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      _usuario : this.fb.control(""),
      _senha : this.fb.control("")
    })
  }
  login(){

    let _usuario = this.loginForm.get('_usuario')?.value;
    let _senha = this.loginForm.get('_senha')?.value;

    if (_usuario == this.usuario && _senha == this.senha){
      return this.status;
    }else{
      return this.status = false;
    }
  }

}
