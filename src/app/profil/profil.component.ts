import { Component, OnInit } from '@angular/core';


import { AuthenticationService , AuthService, TokenStorageService} from '../service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  currentUser: any;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.currentUser = this.tokenStorageService.getUser();
  }

   logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
