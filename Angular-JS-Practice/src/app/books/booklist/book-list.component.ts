import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBook } from '../IBook';
import {} from '../../app.module'
import { BookService } from '../book.service';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './book-list.component.html',
    styleUrls: ['../app.component.css', './book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Book List';
    showSearch: boolean = false;
    errorMessage: string = '';
    sub!: Subscription;

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
        this.sub = this.bookService.getBooks().subscribe({
            next: books => {
                this.books = books;
                this.filteredBooks = this.books;
            },
            error: err => this.errorMessage = err
        });
        
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    toggleSearch(): void{
        this.showSearch = !this.showSearch;
    }
}