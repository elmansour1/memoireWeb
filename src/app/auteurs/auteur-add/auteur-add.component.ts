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
                  $(".modal").modal('close');
                  this.router.navigateByUrl("/auteurs");
        }, err =>{
          console.log(err);
        });
      // }
  }

  // private verifier(){
  //   let flag = true;
  //   if (this.auteur.matricule == "" || this.auteur.matricule == null) {
  //     this.message = "Les champs suivants sont incorrects : matricule";
  //     flag = false;
  //   }

  //   if (this.auteur.nom == "" || this.auteur.nom == null) {
  //     this.message = (flag)? "Les champs suivants sont incorrects : Nom-Prenom" : this.message + ", Nom-Prenom";
  //     flag = true
  //   }

  //   if (this.auteur.email == "" || this.auteur.email == null) {
  //     this.message = (flag)? "Les champs suivants sont incorrects : Email" : this.message + ", Email";
  //     flag = true
  //   }

  //   if (this.auteur.telephone == "" || this.auteur.telephone == null) {
  //     this.message = (flag)? "Les champs suivants sont incorrects : téléphone" : this.message + ", téléphone";
  //     flag = true
  //   }

  //   if (this.auteur.motDePasse == "" || this.auteur.motDePasse == null) {
  //     this.message = (flag)? "Les champs suivants sont incorrects : mot de passe" : this.message + ", mot de passe";
  //     flag = true;
  //   }

  //   console.log(this.flagMessage);
  //   this.flagMessage = !flag;
  //   console.log(this.flagMessage);
  //   console.log(flag);
  //   return flag;
  // }

}
