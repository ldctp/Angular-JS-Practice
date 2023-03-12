import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../IBook';

@Component({
    templateUrl:'./book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
    pageTitle: string = 'Book Details'
    book: IBook | undefined;
    
    constructor (private route: ActivatedRoute,
        private router: Router) {  }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id')); 
        this.pageTitle += `: ${id}`;       
    }

    onBack(): void {
        this.router.navigate(['/books']);
    }
}