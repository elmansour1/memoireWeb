import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuteurService } from '../../service';
import { Auteur }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-auteur-list',
  templateUrl: './auteur-list.component.html',
  styleUrls: ['./auteur-list.component.css']
})
export class AuteurListComponent implements OnInit {

  public url:string = "http://localhost:8080/api";
	auteurs: Array<Auteur>;

  constructor(private auteurService: AuteurService, private router: Router, private http: HttpClient) { }

  public chaine: any;

  ngOnInit() {
  	this.auteurService.getAll()
  		.then(data=> this.auteurs = data);
  }

  public details(id){
    this.router.navigate(['/auteurs/edit/'+id]);
  }
  
  onSearch(motCle){
    // console.log(motCle);
       this.auteurService.chercher(motCle.mot)
       .subscribe(data =>{
         console.log(data);
         this.chaine=data;
     })
      
 }

}
