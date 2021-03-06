import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { EnseignantService } from '../../service';
import { Enseignant }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-enseignant-add',
  templateUrl: './enseignant-add.component.html',
  styleUrls: ['./enseignant-add.component.css']
})
export class EnseignantAddComponent implements OnInit {
  form: any = {};
	enseignant: Enseignant = new Enseignant();

  constructor(private router: Router, private enseignantService: EnseignantService) { }

  ngOnInit() {
  	// this.auteur = new Auteur();
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
    this.router.navigate(['enseignants']);
  }

  onSubmit(){
  	console.log(this.form);
  	this.enseignantService.add(this.form)
  		.subscribe(res=>{
        alert("L'encadreur a été bien ajouter !");
  			this.router.navigateByUrl("/enseignants");
  		},err=>{
        alert("Erreur de connexion au serveur");
  			console.log(err);
  		});
  }
}
