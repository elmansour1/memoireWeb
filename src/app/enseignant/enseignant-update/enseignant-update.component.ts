import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { EnseignantService } from '../../service';
import { Enseignant }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-enseignant-update',
  templateUrl: './enseignant-update.component.html',
  styleUrls: ['./enseignant-update.component.css']
})
export class EnseignantUpdateComponent implements OnInit {

  
	enseignant: Enseignant = new Enseignant();
  public id:number;

  constructor(private router:Router,
    private route:ActivatedRoute, private enseignantService: EnseignantService) { }

  ngOnInit() {
  	this.enseignant = new Enseignant();
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
      this.enseignantService.get(this.id)
      .then(data => this.enseignant = data);
    }else{
      this.router.navigate(['/enseignants']);
    }
    
  }

  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['enseignants']);
  }

  onSaveEnseignant(){
  	console.log(this.enseignant);
    if (confirm("Êtes vous sure de vouloir modifier cet élément ?")) {
    this.enseignantService.update(this.enseignant)
      .subscribe(
        data  => {
          $(".modal").modal('close');
          alert("L'Encadreur a été bien modifier !")
              this.router.navigate(['/enseignants']);
        },
        error => {
          alert("Erreur de connexion au serveur");
        }
      );
    }
  }
}
