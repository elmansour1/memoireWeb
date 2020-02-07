import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DepartementService } from '../../service';
import { Departement }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {

	departements: Array<Departement>;

  constructor(private router: Router, private departementService: DepartementService) { }

  ngOnInit() {
  	this.departementService.getAll()
  		.then(data=> this.departements = data);
  }

  public details(id){
    this.router.navigate(['/departements/edit/'+id]);
  }

}
