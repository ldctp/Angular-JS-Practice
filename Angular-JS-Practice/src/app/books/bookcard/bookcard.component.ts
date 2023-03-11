import { Component, Input } from "@angular/core";

@Component({
    selector: 'pm-details',
    templateUrl: './bookcard.component.html',
    styleUrls: ['./bookcard.component.css']
})
export class BookCardComponent {
    showDetail: boolean = true;
    showProgress: boolean = false;

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
}