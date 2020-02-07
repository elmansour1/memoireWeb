import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Specialisation } from '../model';

import { SpecialisationService } from '../service';


declare var $:any;


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

	specialisations: Array<Specialisation>;

  constructor(private router : Router, private specialisationService : SpecialisationService) { }

  ngOnInit() {
  	$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  	this.specialisationService.getAll()
  		.then(data=> this.specialisations = data);
  }

}
