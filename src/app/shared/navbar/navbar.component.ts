import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsersService } from "../../services/users.service";

import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { User } from "../../models/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UsersService]
})
export class NavbarComponent implements OnInit {

  title: string = "Lista de Shopping";

  socialUser?: SocialUser;
  isLoggedin?: boolean;
  userMod?: User;

  constructor(private usersService: UsersService,
    private socialAuthService: SocialAuthService, private _sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
      this.userMod = new User(Number(this.socialUser.id), this.socialUser.email, this.socialUser.photoUrl, this.socialUser.firstName)
      if (this.isLoggedin) {
        console.log(this.userMod)
        this.usersService.addUser(this.userMod)
          .subscribe(res => {
            console.log(res)
          })
      }
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

  setUser() {
    console.log("compartido")
    this.usersService.insert()
      .subscribe(res => {
        console.log(res)
      })

  }

  sendSideBarAction() {
    this._sidebarService.sidebarAction$.next(true)
  }

  getUser() {
    /*addUser(){
      console.log("compartido")
      this.usersService.insert()
        .subscribe(res => {
          console.log(res)
        })

    }
    share() {
      this.setUser()}*/
  }

  share() {
    this.setUser()
  }
}
