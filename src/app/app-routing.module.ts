import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArticlesComponent } from './list-articles/list-articles.component'

const routes: Routes = [
  {path:'', component:ListArticlesComponent, pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
