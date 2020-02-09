import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RoleService } from '../../service';
import { Role }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.css']
})
export class RoleUpdateComponent implements OnInit {

  role: Role = new Role();
  public id:number;

  constructor(private router:Router,
    private route:ActivatedRoute, private roleService: RoleService) { }

  ngOnInit() {
  	this.role = new Role();
  	$('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '10%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        complete: function () { 
          // $('.datepicker').datepicker();
        },
        // onCloseEnd:function(){window.history.go(-1)}
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
    $(".modal").modal('close');
    this.router.navigate(['roles']);
  }

  onSaveRole(){
  	console.log(this.role);
    if (confirm("Êtes vous sure de vouloir modifier cet élément ?")) {
    this.roleService.update(this.role)
      .subscribe(
        data  => {
          $(".modal").modal('close');
              this.router.navigate(['/roles']);
        },
        error => {
          alert("Erreur de connexion au serveur");
        }
      );
    }
  }
}
