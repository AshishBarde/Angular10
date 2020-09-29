
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {share, catchError, map} from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';







@Injectable()
export class HttpService {
  constructor(private http: HttpClient,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) 
    { }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', 'Basic c3ByaW5nLWJlbmVmaXQ6c3ByaW5nLWJlbmVmaXQ=');
    headers.append('Content-Type', 'application/json');
  }

  getAll(url: string): Observable<any> {
    let accessTokenParam = url.indexOf("?") >= 1 ? "&access_token=" + localStorage.getItem("access_token") : "?access_token=" + localStorage.getItem("access_token");
    url = url + accessTokenParam;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError),);
  }

  delete(url: string): Observable<any> {
    let accessTokenParam = url.indexOf("?") >= 1 ? "&access_token=" + localStorage.getItem("access_token") : "?access_token=" + localStorage.getItem("access_token");
    url = url + accessTokenParam;
    return this.http.delete(url).pipe(
      map(this.extractData),
      catchError(this.handleError),);
  }

  get(url: string): Observable<any> {
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError),);
  }

  save(object: any, url: string): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(url, object, options).pipe(
      share(),
      map(this.extractData),
      catchError(this.handleError),)
  }

  update(object: any, url: string): Observable<any> {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.put(url, object, options).pipe(
      share(),
      map(this.extractData),
      catchError(this.handleError),);
  }

  getAllByEntityId(object: any, url: string): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(url, object, options).pipe(
      share(),
      map(this.extractData),
      catchError(this.handleError),);
  }

  getAllByEntityIds(object: any, url: string, pages: string): Observable<any> {
    let accessTokenParam = url.indexOf("?") >= 1 ? "&access_token=" + localStorage.getItem("access_token") : "?access_token=" + localStorage.getItem("access_token");
    url = url + accessTokenParam + pages;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(url, object, options).pipe(
      share(),
      map(this.extractData),
      catchError(this.handleError),);
  }

  public extractData(res: HttpResponse<any>) {
    let body = res;
    return body;
  }

  public handleError(error:  HttpResponse<any>) {

    let errMsg: string;
    if (error instanceof HttpResponse) {
      const body = error || '';
      const err = body != null ? JSON.stringify(body) : JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error;
    }
    return observableThrowError(error);
  }

  login(object: any, url: string): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append("Authorization", "Basic c3ByaW5nLWJlbmVmaXQ6c3ByaW5nLWJlbmVmaXQ=")
    let options = { headers: headers };
    return this.http.post(url, object, options).pipe(
      share(),
      map(this.extractData),
      catchError(this.handleError),);
  }


  logout(object: any, url: string): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(url, object, options).pipe(
      share(),
      map(this.extractData),
      catchError(this.handleError),);
  }

}