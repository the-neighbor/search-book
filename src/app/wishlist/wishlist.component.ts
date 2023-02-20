import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VolumeInfo } from '../fetch-books.service';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  standalone: true
})
export class WishlistComponent {
  @Input() wishlist: VolumeInfo[] = [];
  @Input() removeFromWishlist!: Function;
}
