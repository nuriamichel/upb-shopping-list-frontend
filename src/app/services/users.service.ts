import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../models/user";
import {Product} from "../models/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url='https://skynet.lp.upb.edu/~shoplist/upb-shopping-list-backend/server/'; // disponer url de su servidor que tiene las páginas PHP

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
  getProductsTached(email:string, list:string){
    return this.http.get(`${this.url}getProdBuyed.php`, {params: {email: email, lista: list}});
  }
  getActualList(email:string, list:string){
    return this.http.get(`${this.url}getActualList.php`, {params: {email: email, lista: list}});
  }

  delProd(id:number){
    return this.http.get(`${this.url}delProduct.php`, {params: {prodid: id}});
  }

  updateProd(id:number){
    return this.http.get(`${this.url}updateProd.php`, {params: {prodid: id}});
  }

  getLists(email:string){
    return this.http.get(`${this.url}getListaPrincipal.php`, {params: {email: email}});
  }


}
