import { LoginModel } from './../../models/login.model';
import {
  Component, OnInit, Injectable, Inject, EventEmitter,
  ApplicationRef, HostListener, ViewEncapsulation
} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit{

dialogRef: MatDialogRef<any>;

constructor(private appRef:ApplicationRef,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private dialog: MatDialog,){

}

loginRequest:LoginModel = new LoginModel();

ngOnInit() {

  }

  login()
  {
   this._router.navigate(['/employee/profile']);
  }


}