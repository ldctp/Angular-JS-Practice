import { Component, OnInit } from '@angular/core';
import { IBook } from '../IBook';
import {} from '../../app.module'

@Component({
    selector: 'pm-books',
    templateUrl: './book-list.component.html',
    styleUrls: ['../app.component.css', './book-list.component.css']
})
export class BookListComponent implements OnInit {
    pageTitle: string = 'Book List';
    showSearch: boolean = false;

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter;
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
        },
        {
        'bookId': 3,
        'bookTitle': 'The Bloody Chamber',
        'author': 'Angela Carter',
        'releaseDate': '1979',
        'length': 149,
        'goodreadsRating': 3.94,
        'pagesRead': 0,
        'imageUrl': 'assets/images/bloody-chamber.jpeg'
        },
        {
        'bookId': 4,
        'bookTitle': 'A Deadly Education',
        'author': 'Naomi Novik',
        'releaseDate': '2020',
        'length': 313,
        'goodreadsRating': 4.00,
        'pagesRead': 0,
        'imageUrl': 'assets/images/deadly-education.jpg'
        },
        {
        'bookId': 5,
        'bookTitle': 'The Secret History',
        'author': 'Donna Tartt',
        'releaseDate': '1992',
        'length': 628,
        'goodreadsRating': 4.17,
        'pagesRead': 0,
        'imageUrl': 'assets/images/secret-history.jpg'
        },
        {
        'bookId': 6,
        'bookTitle': 'Legends & Lattes',
        'author': 'Travis Baldree',
        'releaseDate': '2022',
        'length': 308,
        'goodreadsRating': 4.33,
        'pagesRead': 282,
        'imageUrl': 'assets/images/legends-and-lattes.jpg'
        }
    ];

    performFilter(filterBy: string): IBook[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.books.filter((book: IBook) => 
        book.bookTitle.toLocaleLowerCase().includes(filterBy));
    }

    ngOnInit(): void {
        this._listFilter = '';
    }

    toggleSearch(): void{
        this.showSearch = !this.showSearch;
    }
}