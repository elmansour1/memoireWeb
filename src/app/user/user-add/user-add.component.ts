import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { User, Role } from '../../model';
import { UserService , RoleService, AuthService} from '../../service';


declare var $: any;

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  form: any={};
	user : User = new User();
  roles: Array<Role>;
  roleName: Role = new Role();
  roleSelected: Role[]=[];
  public id:number;
  selected: Role[]=[];

  constructor(	 private router: Router, 
  	             private userService: UserService,
                 private roleService: RoleService,
                 private authService: AuthService
    ) { }

  ngOnInit() {
  // this.auteur = new Auteur();

  // this.roleService.getAll()
  //     .then(data=> this.roles = data);
  //     console.log(this.roles);
     this.roleService.getAll().then(data => {
            this.roles = data;
            setTimeout(function () {
                $('select').formSelect();
            }, 200);
        });
  $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '10%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        // complete:function(){ },
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

  onSubmit(){
      console.log("BONJOUR");
      console.log(this.form);
      
   let tmp:User={
    username:this.form.username,
    email:this.form.email,
    password:this.form.password,
    roles:[]
  };
  this.roleSelected=[];
      let t:any=$('select').formSelect('getSelectedValues');
      t.forEach(element=>{
        let tm=this.roles.filter(r=>r.id==element);
        // this.roleSelected.push(tm);
        tmp.roles.push(tm[0]);
      });
    
      console.log("ROLES SELECTED");
      console.log(this.roleSelected);
      console.log("BONSOIR")
      console.log(tmp)
    
    this.authService.register(tmp).subscribe(res=>{
      this.router.navigate(['/users']);
      },
      err=>{
      console.log(err);
    
      });
  
  
    }

   updateRole(args: Role){
      this.roleSelected.push(args);
    }
}
