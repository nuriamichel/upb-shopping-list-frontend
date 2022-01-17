import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UsersService]
})
export class NavbarComponent implements OnInit {

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }

  setUser(){
    console.log("compartido")
    this.usersService.insert()
      .subscribe(res => {
        console.log(res)
      })

  }
  share() {
    this.setUser()
  }
}
