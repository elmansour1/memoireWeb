import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { Role } from '../../model';
import { RoleService } from '../../service';


declare var $: any;

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent implements OnInit {

  	role : Role = new Role();

  constructor(	private router: Router, 
  	private roleService: RoleService) { }

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
        onCloseEnd:function(){
          close()}
    });
    $(".modal").modal('open');
  }

  close() {
    this.router.navigateByUrl("/roles");
  }

  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['roles']);
  }

  onSaveRole(){
  	console.log(this.role);
	  	this.roleService.add(this.role)
	  		.subscribe(res=>{
	  			this.router.navigateByUrl("/roles");
	  		},err=>{
	  			console.log(err);
	  		});
  }

}
