import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Data } from './MockData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  product = Data;
  api = 'https://60f8f361ee56ef0017975b6b.mockapi.io/products'

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api)
  }

  read(id:number): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`)
  }

  addProduct(item:any): Observable<Product> {
    return this.http.post<Product>(this.api, item);
  }

  removeProduct(id:number): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
    
  }

  editProduct(item: Product):Observable<Product> {
    return this.http.put<Product>(`${this.api}/${item.id}`, item);
  }

}
