import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ParcoursService } from '../../service';
import { Parcours }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-parcours-list',
  templateUrl: './parcours-list.component.html',
  styleUrls: ['./parcours-list.component.css']
})
export class ParcoursListComponent implements OnInit {

  parcours: Array<Parcours>;

  constructor(private router: Router, private parcoursService: ParcoursService) { }

  ngOnInit() {
  	this.parcoursService.getAll()
  		.then(data=> this.parcours = data);
  }

  public details(id){
    this.router.navigate(['/parcours/edit/'+id]);
  }

}
