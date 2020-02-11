import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';


import { AuthService, TokenStorageService} from '../service';


declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form: any = {};
	isLoggedIn = false;
	isLoginFailed = false;
	errorMessage = '';
	roles: string[] = [];
	currentUser: any;

	public user: any;

  constructor(	private router: Router, 
  				// private authenticationService: AuthenticationService,
  				private authService: AuthService,
  				private tokenStorageService: TokenStorageService) { }

  ngOnInit() {

		  	if (this.tokenStorageService.getToken()) {
		      this.isLoggedIn = true;
		      this.roles = this.tokenStorageService.getUser().roles;
		    }

		    this.currentUser = this.tokenStorageService.getUser();
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

 menu(){
    $(".modal").modal('close');
    this.router.navigateByUrl("/");
  }

onSubmit() {
	    this.authService.login(this.form).subscribe(
	      data => {
	        this.tokenStorageService.saveToken(data.accessToken);
	        this.tokenStorageService.saveUser(data);

	        this.isLoginFailed = false;
	        this.isLoggedIn = true;
	        this.roles = this.tokenStorageService.getUser().roles;
	        window.location.reload();
	        // this.router.navigateByUrl('');
	      },
	      err => {
	        this.errorMessage = err.error.message;
	        this.isLoginFailed = true;
	      }
	    );
  }

  reloadPage() {
  		 window.location.reload();
  	}
}
