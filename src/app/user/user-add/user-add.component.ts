import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { User, Role } from '../../model';
import { UserService , RoleService} from '../../service';


declare var $: any;

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

	user : User = new User();
  roles: Array<Role>;
  roleSelected: Role;
  public id:number;

  constructor(	 private router: Router, 
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
    $(".modal").modal('open');
  }

  close() {
    this.router.navigateByUrl("/users");
  }

  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['users']);
  }

  onSaveUser(){
      console.log("BONJOUR");
      console.log(this.user);
   let tmp:User={
    login:this.user.login,
    password:this.user.password,
    role:this.roleSelected
  }
  console.log("BONSOIR")
  console.log(tmp)
    this.userService.add(tmp).subscribe(res=>{
      this.router.navigate(['/users']);
      },
      err=>{
      console.log(err);
    
      });
  
  
    }

   updateRole(args){
      this.roleSelected=args;
    }
}
