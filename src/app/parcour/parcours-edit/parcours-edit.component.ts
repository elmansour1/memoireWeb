import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { ParcoursService } from '../../service';
import { Parcours }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-parcours-edit',
  templateUrl: './parcours-edit.component.html',
  styleUrls: ['./parcours-edit.component.css']
})
export class ParcoursEditComponent implements OnInit {

	parcour: Parcours = new Parcours();
  	public id:number;

  constructor(private router: Router, private parcoursService: ParcoursService, private route: ActivatedRoute) { }

  ngOnInit() {
  	 if (this.parcour == undefined) {
      this.parcour = new Parcours();
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
      this.parcoursService.get(this.id)
      .then(data => this.parcour = data);
    }else{
      this.router.navigate(['/parcours']);
    }
  }

  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['/parcours']);
  }

  public onEdit(){
    $(".modal").modal('close');
    this.router.navigate(['/parcours/update/'+this.id]);
  }

  public onDeleteParcour(){
  	console.log(this.id);
    
    let res=confirm("Êtes-vous certain de vouloir supprimer cet élément?");
      if (res) {
        this.parcoursService.del(this.id)
          .subscribe(res=>{
            this.router.navigate(['/parcours']);
        },
        err=>{
          console.log(err);
          
        })
      }
  }

}
