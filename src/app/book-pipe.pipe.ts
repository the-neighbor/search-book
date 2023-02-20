import { Pipe, PipeTransform } from '@angular/core';
import { FetchBooksResponse, FetchBooksResponseItem, VolumeInfo } from './fetch-books.service';

export interface Book {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: {
    type: string;
    identifier: string;
  }[];
  pageCount: number;
  categories: string[];
}

@Pipe({
  name: 'bookPipe'
})
export class BookPipePipe implements PipeTransform {

  transform(value: FetchBooksResponse, ...args: unknown[]): Book[] {
    return value.items.map((item: FetchBooksResponseItem) => {
      return {
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        publisher: item.volumeInfo.publisher,
        publishedDate: item.volumeInfo.publishedDate,
        description: item.volumeInfo.description,
        industryIdentifiers: item.volumeInfo.industryIdentifiers,
        pageCount: item.volumeInfo.pageCount,
        categories: item.volumeInfo.categories
      }
    });
  }

}
