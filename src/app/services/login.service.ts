
import { Observable } from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';





export class LoginService {

  constructor(private http: HttpClient,
    private router: Router,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute) {

  }


get(userId:number,id:number): Observable<any> {
    return this.httpService.get('url' + "employees/" + userId + "/dependents" + "/" + id);
}

getAll(): Observable<any>{
return this.httpService.getAll('url');
}

getOne(id: number): Observable<any> {
return this.httpService.get('url' + "/" + id);

}

  setOne(userId:Number, roleName:String): Observable<any> {
      return this.httpService.get('url' + "/" + userId + "/" + roleName);
  }

  saveOrUpdate(object, userId:Number): Observable<any> {
    return this.httpService.save(object, 'url' + "employees/" + userId + "/dependents");
  }

delete(id:Number): Observable<any>{
return this.httpService.delete('url' + "/" + id);
}

}
