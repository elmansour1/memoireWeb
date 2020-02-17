import { MemoireService, AuteurService, EnseignantService } from 'src/app/service';
import { HttpEventType , HttpResponse} from '@angular/common/http';
import { Enseignant, Auteur, Memoire } from 'src/app/model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

declare var $:any;

@Component({
    selector: 'app-memoire-add',
    templateUrl: './memoire-add.component.html',
    styleUrls: ['./memoire-add.component.css']
  })
  export class MemoireAddComponent implements OnInit {
    selectedFiles = null;
     progress: number;
    currentFileUpload: any;
    private currentTime: number;
    memoire=new Memoire();
    document:File;
    enseignants:Enseignant[];
    auteurs:Auteur[];
  auteursSelected: Auteur[]=[];
  enseignantsSelected: Enseignant[]=[];

    constructor(private service: MemoireService,
                private router:Router, 
                private auteurService:AuteurService,
                private enseignantsService:EnseignantService
                ) {
                 }
    
    ngAfterViewInit(){
        
    }
    

   async  ngOnInit() {
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .7, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '10%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      complete: function () { }
  });
  
  $(".modal").modal('open');
 
     // await this.getAuteurs();
    
    this.getAuteurs();
     this.getEnseignants();
      console.log(this.auteurs);
      
      
    }
  
closeAll() {
    this.router.navigateByUrl("/");
  }


    getEnseignants(){
      this.enseignantsService.getAll().then(data=>{
        this.enseignants=data;
        setTimeout(function(){
          $('select').formSelect();
        },0);
      });
      
    }
  
   async  getAuteurs(){
      await this.auteurService.getAll().then(data=>{
        this.auteurs=data;
        setTimeout(function(){
          $('select').formSelect();
        },0);
        
      })
    }
  
   
  
    updateAuteurs(args){

    }
  
  onSelectedFile(event) {
    this.selectedFiles=event.target.files;
  }
  
    onSaveMemoire(){
      
      let t=$('select').formSelect('getSelectedValues');
      t.forEach(element => {
        let tm:any=this.auteurs.filter(a=>a.id==element)
        this.auteursSelected.push(tm[0]);
      });
      let tEn=$('select').formSelect('getSelectedValues');
      t.forEach(element => {
        let tm:any=this.enseignants.filter(a=>a.id==element)
        this.enseignantsSelected.push(tm[0]);
      });
      console.log("AUTEURS SELECTED");
      
      console.log(this.auteursSelected);
      console.log("DOCUMENT");
      console.log("CHEMIN");
      let chemin=$('#fileUpload').val();
      //let nom)chemin.slice('')
      
      console.log(chemin);
      
      console.log(this.document);
      this.document = this.selectedFiles.item(0);
      console.log(this.selectedFiles.item(0).name);
      
      let tmp={
         titre:this.memoire.titre,
         datePublication: new Date(),
         anneesSoutenance:  new Date(this.memoire.anneesSoutenance),
         motsCles:this.memoire.motsCles,
         resume:this.memoire.resume,
         abstrat: this.memoire.abstrat,
         document: this.selectedFiles.item(0).name,
         encadreurs: this.enseignantsSelected,
         auteurs: this.auteursSelected
      }

      // let fd = new FormData();
      // fd.append(titre,this.memoire.titre);
      // fd.append(datePublication, new Date());
      // fd.append(anneesSoutenance,new Date(this.memoire.anneesSoutenance));
      // fd.append(motsCles,this.memoire.motsCles);
      // fd.append(resume,this.memoire.resume);
      // fd.append(abstrat,this.memoire.abstrat);
      // fd.append(document,this.selectedFiles.name);
      // fd.append(encadreurs,this.enseignantsSelected);
      // fd.append(auteurs,this.auteurs);


      console.log("-------------------------------------------")
      console.log(this.document)
      console.log("-------------------------------------------")
    this.service.add(tmp).subscribe(res=>{
      console.log(res);
    }, err=> console.log(err)
    );
    this.service.uploadFile(this.document).subscribe(event=>{
        this.router.navigate(["/"]);
      },err=>
        console.log(err)
      );
    }
  
    annuler(){
      
    }
  
  
  }