import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { NgxPaginationModule } from "ngx-pagination";
import { DisplayArticleComponent } from './display-article/display-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    DisplayArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
