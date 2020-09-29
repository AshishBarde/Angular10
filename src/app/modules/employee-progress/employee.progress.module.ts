import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModules } from '../material-module/material.module';
import { EmployeeProgressComponent } from './employee.progress.component';
import { EmployeeProgressRoutingModule } from './employee.progress.routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        MaterialModules,
        EmployeeProgressRoutingModule
    ],
    declarations:[
        EmployeeProgressComponent
    ],
    exports:[
        EmployeeProgressComponent
    ],
    entryComponents:[
        EmployeeProgressComponent
    ],
    providers:[

    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]

})


export class EmployeeProgressModule {

}