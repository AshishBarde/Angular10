import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { EmployeeProgressComponent } from './employee.progress.component';

const routes : Routes = [
    {
        path:'',
        component:EmployeeProgressComponent

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

export class EmployeeProgressRoutingModule {
    
}