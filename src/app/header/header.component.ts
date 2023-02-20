import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [MatToolbarModule, MatButtonModule],
  standalone: true
})
export class HeaderComponent {
  @Input() showWishlistHandler! : Function;
  @Input() showHomeHandler! : Function;
}
