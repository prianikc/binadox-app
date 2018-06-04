import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminService {
private API = 'http://localhost:3000';
constructor(
    private _http: HttpClient
) { }
getServices(): Observable<any> {
return this._http.get<any>(this.API + '/services');
}
}
