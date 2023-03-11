import { Component, Input, OnChanges, OnInit, Output } from "@angular/core";

@Component({
    selector: 'pm-details',
    templateUrl: './bookcard.component.html',
    styleUrls: ['./bookcard.component.css']
})
export class BookCardComponent{
    showDetail: boolean = true;
    showProgress: boolean = false;
    percentage: number = 0;

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

    percentageCalc(pages: number): number {
        const percentagenum = Number(((this.pagesRead/this.length)*100).toFixed(2));
        return this.percentage = percentagenum
    }    
}