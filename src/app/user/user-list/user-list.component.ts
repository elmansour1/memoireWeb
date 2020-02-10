import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../service';
import { User }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

users: Array<User>;

constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  	this.userService.getAll()
  		.then(data=> this.users = data);
  }

  public details(id){
    this.router.navigate(['/users/edit/'+id]);
  }
  

}
