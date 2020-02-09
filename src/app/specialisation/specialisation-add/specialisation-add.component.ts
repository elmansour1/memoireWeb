import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { SpecialisationService , DepartementService, ParcoursService } from '../../service';
import { Specialisation, Departement, Parcours }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-specialisation-add',
  templateUrl: './specialisation-add.component.html',
  styleUrls: ['./specialisation-add.component.css']
})
export class SpecialisationAddComponent implements OnInit {


  specialisation: Specialisation = new Specialisation();
  departements: Array<Departement>;
  parcours: Array<Parcours>;

  optionForm= new FormGroup({
    code:new FormControl(),
    description:new FormControl()
  });

  departementSelected: Departement;
  parcoursSelected: Parcours;


  constructor(	private router: Router, 
  				private specialisationService: SpecialisationService, 
  				private departementService: DepartementService, 
  				private parcoursService: ParcoursService) { }

  ngOnInit() {
  	this.specialisation = new Specialisation();
  	this.departementService.getAll()
  		.then(data=> this.departements = data);
  	this.parcoursService.getAll()
  		.then(data=> this.parcours = data);
  	$('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '10%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        complete: function () { }
    });
    $(".modal").modal('open');
  }


  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['specialisations']);
  }

  onSaveSpecialisation(){
  		console.log("BONJOUR");
	  	console.log(this.specialisation);
	 let tmp:Specialisation={
    code:this.specialisation.code,
    description:this.specialisation.description,
    departement:this.departementSelected,
    parcours: this.parcoursSelected
  }
  console.log("BONSOIR")
  console.log(tmp)
  if ((tmp.code==undefined)||(tmp.departement==undefined)) {
    
  } else {
    this.specialisationService.add(tmp).subscribe(res=>{
      this.router.navigate(['/specialisations']);
      },
      err=>{
      console.log(err);
    
      })
  }
  
	  }

	 updateDepartement(args){
  		this.departementSelected=args;
		}
	updateParcours(args){
		this.parcoursSelected=args;
	}
}
