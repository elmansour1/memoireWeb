import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { User, Role } from '../../model';
import { UserService , RoleService} from '../../service';


declare var $: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

	user: User = new User();
  	public id:number;

  constructor(	private router: Router, 
  				private userService: UserService, 
  				private route: ActivatedRoute) { }

  ngOnInit() {
  	 if (this.user == undefined) {
      this.user = new User();
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
      this.userService.get(this.id)
      .then(data => this.user = data);
    }else{
      this.router.navigate(['/users']);
    }
  }

  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['/users']);
  }

  public onEdit(){
    $(".modal").modal('close');
    this.router.navigate(['/users/update/'+this.id]);
  }

  public onDeleteUser(){
  	console.log(this.id);
    
    let res=confirm("Êtes-vous certain de vouloir supprimer cet élément?");
      if (res) {
        this.userService.del(this.id)
          .subscribe(res=>{
            this.router.navigate(['/users']);
        },
        err=>{
          console.log(err);
          
        })
      }
  }


}
