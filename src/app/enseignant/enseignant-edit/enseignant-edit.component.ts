import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { EnseignantService } from '../../service';
import { Enseignant }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-enseignant-edit',
  templateUrl: './enseignant-edit.component.html',
  styleUrls: ['./enseignant-edit.component.css']
})
export class EnseignantEditComponent implements OnInit {

	enseignant: Enseignant = new Enseignant();
	 public id:number;

  constructor(private router: Router, private enseignantService: EnseignantService, private route: ActivatedRoute) { }

  ngOnInit() {
  	 if (this.enseignant == undefined) {
      this.enseignant = new Enseignant();
    }
    $('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
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
      this.enseignantService.get(this.id)
      .then(data => this.enseignant = data);
    }else{
      this.router.navigate(['/enseignants']);
    }
  }

  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['/enseignants']);
  }

  public onEdit(){
    $(".modal").modal('close');
    this.router.navigate(['/enseignants/update/'+this.id]);
  }

  public onDeleteEnseignant(){
  	console.log(this.id);
    
    let res=confirm("Êtes-vous certain de vouloir supprimer cet élément?");
      if (res) {
        this.enseignantService.del(this.id)
          .subscribe(res=>{
            this.router.navigate(['/enseignants']);
        },
        err=>{
          console.log(err);
          
        })
      }
  }

}
