import { JsonPipe } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from "@angular/core";
import { throwError } from 'rxjs';
import { EmployeeBookingService } from 'src/app/services/employee.booking.service';

@Component({
    selector: 'employee-booking',
    templateUrl: './booking.component.html'
})

export class EmployeeBookingComponent implements OnInit
{
    constructor(private httpClient: HttpClient,private employeeBookingServe: EmployeeBookingService)
    {

    }

    object = {

    }

    ngOnInit(){

    }

    saveData()
    {
        var saveRecord = this.employeeBookingServe.saveOrUpdate(JSON.parse(JSON.stringify(this.object))).subscribe(
            res => {

            },
            error => this.errorMessage = <any>error);
            console.log(saveRecord);
    }

    public errorMessage(error : HttpResponse<any>) 
    {
        let errMsg : string;
        if(error instanceof HttpResponse){
            const body = error || '';
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }else{
            errMsg = error;
        }
        return throwError(error);
    }

}