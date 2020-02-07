import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuteurService } from '../../service';
import { Auteur }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-auteur-list',
  templateUrl: './auteur-list.component.html',
  styleUrls: ['./auteur-list.component.css']
})
export class AuteurListComponent implements OnInit {


	auteurs: Array<Auteur>;

  constructor(private auteurService: AuteurService, private router: Router) { }

  ngOnInit() {
  	this.auteurService.getAll()
  		.then(data=> this.auteurs = data);
  }

  public details(id){
    this.router.navigate(['/auteurs/edit/'+id]);
  }

}
