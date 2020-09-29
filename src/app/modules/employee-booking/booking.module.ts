import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeBookingService } from 'src/app/services/employee.booking.service';
import { HttpService } from 'src/app/services/http.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModules } from '../material-module/material.module';
import { EmployeeBookingComponent } from './booking.component';
import { EmployeeBookingRoutingModule } from './booking.routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        MaterialModules,
        EmployeeBookingRoutingModule
    ],
    declarations:[
        EmployeeBookingComponent
    ],
    exports:[
        EmployeeBookingComponent
    ],
    entryComponents:[
        EmployeeBookingComponent
    ],
    providers:[
        EmployeeBookingService,
        HttpService

    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]

})


export class EmployeeBookingModule {

}