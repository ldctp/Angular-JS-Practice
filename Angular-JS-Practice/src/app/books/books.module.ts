import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './booklist/book-list.component';
import { BookDetailComponent } from './bookdetail/book-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/stars/star.component';
import { BookCardComponent } from './bookcard/bookcard.component';
import { ProgressBarComponent } from '../shared/progressbar/progressbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { BookDetailGuard } from './bookdetail/book-detail.guard';

@NgModule({
    declarations: [
        BookListComponent,
        BookDetailComponent,
        ConvertToSpacesPipe,
        StarComponent,
        BookCardComponent,
        ProgressBarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'books', component: BookListComponent },
            { path: 'books/:id',
              canActivate: [ BookDetailGuard], 
              component: BookDetailComponent },
        ])
    ]
})
export class BooksModule { }