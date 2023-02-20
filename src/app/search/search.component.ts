import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FetchBooksService } from '../fetch-books.service';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [FormsModule, MatInputModule, MatIconModule],
  standalone: true
})
export class SearchComponent {
  @Input() updateSearchQuery!: Function;
  searchQuery: string = '';

  searchHandler(event: any) {
    event.preventDefault();
    this.updateSearchQuery(event.target.value);
  }

  ngOnInit(): void {
  }
}
