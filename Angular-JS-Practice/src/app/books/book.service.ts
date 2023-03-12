import { IBook } from "src/app/books/IBook"
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private bookUrl = 'api/books/books.json';

    constructor(private http: HttpClient) { }

    getBooks(): Observable<IBook[]> {
        return this.http.get<IBook[]>(this.bookUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
    console.error(errorMessage);
    return throwError(()=>errorMessage);
    }
}