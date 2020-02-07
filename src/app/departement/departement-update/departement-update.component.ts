import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DepartementService } from '../../service';
import { Departement }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-departement-update',
  templateUrl: './departement-update.component.html',
  styleUrls: ['./departement-update.component.css']
})
export class DepartementUpdateComponent implements OnInit {

	departement: Departement = new Departement();
	public id:number;
  constructor(private router:Router,
    		  private route:ActivatedRoute, 
    		  private departementService: DepartementService) { }

  ngOnInit() {
  	this.departement = new Departement();
  	$('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '10%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        complete: function () { 
          // $('.datepicker').datepicker();
        }
    });
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    if (this.id!=null && this.id!=undefined) {
      $(".modal").modal('open');
      this.departementService.get(this.id)
      .then(data => this.departement = data);
    }else{
      this.router.navigate(['/departements']);
    }
    
  }

  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['departements']);
  }

  onSaveDepartement(){
  	console.log(this.departement);
    if (confirm("Êtes vous sure de vouloir modifier cet élément ?")) {
    this.departementService.update(this.departement)
      .subscribe(
        data  => {
          $(".modal").modal('close');
              this.router.navigate(['/departements']);
        },
        error => {
          alert("Erreur de connexion au serveur");
        }
      );
    }
  }

}
