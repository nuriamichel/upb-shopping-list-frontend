import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url='http://skynet.lp.upb.edu/~shoplist/contact/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  test() {
    return this.http.get(`${this.url}contact.php`);
  }



}
