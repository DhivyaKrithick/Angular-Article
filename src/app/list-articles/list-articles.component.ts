import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ArticleModel } from "../ArticleModel";
import { ArticleService } from "../article.service";

@Component({
  selector: "app-list-articles",
  templateUrl: "./list-articles.component.html",
  styleUrls: ["./list-articles.component.css"]
})
export class ListArticlesComponent implements OnInit {
  articles: ArticleModel[];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.getAllArticles();
  }
  getAllArticles(): void {
    this.articleService.getAllArticles().subscribe(data => {
      console.log(data);
      this.articles = data;
    });
  }
  displayArticle(article: ArticleModel) {
    localStorage.removeItem("articleId");
    localStorage.setItem("articleId", article.Id);
    this.router.navigate(["display-article"]);
  }

  p: number = 1;
}
