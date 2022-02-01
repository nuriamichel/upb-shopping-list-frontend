import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../models/user";
import {Product} from "../models/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url='http://skynet.lp.upb.edu/~shoplist/upb-shopping-list-backend/server/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  insert() {
    return this.http.get(`${this.url}insert.php`);
  }

  addUser(user: User) {
    return this.http.post(`${this.url}addUser.php`, user);
  }
  addProduct(prod: Product) {
    return this.http.post(`${this.url}addProduct.php`, prod);
  }

  getProducts(email:string, list:string){
    return this.http.get(`${this.url}getProducts.php`, {params: {email: email, lista: list}});
  }
  getActualList(email:string, list:string){
    return this.http.get(`${this.url}getActualList.php`, {params: {email: email, lista: list}});
  }
}
