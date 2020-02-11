import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { User } from '../model';
import { AuteurService , AuthService} from '../service';

declare var $:any;


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  user: User = new User() ;

  constructor(private router: Router, private auteurService: AuteurService, private authService: AuthService) { }

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


   onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


  menu(){
    $(".modal").modal('close');
    this.router.navigateByUrl("/");
  }

}
