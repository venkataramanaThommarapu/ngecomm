import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/dev.environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  all() {
    //return this.http.get(environment.api + "/items")      // javascript way of code
    return this.http.get(`${environment.api}/items`) //type script way
  }

  create(payload: any) {
    return this.http.post(`${environment.api}/items`, payload)
  }

  singleProduct(id: any) {
    return this.http.get(`${environment.api}/items/${id}`)
  }

  update(payload: any, id: any) {
    return this.http.put(`${environment.api}/items/${id}`, payload)
  }
}
