import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataBaseService } from '../services/data-base.service';

@Component({
  selector: 'app-criar-atendimento',
  templateUrl: './criar-atendimento.component.html',
  styleUrls: ['./criar-atendimento.component.css']
})
export class CriarAtendimentoComponent implements OnInit {
  atendimentoForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataBaseService: DataBaseService) { }

  ngOnInit() {
    this.atendimentoForm = this.formBuilder.group({
      nomeDoCliente: ['', Validators.required],
      data: ['', Validators.required],
      hora: ['', Validators.required],
      tipo: ['', Validators.required],
      status: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.atendimentoForm.value);
  }

  adicionarAtendimento() {
    console.log(this.atendimentoForm.value);
    this.dataBaseService.addAtendimento(this.atendimentoForm.value);
    this.atendimentoForm.reset();
  }
}
