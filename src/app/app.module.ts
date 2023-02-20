import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './book/book.component';
import { BooklistComponent } from './booklist/booklist.component';
import { HomeComponent } from './home/home.component';
import { BookPipePipe } from './book-pipe.pipe';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchComponent,
    BookComponent,
    BooklistComponent,
    HomeComponent,
    HeaderComponent,
    WishlistComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
