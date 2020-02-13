import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { User, Role } from '../../model';
import { UserService , RoleService} from '../../service';


declare var $: any;

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user : User = new User();
  roles: Array<Role>;
  roleSelected: Role[];
  public id:number;

  constructor(	 private router: Router, 
  				 private route: ActivatedRoute,
  	             private userService: UserService,
                 private roleService: RoleService
    ) { }

  ngOnInit() {
  // this.auteur = new Auteur();
  this.roleService.getAll()
      .then(data=> this.roles = data);
      console.log(this.roles);
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
	    this.router.navigate(['users']);
	  }

	 onSaveUser(){
	      console.log("BONJOUR");
	      console.log(this.user);
	   this.user={
		id: this.user.id,
	    username:this.user.username,
	    password:this.user.password,
	    roles:this.roleSelected
	  }
	  console.log("BONSOIR")
	  // console.log(tmp)
	    if (confirm("Êtes vous sure de vouloir modifier cet élément ?")) {
	  if ((this.user.username==undefined)||(this.user.roles==undefined)) {
	    
	  } else {
	    this.userService.update(this.user).subscribe(res=>{
	    	$(".modal").modal('close');
	      	this.router.navigate(['/users']);
	      },
        error => {
          alert("Erreur de connexion au serveur");
        });
	  }
    }  
	  
	  
	    }

updateRole(args){
      this.roleSelected=args;
    }

}
