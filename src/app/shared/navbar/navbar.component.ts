import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import {User} from "../../models/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UsersService]
})
export class NavbarComponent implements OnInit {
  socialUser?: SocialUser;
  isLoggedin?: boolean;
  userMod?:User;
  constructor(private usersService:UsersService,
              private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
      this.userMod = new User(Number(this.socialUser.id), this.socialUser.email, this.socialUser.photoUrl, this.socialUser.firstName)
      if(this.isLoggedin){
        this.usersService.addUser(this.userMod)
      }
    });
    }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
  setUser(){
    console.log("compartido")
    this.usersService.insert()
      .subscribe(res => {
        console.log(res)
      })

  }

  addUser(){
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
