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
  autocompletion:String;
  liste:Auteur[];
  chaine: any;
  otherTab:Auteur[];
  constructor(private auteurService: AuteurService, private router: Router, private http: HttpClient) { }

  

  ngOnInit() {
  	this.auteurService.getAllByObservable()
      .subscribe(data=> {
        this.auteurs = data;
        this.liste=data;
        this.otherTab=data;
        let t = this.filtrer(this.auteurs,"matricule","14");
        console.log("JE SUIS L'AUTOCOMPLETION T:");
        console.log(t);
  });
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

   filtrer(tableau:any[],cles:String, chaine:String):any{
    setTimeout(()=>{
      console.log("OK");
    },200);
    let dumpTableau;
    if(tableau==undefined){
      dumpTableau=this.liste
    }else{
      dumpTableau=tableau;  
    }
    console.log("TABLEAU");
    console.log(tableau);
    
    let tmp=[];
    let i = 0;
    
    let t =dumpTableau.filter(
          objet=>objet[cles.toString()].toLowerCase().indexOf(chaine.toLocaleLowerCase())!==-1
          );
      dumpTableau=t;
      tmp.push(dumpTableau);
      this.otherTab=tmp;
      console.log("**********");
      console.log(typeof(cles));
      console.log("***********");
      console.log(chaine);
      console.log("***********");
      return tmp;
    //n=>n.nom.toLowerCase().indexOf(requete.toLowerCase())!==-1
  }

}
