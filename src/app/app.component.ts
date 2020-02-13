import { Component,OnInit } from '@angular/core';


import {AuthenticationService, TokenStorageService} from './service';


declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'memoireWeb';

  constructor(private authenticationService: AuthenticationService,
              private  tokenStorageService: TokenStorageService){}

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showVisitorBoard= false;
  username: string;
  currentUser: any;
  

  ngOnInit() {
  	$(document).ready(function(){
    $('.sidenav').sidenav();
  	});


    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      // this.showVisitorBoard = this.roles.includes('ROLE_VISITOR');

      this.username = user.username;
    }

    this.currentUser = this.tokenStorageService.getUser();


  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
