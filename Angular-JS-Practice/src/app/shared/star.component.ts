import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() goodreadsRating: number = 0;
    cropWidth: number = 75;
    @Output() goodreadsRatingClicked: EventEmitter<string> = 
                    new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.goodreadsRating * 75/5;
    }

    onClick(): void{
        this.goodreadsRatingClicked.emit('clicked!');
    }
}