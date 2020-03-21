import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { SpecialisationService } from '../../service';
import { Specialisation }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-specialisation-edit',
  templateUrl: './specialisation-edit.component.html',
  styleUrls: ['./specialisation-edit.component.css']
})
export class SpecialisationEditComponent implements OnInit {

	specialisation: Specialisation = new Specialisation();
   	public id:number;

  constructor(private router: Router, private specialisationService: SpecialisationService, private route: ActivatedRoute) { }

  ngOnInit() {
  	 if (this.specialisation == undefined) {
      this.specialisation = new Specialisation();
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
      this.specialisationService.get(this.id)
      .then(data => this.specialisation = data);
    }else{
      this.router.navigate(['/specialisations']);
    }
  }

  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['/specialisations']);
  }

  public onEdit(){
    $(".modal").modal('close');
    this.router.navigate(['/specialisations/update/'+this.id]);
  }

  public onDeleteSpecialisation(){
  	console.log(this.id);
    
    let res=confirm("Êtes-vous certain de vouloir supprimer cet élément?");
      if (res) {
        this.specialisationService.del(this.id)
          .subscribe(res=>{
            this.router.navigate(['/specialisations']);
        },
        err=>{
          console.log(err);
          
        })
      }
  }

}
