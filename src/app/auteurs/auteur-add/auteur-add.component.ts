import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { Auteur } from '../../model';
import { AuteurService } from '../../service';


declare var $: any;

@Component({
  selector: 'app-auteur-add',
  templateUrl: './auteur-add.component.html',
  styleUrls: ['./auteur-add.component.css']
})
export class AuteurAddComponent implements OnInit {
form: any = {};
public message:string;
public flagMessage:boolean = false;
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

  close() {
    this.router.navigateByUrl("/auteurs");
  }

  closeAll(){
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .7, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '10%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      complete:function(){ },
     // onCloseEnd:function(){window.history.go()}
  });
    $(".modal").modal('close');
    this.router.navigateByUrl("auteurs");
  }

  onSubmit(){
    console.log(this.form);
    // if (this.verifier()){
    this.auteurService.add(this.form)
        .subscribe(
          res=>{
              alert("L'Auteur a été bien ajouter !");
                  $(".modal").modal('close');
                  this.router.navigateByUrl("/auteurs");
        }, err =>{
          alert("Erreur de connexion au serveur");
          console.log(err);
        });
      // }
  }

}
