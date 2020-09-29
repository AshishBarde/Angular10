import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeUrl  {

  protected getEmployee: string ='';
  
  public get $getEmployee(): string {
    return this.getEmployee;
  }

}