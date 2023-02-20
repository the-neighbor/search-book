import { Component, Input } from '@angular/core';
import { VolumeInfo } from '../fetch-books.service';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  imports: [MatCardModule, MatListModule, MatButtonModule, CommonModule],
  standalone: true
})
export class BookComponent {
  @Input() book!: VolumeInfo;
  @Input() addToWishlist!: Function;

  wishlistHandler() {
    this.addToWishlist(this.book);
    console.log("heloo")
  }
}