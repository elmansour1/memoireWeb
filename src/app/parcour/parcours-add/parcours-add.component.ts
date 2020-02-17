import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ParcoursService } from '../../service';
import { Parcours }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-parcours-add',
  templateUrl: './parcours-add.component.html',
  styleUrls: ['./parcours-add.component.css']
})
export class ParcoursAddComponent implements OnInit {
	form: any = {};
	parcour: Parcours = new Parcours();

  	constructor(private router: Router, private parcoursService: ParcoursService) { }

  	ngOnInit() {
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
    	this.router.navigate(['parcours']);
  	}

	onSubmit(){
	  	console.log(this.form);
	  	this.parcoursService.add(this.form)
	  		.subscribe(res=>{
	  			alert("Le Parcours a été bien ajouter !");
	  			this.router.navigateByUrl("/parcours");
	  		},err=>{
	  			alert("Erreur connexion au serveur");
	  			console.log(err);
	  		});
	  }

}
