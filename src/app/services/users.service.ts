import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../models/user";

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



}
