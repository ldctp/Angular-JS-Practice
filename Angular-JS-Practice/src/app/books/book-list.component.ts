import { Component, OnInit } from '@angular/core';
import { IBook } from './IBook';

@Component({
    selector: 'pm-books',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    pageTitle: string = 'Book List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter;
        console.log('In setter:', value);
        this.filteredBooks = this.performFilter(value);
    }
    filteredBooks: IBook[] = [];
    books: IBook[] = [
        {
        'bookId': 1,
        'bookTitle': 'Witches Abroad',
        'author': 'Terry Pratchett',
        'releaseDate': '1991',
        'goodreadsRating': 4.24,
        'length': 295,
        'pagesRead': 4,
        'imageUrl': 'assets/images/witches-abroad.jpg'
        },
        {
        'bookId': 2,
        'bookTitle': 'This Wicked Fate',
        'author': 'Kalynn Bayron',
        'releaseDate': '2022',
        'length': 310,
        'goodreadsRating': 4.06,
        'pagesRead': 0,
        'imageUrl': 'assets/images/this-wicked-fate.png'
        }
    ];

    performFilter(filterBy: string): IBook[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.books.filter((book: IBook) => 
        book.bookTitle.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._listFilter = '';
    }

    ongoodreadsRatingClicked(message:string): void {
        this.pageTitle = 'Book List ' + message; 
    }
}