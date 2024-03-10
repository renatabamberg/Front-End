import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarAtendimentoComponent } from './listar-atendimento/listar-atendimento.component';
import { CriarAtendimentoComponent } from './criar-atendimento/criar-atendimento.component';
import { EditarAtendimentoComponent } from './editar-atendimento/editar-atendimento.component';
import { DetalharAtendimentoComponent } from './detalhar-atendimento/detalhar-atendimento.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'criar-atendimento', component: CriarAtendimentoComponent},
  {path: 'listar-atendimento', component: ListarAtendimentoComponent},
  {path: 'editar-atendimento/:id', component: EditarAtendimentoComponent},
  {path: 'detalhar-atendimento/:id', component: DetalharAtendimentoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    ListarAtendimentoComponent,
    CriarAtendimentoComponent,
    EditarAtendimentoComponent,
    DetalharAtendimentoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
