import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../services/data-base.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-atendimento',
  templateUrl: './editar-atendimento.component.html',
  styleUrls: ['./editar-atendimento.component.css']
})

export class EditarAtendimentoComponent implements OnInit {

  atendimentoForm!: FormGroup;
  id:string = '';
  editadoSucesso:boolean = false;

  constructor(private formConstrutor: FormBuilder, private bancoService:DataBaseService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.atendimentoForm = this.formConstrutor.group({
      nomeDoCliente: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      tipo: ['', Validators.required],
      status: ['', Validators.required],
      descricao: ['', Validators.required],
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getAtendimento(this.id);
  }

  getAtendimento(id: any) {
    console.log("id-->"    + id);
    this.bancoService.getAtendimento(id).subscribe(responseData => {
      console.log(responseData);
      this.atendimentoForm.setValue(responseData);
    });
  }

  salvarAtendimento() {
    console.log("salvar atendimento: " + this.atendimentoForm.value);
    this.bancoService.updateAtendimento(this.id, this.atendimentoForm.value).subscribe(responseData => {
      if(responseData.status == 200){
        this.editadoSucesso = true;
        this.rediracionaPrincipal();
      }
    });
  }

  rediracionaPrincipal(){
    setTimeout(() => {
     this.rotas.navigate(['listar-atendimento']);
    }, 2000);
  }
}
