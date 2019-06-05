import { CreateBookDTO } from './dto/create-book.dto';
import { BooksService } from './books.service';
import { Controller, Get, Param, Post, Delete, Body, Query } from '@nestjs/common';

@Controller('books')
export class BooksController {

  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks();
    return books;
  }

  @Get(':bookID')
  async getBook(@Param('bookID') bookID: number) {
    const book = await this.booksService.getBook(bookID);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO) {
    const book = await this.booksService.addBook(createBookDTO);
    return book;
  }

  @Delete()
  async deleteBook(@Query() query) {
    const book = await this.booksService.deleteBook(query.bookID);
    return book;
  }

}
