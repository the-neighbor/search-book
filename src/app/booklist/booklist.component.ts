import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { FetchBooksService, VolumeInfo } from '../fetch-books.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  standalone: true,
  imports: [BookComponent, CommonModule],
  inputs: ['books']
})
export class BooklistComponent {
  @Input() books: VolumeInfo[] = [];
  @Input() addToWishlist!: Function;

}
