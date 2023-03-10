import { Component } from '@angular/core';

@Component({
    selector: 'pm-books',
    templateUrl: './book-list.component.html'
})
export class BookListComponent {
    pageTitle: string = 'Book List';
    books: any[] = [
        {
        'bookId': 1,
        'bookTitle': 'Witches Abroad',
        'author': 'Terry Pratchett',
        'releaseDate': '1991',
        'length': 295,
        'goodreadsRating': 4.24,
        'imageURL': 'assets/images/witches-abroad.jpg'
        },
        {
            'bookId': 2,
            'bookTitle': 'This Wicked Fate',
            'author': 'Kalynn Bayron',
            'releaseDate': '2022',
            'length': 310,
            'goodreadsRating': 4.06,
            'imageURL': 'assets/images/wicked-fate.jpg'
            }
    ];
}