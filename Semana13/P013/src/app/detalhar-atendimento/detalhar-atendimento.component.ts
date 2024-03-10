import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
import { Atendimento } from '../atendimento';

@Component({
  selector: 'app-detalhar-atendimento',
  templateUrl: './detalhar-atendimento.component.html',
  styleUrls: ['./detalhar-atendimento.component.css']
})
export class DetalharAtendimentoComponent implements OnInit {
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
