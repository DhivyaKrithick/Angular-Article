import { Component, OnInit, Input } from "@angular/core";
import { ArticleModel } from "../ArticleModel";
import { ArticleService } from "../article.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-display-article",
  templateUrl: "./display-article.component.html",
  styleUrls: ["./display-article.component.css"]
})
export class DisplayArticleComponent implements OnInit {
  article: any = [];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    let articleId = localStorage.getItem("articleId");
    if (!articleId) {
      alert("Error.. Please try again!!");
      this.router.navigate([""]);
      return;
    }
    this.articleService.getArticleById(articleId).subscribe(res => {
      console.log(res);
      this.article = res;
    });
  }
}
