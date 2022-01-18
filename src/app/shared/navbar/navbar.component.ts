import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UsersService]
})
export class NavbarComponent implements OnInit {

  constructor(private usersService: UsersService, private _sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

  sendSideBarAction() {
    this._sidebarService.sidebarAction$.next(true)
  }

  getUser() {
    console.log("compartido")
    this.usersService.getUser()
      .subscribe(res => {
        console.log(res)
      })

  }
  share() {
    this.getUser()
  }
}
