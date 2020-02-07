import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { ParcoursService } from '../../service';
import { Parcours }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-parcours-update',
  templateUrl: './parcours-update.component.html',
  styleUrls: ['./parcours-update.component.css']
})
export class ParcoursUpdateComponent implements OnInit {

	parcour: Parcours = new Parcours();
	public id:number;

  constructor(	private router:Router,
    			private route:ActivatedRoute, 
    			private parcoursService: ParcoursService) { }

  ngOnInit() {
  	this.parcour = new Parcours();
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
      this.parcoursService.get(this.id)
      .then(data => this.parcour = data);
    }else{
      this.router.navigate(['/parcours']);
    }
    
  }

  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['parcours']);
  }

  onSaveParcour(){
  	console.log(this.parcour);
    if (confirm("Êtes vous sure de vouloir modifier cet élément ?")) {
    this.parcoursService.update(this.parcour)
      .subscribe(
        data  => {
          $(".modal").modal('close');
              this.router.navigate(['/parcours']);
        },
        error => {
          alert("Erreur de connexion au serveur");
        }
      );
    }
  }

}
