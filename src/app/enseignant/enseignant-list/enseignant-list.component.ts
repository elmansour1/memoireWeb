import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EnseignantService } from '../../service';
import { Enseignant }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-enseignant-list',
  templateUrl: './enseignant-list.component.html',
  styleUrls: ['./enseignant-list.component.css']
})
export class EnseignantListComponent implements OnInit {

	enseignants: Array<Enseignant>;

  constructor(private router: Router, private enseignantService: EnseignantService) { }

  ngOnInit() {
  	this.enseignantService.getAll()
  		.then(data=> this.enseignants = data);
  }

  public details(id){
    this.router.navigate(['/enseignants/edit/'+id]);
  }

}
