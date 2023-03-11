import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    showRating: boolean = false;
    @Input() goodreadsRating: number = 0;
    cropWidth: number = 150;
    @Output() goodreadsRatingClicked: EventEmitter<string> = 
                    new EventEmitter<string>();
    ngOnChanges(): void {
        this.cropWidth = this.goodreadsRating * 150/5;
    }

    onClick(): void{
        this.goodreadsRatingClicked.emit(this.goodreadsRating.toLocaleString());
    }

    toggleRating(): void{
        this.showRating = !this.showRating;
    }
}