import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BooklistComponent } from '../booklist/booklist.component';
import { FetchBooksService, VolumeInfo } from '../fetch-books.service';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FetchBooksService],
  imports: [BooklistComponent, SearchComponent, HeaderComponent, WishlistComponent, CommonModule, MatToolbarModule],
  standalone: true
})
export class HomeComponent {
  searchQuery: string = "";
  books : VolumeInfo[] = [];
  wishlist : VolumeInfo[] = [];
  showWishlist: boolean = false;
  
  constructor(private fetchBooksService : FetchBooksService) {
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
    this.addToWishlist = this.addToWishlist.bind(this);
    this.removeFromWishlist = this.removeFromWishlist.bind(this);
    this.showWishlistHandler = this.showWishlistHandler.bind(this);
    this.showHomeHandler = this.showHomeHandler.bind(this);
  }
  triggerSearch() {
    this.fetchBooksService.getAll(this.searchQuery);
  }
  updateSearchQuery(value: string) {
    this.searchQuery = value;
    this.triggerSearch();
  }
  addToWishlist(book: VolumeInfo) {
    this.wishlist.push(book);
  }
  removeFromWishlist(book: VolumeInfo) {
    this.wishlist = this.wishlist.filter((b) => b.title !== book.title);
  }
  showWishlistHandler() {
    this.showWishlist = true;
  }
  showHomeHandler() {
    this.showWishlist = false;
  }
  ngOnInit() {
    this.fetchBooksService.books$.subscribe((books) => {
      this.books = books as VolumeInfo[];
      console.log(books)
    });
  }
}
