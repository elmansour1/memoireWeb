import { Component, OnInit } from '@angular/core';
import { Router  }  from '@angular/router';
import { Departement }  from '../../model';
import { DepartementService } from '../../service';

declare var $: any;

@Component({
  selector: 'app-departement-add',
  templateUrl: './departement-add.component.html',
  styleUrls: ['./departement-add.component.css']
})
export class DepartementAddComponent implements OnInit {

	departement: Departement = new Departement();
  form: any = {};
  constructor(private router:Router, private departementService: DepartementService) { }

  ngOnInit() {
  	// this.departement = new departement();
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
    this.router.navigate(['departements']);
  }

  onSubmit(){
  	console.log(this.form);
  	this.departementService.add(this.form)
  		.subscribe(res=>{
        alert("Le departement a été bien ajouter !");
  			this.router.navigateByUrl("/departements");
  		},err=>{
        alert(" Erreur connexion au serveur ");
  			console.log(err);
  		});
  }

}
