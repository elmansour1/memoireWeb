import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuteurService } from '../../service';
import { Auteur }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-auteur-update',
  templateUrl: './auteur-update.component.html',
  styleUrls: ['./auteur-update.component.css']
})
export class AuteurUpdateComponent implements OnInit {

	auteur: Auteur = new Auteur();
  public id:number;

  constructor(private router:Router,
    private route:ActivatedRoute, private auteurService: AuteurService) { }

  ngOnInit() {
  	this.auteur = new Auteur();
  	$('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '10%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        // complete: function () { 
        //   // $('.datepicker').datepicker();
        // },
        // onCloseEnd:function(){window.history.go(-1)}
          });
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    if (this.id!=null && this.id!=undefined) {
      $(".modal").modal('open');
      this.auteurService.get(this.id)
      .then(data => this.auteur = data);
    }else{
      this.router.navigate(['/auteurs']);
    }
    
  }

  closeAll(){
    $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .7, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '10%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    // complete:function(){ },
    // onCloseEnd:function(){window.history.go(-1)}
});
    $(".modal").modal('close');
    this.router.navigate(['auteurs']);
  }

  onSaveAuteur(){
  	console.log(this.auteur);
    if (confirm("Êtes vous sure de vouloir modifier cet élément ?")) {
    this.auteurService.update(this.auteur)
      .subscribe(
        data  => {
              this.router.navigate(['/auteurs']);
              
              alert("L'auteur a été bien modifier");
        },
        error => {
          alert("Erreur de connexion au serveur");
        }
      );
    }
  }

}
