import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeBookingComponent } from './booking.component';

const routes : Routes = [
    {
        path: '',
        component: EmployeeBookingComponent
        
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
export class EmployeeBookingRoutingModule
{

}