import { BOOKS } from './mocks/books.mock';
import { Injectable, HttpException } from '@nestjs/common';
import { promises } from 'fs';

@Injectable()
export class BooksService {

  books = BOOKS;

  getBooks(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.books);
    });
  }

  getBook(bookID): Promise<any> {
    const id = Number(bookID);
    return new Promise( resolve => {
      const book = this.books.find(book1 => book1.id === id);
      if (!book) {
        throw new HttpException ('Book does not exists!', 404);
      }
      resolve(book);
    });
  }

  addBook(book): Promise<any> {
    return new Promise(resolve => {
      this.books.push(book);
      resolve(this.books);
    });
  }

  deleteBook(bookId): Promise<any> {
    const id = Number(bookId);
    return new Promise(resolve => {
      const index = this.books.findIndex(book2 => book2.id === id);
      if (index === -1) {
        throw new HttpException('Book does not exist!', 404);
      }
      this.books.splice(1, index);
      resolve(this.books);
    });
  }

}
