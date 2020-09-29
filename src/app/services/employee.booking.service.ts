import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class EmployeeBookingService
{
    constructor(private http : HttpClient,private httpserver : HttpService)
    {

    }

    saveOrUpdate(object):Observable<any> {
        return this.httpserver.save(object,'');
    }

    get():Observable<any> {
        return this.httpserver.get("");
    }

}