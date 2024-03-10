import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListarAtendimentoComponent } from './listar-atendimento/listar-atendimento.component';
import { CriarAtendimentoComponent } from './criar-atendimento/criar-atendimento.component';
import { EditarAtendimentoComponent } from './editar-atendimento/editar-atendimento.component';
import { DetalharAtendimentoComponent } from './detalhar-atendimento/detalhar-atendimento.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AutenticaInterceptor } from './auth-form/autentica.interceptor';
import { AuthGuard } from './auth-form/auth-guard.service';
import { SemAutorizacaoComponent } from './sem-autorizacao/sem-autorizacao.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'criar-atendimento',
    component: CriarAtendimentoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'listar-atendimento',
    component: ListarAtendimentoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editar-atendimento/:id',
    component: EditarAtendimentoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'detalhar-atendimento/:id',
    component: DetalharAtendimentoComponent,
    canActivate: [AuthGuard],
  },
  { path: 'auth', component: AuthFormComponent },
  { path: 'sem-autorizacao', component: SemAutorizacaoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    ListarAtendimentoComponent,
    CriarAtendimentoComponent,
    EditarAtendimentoComponent,
    DetalharAtendimentoComponent,
    AuthFormComponent,
    LoadingSpinnerComponent,
    SemAutorizacaoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
