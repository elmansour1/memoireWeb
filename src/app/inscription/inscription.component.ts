import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { Auteur } from '../model';
import { AuteurService } from '../service';

declare var $:any;


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  auteur: Auteur = new Auteur() ;

  constructor(private router: Router, private auteurService: AuteurService) { }

  ngOnInit() {
  // this.auteur = new Auteur();
  $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '10%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        complete:function(){ },
        // onCloseEnd:function(){window.history.go(-1)}
    });
    $(".modal").modal('open');
  }

  // close() {
  //   this.router.navigateByUrl("/auteurs");
  // }

  closeAll(){
    $(".modal").modal('close');
    this.router.navigateByUrl("/");
  }

  onSaveAuteur(){
  console.log(this.auteur);
  this.auteurService.add(this.auteur)
  .subscribe(res=>{
  	alert("Inscription effectuer avec succes !");
  this.router.navigateByUrl("/");
  }, err =>{
  console.log(err);
  alert("Connexion au serveur Echoué");
  });
  }

}
