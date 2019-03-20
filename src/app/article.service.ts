import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ArticleModel } from "./ArticleModel";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor(private http: HttpClient) {}
  baseurl: string = "http://localhost:3000/";
  getAllArticles() {
    return this.http.get<ArticleModel[]>(this.baseurl + "articles");
  }
  getArticleById(Id: string) {
    return this.http.get<ArticleModel>(this.baseurl + "article" + "/" + Id);
  }
  displayArticle(Id: string) {
    return this.http.get<ArticleModel>(this.baseurl + "article" + "/" + Id);
  }
}
