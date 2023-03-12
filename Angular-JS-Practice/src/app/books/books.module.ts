import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './booklist/book-list.component';
import { BookDetailComponent } from './bookdetail/book-detail.component';
import { BookCardComponent } from './bookcard/bookcard.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { BookDetailGuard } from './bookdetail/book-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BookListComponent,
        BookDetailComponent,
        BookCardComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'books', component: BookListComponent },
            { path: 'books/:id',
              canActivate: [ BookDetailGuard], 
              component: BookDetailComponent },
        ]),
        SharedModule
    ]
})
export class BooksModule { }