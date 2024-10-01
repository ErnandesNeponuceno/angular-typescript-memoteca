import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'listarPensamento', pathMatch: 'full'
  },
  {
    path: 'criarPensamento', component: CriarPensamentosComponent
  },
  {
    path: 'listarPensamento', component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluir/:id', component: ExcluirPensamentoComponent
  },
  {
    path: 'pensamentos/editar/:id', component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
