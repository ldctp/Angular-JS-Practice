import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl:'./pagenotfound.component.html',
    styleUrls: ['./pagenotfound.component.css']
})
export class PageNotFoundComponent implements OnInit {
    pageTitle: string = 'Book Details'
    constructor () {  }

    ngOnInit(): void {
        
    }
}