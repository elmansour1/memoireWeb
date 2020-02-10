import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	public isAuthenticated: boolean;
  	public authenticatedUser;
  	private users=[
    	{username:"admin", password:"1234",role:"ADMIN"},
    	{username:"user1", password:"1234",role:"USER"},
    	{username:"user2", password:"1234",role:"USER"}
  ]


  constructor() { }

  public login(username:string, password:string){
  	let user;
  	this.users.forEach(u=>{
  		if(u.username==username && u.password==password){
  			user=u;
  		}
  	});
  	if(user){
  		this.isAuthenticated=true;
  		this.authenticatedUser=user;
  	}else{
  		this.isAuthenticated=false;
  		this.authenticatedUser=undefined;
  	}
  }

   isAdmin(){
    if(this.authenticatedUser){
      return this.authenticatedUser.role.valueOf("ADMIN")>-1;
    }
    else return false;
  }

}
