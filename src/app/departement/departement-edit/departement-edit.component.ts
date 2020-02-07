import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { DepartementService } from '../../service';
import { Departement }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-departement-edit',
  templateUrl: './departement-edit.component.html',
  styleUrls: ['./departement-edit.component.css']
})
export class DepartementEditComponent implements OnInit {

  constructor(private router: Router, private departementService: DepartementService, private route: ActivatedRoute) { }

  public id:number;
  departement: Departement = new Departement();
  
  ngOnInit() {
  	 if (this.departement == undefined) {
      this.departement = new Departement();
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
      this.departementService.get(this.id)
      .then(data => this.departement = data);
    }else{
      this.router.navigate(['/departements']);
    }
  }

  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['/departements']);
  }

  public onEdit(){
    $(".modal").modal('close');
    this.router.navigate(['/departements/update/'+this.id]);
  }

  public onDeleteDepartement(){
  	$(".modal").modal('close');
    this.router.navigate(['/departements']);
  }

}
