import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-progressbar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.css']
})
export class ProgressBarComponent implements OnChanges{
    @Input() progressAmount: number = 0;
    cropWidth: number = 220;
    @Output() progressAmountClicked: EventEmitter<string> = 
                    new EventEmitter<string>();
    ngOnChanges(): void {
        this.cropWidth = this.progressAmount * 220/100;
    }

    onClick(): void{
        this.progressAmountClicked.emit(this.progressAmount.toLocaleString());
    }
}