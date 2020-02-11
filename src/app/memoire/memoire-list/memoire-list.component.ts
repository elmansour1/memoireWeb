import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemoireService , TokenStorageService} from '../../service';
import { Memoire }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-memoire-list',
  templateUrl: './memoire-list.component.html',
  styleUrls: ['./memoire-list.component.css']
})
export class MemoireListComponent implements OnInit {

private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showVisitorBoard= false;
  username: string;
  currentUser: any;
  memoires: Array<Memoire>;

  constructor(private router: Router, 
              private memoireService: MemoireService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  	this.memoireService.getAll()
  		.then(data=> this.memoires = data);

      this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.showVisitorBoard = this.roles.includes('ROLE_VISITOR');

      this.username = user.username;
    }

    this.currentUser = this.tokenStorageService.getUser();
  }

  public details(id){
    this.router.navigate(['/memoires/edit/'+id]);
  }

}
