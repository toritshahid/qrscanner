import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 result = new Subject<any>();
  constructor() { }
  sendResult(data: any){
    this.result.next(data)
  }
  getResult(): Observable<any>{
    return this.result.asObservable();
  }
}
