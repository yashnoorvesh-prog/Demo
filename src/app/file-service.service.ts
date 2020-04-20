import {Injectable} from '@angular/core';
import {HttpResponse, HttpParams} from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileServiceService {

  constructor(private http: Http) {}

  buildApk(s:any):Observable<any>{
    return this.http.get('http://localhost:8080/app/build/', {params: {s}});

  }
  downloadFile(): Observable<any>{
		return this.http.get('http://localhost:8080/app/download/', {responseType: ResponseContentType.Blob});
  }
   
}