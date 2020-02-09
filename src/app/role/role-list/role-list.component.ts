import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoleService } from '../../service';
import { Role }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roles: Array<Role>;

constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit() {
  	this.roleService.getAll()
  		.then(data=> this.roles = data);
  }

  public details(id){
    this.router.navigate(['/roles/edit/'+id]);
  }

}
