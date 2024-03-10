import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sem-autorizacao',
  template: `<p>
    Você não está logado. Você será redirecionado para a página de login em 5
    segundos...
  </p>`,
  styleUrl: './sem-autorizacao.component.css',
})
export class SemAutorizacaoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/auth']);
    }, 5000);
  }
}
