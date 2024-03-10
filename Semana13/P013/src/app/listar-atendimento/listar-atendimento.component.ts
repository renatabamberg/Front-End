import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
import { Atendimento } from '../atendimento';

@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrl: './listar-atendimento.component.css'
})
export class ListarAtendimentoComponent implements OnInit {
  loadAtendimento: Atendimento[] = [];
  constructor(private dataBaseService: DataBaseService) { }

  ngOnInit(): void {
    this.getAtendimentos();
  }

  getAtendimentos()
  {
    this.dataBaseService.getAtendimentos().subscribe(atendimentos => {
      this.loadAtendimento = atendimentos;
    });
  }

  editarAtendimento(id: string)
  {
    console.log(id);
  }

  apagarTudo(){
    this.dataBaseService.deleteAtendimento().subscribe(responseData => {
      console.log(responseData)
      this.loadAtendimento = [];
      });
  }

}
