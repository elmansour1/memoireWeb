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
  constructor(private auteurService: AuteurService, private router: Router, private http: HttpClient) { }

  public chaine: any;

  ngOnInit() {
  	this.auteurService.getAllByObservable()
      .subscribe(data=> {
        this.auteurs = data;
        let t = this.filtrer(this.auteurs,["matricule","nom"],["504","mo"]);
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

   filtrer(tableau:any[],cles:String[], chaine:String[]):any{
    console.log("TABLEAU");
    console.log(tableau);
    setTimeout(()=>{

    },10);
    let tmp=[];
    let i = 0;
    let dumpTableau=tableau;
    cles.forEach(element=>{
      let t =dumpTableau.filter(
          objet=>objet[element.toString()].toLowerCase().indexOf(chaine[i].toLocaleLowerCase())!==-1
          );
      dumpTableau=t;
      console.log(i);
      i++;
      
      });
      tmp.push(dumpTableau);
      return tmp;
    //n=>n.nom.toLowerCase().indexOf(requete.toLowerCase())!==-1
  }

}
