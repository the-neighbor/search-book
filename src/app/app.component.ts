import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { FetchBooksService } from './fetch-books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FetchBooksService]
})
export class AppComponent {
  title = 'search-book';
  fetchBooks! : FetchBooksService;
  constructor(private fetchBooksService : FetchBooksService) {
  }
  ngOnInit() {
    this.fetchBooksService.getAll("harry potter");
  }
}
