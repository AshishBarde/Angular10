
import { NgModule } from '@angular/core';
import { MatDialogModule} from '@angular/material/dialog'
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSliderModule} from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    imports: [
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        MatTooltipModule,
        MatSliderModule
    ],
    declarations: [
        /*MatDialogConfig,
        MatDialogRef*/
    ],
    providers: [
    ],
    exports: [
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatRadioModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule,
        MatSliderModule
       /* MatDialogConfig,
        MatDialogRef*/
    ]
})
export class MaterialModules {

}
