import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/booklist/book-list.component';
import { BookCardComponent } from './books/bookcard/bookcard.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/stars/star.component';
import { ProgressBarComponent } from './shared/progressbar/progressbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailComponent } from './books/bookdetail/book-detail.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound.component';
import { WelcomeComponent } from './welcome.component';
import { BookDetailGuard } from './books/bookdetail/book-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    BookCardComponent,
    ProgressBarComponent,
    BookDetailComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'books', component: BookListComponent },
      { path: 'books/:id',
        canActivate: [ BookDetailGuard], 
        component: BookDetailComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
