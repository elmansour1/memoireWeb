import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';

import { SpecialisationService , DepartementService, ParcoursService } from '../../service';
import { Specialisation, Departement, Parcours }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-specialisation-update',
  templateUrl: './specialisation-update.component.html',
  styleUrls: ['./specialisation-update.component.css']
})
export class SpecialisationUpdateComponent implements OnInit {

  specialisation: Specialisation = new Specialisation();
  departements: Array<Departement>;
  parcours: Array<Parcours>;
  public id: number;

  optionForm= new FormGroup({
    code:new FormControl(),
    description:new FormControl()
  });

  departementSelected: Departement;
  parcoursSelected: Parcours;


  constructor(	private router: Router, 
  				private route: ActivatedRoute,
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
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    if (this.id!=null && this.id!=undefined) {
      $(".modal").modal('open');
      this.specialisationService.get(this.id)
      .then(data => this.specialisation = data);
    }else{
      this.router.navigate(['/specialisations']);
    }
  }


  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['specialisations']);
  }

  onSaveSpecialisation(){
  		console.log("BONJOUR");
	  	console.log(this.specialisation);
	
	this.specialisation={
		id: this.specialisation.id,
    	code:this.specialisation.code,
    	description:this.specialisation.description,
    	departement:this.departementSelected,
    	parcours: this.parcoursSelected
  	}

  console.log("BONSOIR")
  // console.log(tmp)
if (confirm("Êtes vous sure de vouloir modifier cet élément ?")) {
	  if ((this.specialisation.code==undefined)||(this.specialisation.departement==undefined)) {
	    
	  } else {
	    this.specialisationService.update(this.specialisation).subscribe(res=>{
	    	$(".modal").modal('close');
	      	this.router.navigate(['/specialisations']);
	      },
        error => {
          alert("Erreur de connexion au serveur");
        });
	  }
    }  
}


	updateDepartement(args){
  		this.departementSelected=args;
		}
	updateParcours(args){
		this.parcoursSelected=args;
	}

}
