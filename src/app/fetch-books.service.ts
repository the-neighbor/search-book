import { Injectable } from '@angular/core';
import { map, Observable, pluck, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookPipePipe } from './book-pipe.pipe';



export interface VolumeInfo {
  title : string;
  authors : string[];
  publisher : string;
  publishedDate : string;
  description : string;
  industryIdentifiers : {
    type : string;
    identifier : string;
  }[];
  pageCount : number;
  categories : string[];
  imageLinks : {
    smallThumbnail : string;
    thumbnail : string;
  };
}

export interface FetchBooksResponseItem {
  volumeInfo : VolumeInfo;
}

export interface FetchBooksResponse {
  items : FetchBooksResponseItem[];
}


@Injectable({
  providedIn: 'root'
})
export class FetchBooksService {
  private apiUrl : string = "https://www.googleapis.com/books/v1/volumes?q=";
  private search : string = 'harry potter';
  private url : string = "";
  books$ = new Subject();
  results : any = [];
  getAll(newSearch : string) {
    this.search = newSearch;
    this.url = this.apiUrl + this.search;
    return this.http.get<FetchBooksResponse>(this.url).pipe(
      pluck('items'),
      map((items) => {return items.map((item)=> (item as FetchBooksResponseItem).volumeInfo)}),
      tap((data : VolumeInfo[])=>{
      this.books$.next(data);
      console.log("hello")

    })
    ).subscribe();
  }

  constructor(private http:HttpClient) {
  }
}
