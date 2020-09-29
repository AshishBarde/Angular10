import { environment } from '../../../environments/environment';
import { Component, OnInit, Directive } from '@angular/core';
@Directive()
export class BaseUrl implements OnInit {

  environmentName = environment.envName;
  BASE_URL = "URLName"

  constructor() {
    if (this.environmentName == 'dev') {
     


    } else if (this.environmentName == 'demo') {
     
    } else if (this.environmentName == 'QA') {
     
    } else {
      
    }
  }

  ngOnInit() {
    this.urlService = new BaseUrl();
  }
  urlService;
  protected rootUrl: string = "";
 

  public get $rootUrl(): string {
    return this.rootUrl;
  }

}