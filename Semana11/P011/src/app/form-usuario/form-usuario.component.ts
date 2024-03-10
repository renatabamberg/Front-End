import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {
  @ViewChild('formulario') Login: NgForm | undefined;

  onSubmit() {
    if (this.Login) {
      let { usuario, senha, email, nomeCompleto, telefone, endereco, dataNascimento, genero, profissao } = this.Login.value;
      console.log(usuario, senha, email, nomeCompleto, telefone, endereco, dataNascimento, genero, profissao);

      // Verificar a validade de todos os campos
      if (this.Login.controls['usuario'].invalid) {
        console.log('Campo "usuario" é inválido');
      }
      if (this.Login.controls['senha'].invalid) {
        console.log('Campo "senha" é inválido');
      }
      if (this.Login.controls['email'].invalid) {
        console.log('Campo "email" é inválido');
      }
      if (this.Login.controls['nomeCompleto'].invalid) {
        console.log('Campo "nomeCompleto" é inválido');
      }
      if (this.Login.controls['telefone'].invalid) {
        console.log('Campo "telefone" é inválido');
      }
      if (this.Login.controls['endereco'].invalid) {
        console.log('Campo "endereco" é inválido');
      }
      if (this.Login.controls['dataNascimento'].invalid) {
        console.log('Campo "dataNascimento" é inválido');
      }
      if (this.Login.controls['genero'].invalid) {
        console.log('Campo "genero" é inválido');
      }
      if (this.Login.controls['profissao'].invalid) {
        console.log('Campo "profissao" é inválido');
      }
    }
    console.log(this.Login);
  }
}
