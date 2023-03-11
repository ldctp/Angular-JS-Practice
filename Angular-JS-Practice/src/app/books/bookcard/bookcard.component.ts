import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
    selector: 'pm-details',
    templateUrl: './bookcard.component.html',
    styleUrls: ['./bookcard.component.css']
})
export class BookCardComponent{
    showDetail: boolean = true;
    showProgress: boolean = false;
    percentage: number = 0;

    private _pagesReadInput: number = 1;
    get pagesReadInput(): number {
        return this._pagesReadInput;
    }
    set pagesReadInput(value: number) {
        this._pagesReadInput;
        this.percentage = this.percentageCalc(value);
    }

    @Input() title: string = '';
    @Input() author: string = '';
    @Input() releaseDate: string = '';
    @Input() length: number = 1;
    @Input() pagesRead: number = 1;
    @Input() goodreadsRating: number = 0;

    toggleDetail(): void{
        this.showDetail = !this.showDetail;
    }

    toggleProgress(): void{
        this.showProgress = !this.showProgress;
    }

    percentageCalc(pages: number): number{
        return this.percentage = Number(((this._pagesReadInput/this.length)*1000).toFixed(2));
    }    

    // performFilter(filterBy: string): IBook[] {
    //     filterBy = filterBy.toLocaleLowerCase();
    //     return this.books.filter((book: IBook) => 
    //     book.bookTitle.toLocaleLowerCase().includes(filterBy));
    // }
}