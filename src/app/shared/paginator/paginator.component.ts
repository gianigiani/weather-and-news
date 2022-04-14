import { Component, Input, OnInit } from "@angular/core";
import { NewsApiService } from "src/app/news-api/news-api.service";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.css"],
})
export class PaginatorComponent implements OnInit {
  @Input() numberOfPages: number;
  currentPage = 1;

  pageOptions: number[];

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit() {
    this.getPageNr();
  }

  getPageNr() {
    this.pageOptions = [
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2,
    ].filter(
      (pageNumber) => pageNumber >= 1 && pageNumber <= this.numberOfPages
    );
  }

  onChangePage(page: number) {
    this.newsApiService.getPage(page);
    this.currentPage = page;
    this.getPageNr();
  }
}
