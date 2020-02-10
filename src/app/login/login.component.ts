import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';


import { AuthenticationService } from '../service';


declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public user: any;

  constructor(	private router: Router, 
  				private authenticationService: AuthenticationService) { }

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
        // onCloseEnd:function(){window.history.go(-1)}
    });
    $(".modal").modal('open');
  }

   closeAll(){
    $(".modal").modal('close');
    this.router.navigateByUrl("/");
  }

  onLogin(user){
  	console.log("cool");
  	console.log(user);
  	this.authenticationService.login(user.username,user.password);
    if(this.authenticationService.isAuthenticated){
      console.log("Utilisateur connecter");
      this.router.navigateByUrl('');
  }

}
}
