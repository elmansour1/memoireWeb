import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { AuteurService } from '../../service';
import { Auteur }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-auteur-edit',
  templateUrl: './auteur-edit.component.html',
  styleUrls: ['./auteur-edit.component.css']
})
export class AuteurEditComponent implements OnInit {

	auteur: Auteur = new Auteur();
	 public id:number;

  constructor(private router: Router, private auteurService: AuteurService, private route: ActivatedRoute) { }

  ngOnInit() {
  	 if (this.auteur == undefined) {
      this.auteur = new Auteur();
    }
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '10%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        complete: function () { }
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
    $(".modal").modal('close');
    this.router.navigate(['/auteurs']);
  }

  public onEdit(){
    $(".modal").modal('close');
    this.router.navigate(['/auteurs/update/'+this.id]);
  }

  public onDeleteAuteur(){
  	$(".modal").modal('close');
    this.router.navigate(['/auteurs']);
  }

}
