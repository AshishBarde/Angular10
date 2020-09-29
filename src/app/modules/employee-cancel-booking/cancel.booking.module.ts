import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeBookingService } from 'src/app/services/employee.booking.service';
import { HttpService } from 'src/app/services/http.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeBookingModule } from '../employee-booking/booking.module';
import { MaterialModules } from '../material-module/material.module';
import { EmployeeCancelBooking } from './cancel.booking.component';
import { EmployeeCancelBookingRoutingModule } from './cancel.booking.routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        MaterialModules,
        EmployeeCancelBookingRoutingModule,
        EmployeeBookingModule
    ],
    declarations:[
        EmployeeCancelBooking
    ],
    exports:[
        EmployeeCancelBooking
    ],
    entryComponents:[
        EmployeeCancelBooking
    ],
    providers:[

    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]

})


export class EmployeeCancelBookingModule {

}