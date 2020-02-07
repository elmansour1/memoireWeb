import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SpecialisationService } from '../../service';
import { Specialisation }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-specialisation-list',
  templateUrl: './specialisation-list.component.html',
  styleUrls: ['./specialisation-list.component.css']
})
export class SpecialisationListComponent implements OnInit {

  specialisations: Array<Specialisation>;

  constructor(private router: Router, private specialisationService: SpecialisationService) { }

  ngOnInit() {
  	this.specialisationService.getAll()
  		.then(data=> this.specialisations = data);
  }

  public details(id){
    this.router.navigate(['/specialisations/edit/'+id]);
  }

}
