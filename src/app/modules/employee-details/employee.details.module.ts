import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModules } from '../material-module/material.module';
import { EmployeeDetailsComponent } from './employee.details.component';
import { EmployeeDetailsRoutingModule } from './employee.details.routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        MaterialModules,
        EmployeeDetailsRoutingModule
    ],
    declarations:[
        EmployeeDetailsComponent
    ],
    exports:[
        EmployeeDetailsComponent
    ],
    entryComponents:[
        EmployeeDetailsComponent
    ],
    providers:[

    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]

})


export class EmployeeDetailsModule {

}