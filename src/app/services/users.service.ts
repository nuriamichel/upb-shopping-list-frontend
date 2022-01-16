import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  selectedUser?:User;
  readonly URI_API = "https://186.121.251.3:4500/~shoplist"   //TODO

  constructor(private http:HttpClient) {
    this.selectedUser = new User()
  }

  getUser(){
    return this.http.get(this.URI_API);
  }

}
