import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { RoleService } from '../../service';
import { Role }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {

  role: Role = new Role();
	 public id:number;

  constructor(private router: Router, private roleService: RoleService, private route: ActivatedRoute) { }

  ngOnInit() {
  	 if (this.role == undefined) {
      this.role = new Role();
    }
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '10%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        complete: function () { },
        onCloseEnd:function (){
          //window.history.go(-1);
        }
    });
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    if (this.id!=null && this.id!=undefined) {
      $(".modal").modal('open');
      this.roleService.get(this.id)
      .then(data => this.role = data);
    }else{
      this.router.navigate(['/roles']);
    }
  }

  closeAll(){
    
    $(".modal").modal('close');
    this.router.navigate(['/roles']);
  }

  public onEdit(){
    $(".modal").modal('close');
    this.router.navigate(['/roles/update/'+this.id]);
  }

  public onDeleteRole(){
  	$(".modal").modal('close');
    this.router.navigate(['/roles']);
  }


}
