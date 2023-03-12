import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './stars/star.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './progressbar/progressbar.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
    declarations: [
        StarComponent,
        ConvertToSpacesPipe,
        ProgressBarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        ProgressBarComponent,
        ConvertToSpacesPipe
    ]
})
export class SharedModule { }