import { Component,OnInit } from '@angular/core';


import {AuthenticationService} from './service/authentication.service';


declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'memoireWeb';

  constructor(private authenticationService: AuthenticationService){}

  ngOnInit() {
  	$(document).ready(function(){
    $('.sidenav').sidenav();
  	});

  }
}
