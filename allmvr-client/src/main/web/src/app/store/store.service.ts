import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private baseUrl = '/store/';
  store: Store;
  
  constructor(private httpClient: HttpClient) { }

  createCustomer(store: Store): Observable<any>{
  const req = new HttpRequest('POST', this.baseUrl+'add',store, {responseType:'text'});
  return this.httpClient.request(req);
  }
  getShopTypes():Observable<any>{
    return this.httpClient.get('/shoptype/')
  }
}
