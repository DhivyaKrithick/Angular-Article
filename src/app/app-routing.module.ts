import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListArticlesComponent } from "./list-articles/list-articles.component";
import { DisplayArticleComponent } from "./display-article/display-article.component";

const routes: Routes = [
  { path: "display-article", component: DisplayArticleComponent },
  { path: "", component: ListArticlesComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
