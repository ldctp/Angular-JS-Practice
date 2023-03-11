import { Component, OnInit } from '@angular/core';
import { IBook } from '../IBook';
import {} from '../../app.module'
import { BookService } from '../book.service';

@Component({
    selector: 'pm-books',
    templateUrl: './book-list.component.html',
    styleUrls: ['../app.component.css', './book-list.component.css']
})
export class BookListComponent implements OnInit {
    pageTitle: string = 'Book List';
    showSearch: boolean = false;

    constructor(private bookService: BookService) {}
    
    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter;
        this.filteredBooks = this.performFilter(value);
    }

    filteredBooks: IBook[] = [];
    books: IBook[] = [];

    performFilter(filterBy: string): IBook[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.books.filter((book: IBook) => 
        book.bookTitle.toLocaleLowerCase().includes(filterBy));
    }

    ngOnInit(): void {
        this.books = this.bookService.getBooks();
        this.filteredBooks = this.books;
    }

    toggleSearch(): void{
        this.showSearch = !this.showSearch;
    }
}