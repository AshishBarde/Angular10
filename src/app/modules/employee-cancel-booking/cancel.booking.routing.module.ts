import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { EmployeeCancelBooking } from './cancel.booking.component';

const routes : Routes = [
    {
        path:'',
        component:EmployeeCancelBooking

    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class EmployeeCancelBookingRoutingModule {
    
}