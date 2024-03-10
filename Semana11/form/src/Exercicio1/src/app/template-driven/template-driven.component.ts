import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-comum',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class FormularioComumComponent {
  @ViewChild('formulario') Login: NgForm | undefined;

  onSubmit(){
    if(this.Login){
      let { login, senha } = this.Login.value;
      console.log(login, senha);
    }
    console.log(this.Login);
  }
}
