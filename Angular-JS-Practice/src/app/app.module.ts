import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/booklist/book-list.component';
import { BookCardComponent } from './books/bookcard/bookcard.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/stars/star.component';
import { ProgressBarComponent } from './shared/progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    BookCardComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
