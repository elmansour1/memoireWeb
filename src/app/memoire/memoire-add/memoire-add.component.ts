import { MemoireService, AuteurService, EnseignantService, SpecialisationService } from 'src/app/service';
import { HttpEventType , HttpResponse} from '@angular/common/http';
import { Enseignant, Auteur, Memoire, Specialisation } from 'src/app/model';
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
    auteursSelected=[];
    enseignantsSelected=[];
    encadreursSelected=[];
    examinateursSelected=[];
    encadreurs:Enseignant[];
    presidentJury;
    examinateurs:Enseignant[];
    specialisations:Specialisation[];
    specialisationSelected;
    inviter:String;


    constructor(private service: MemoireService,
                private router:Router, 
                private auteurService:AuteurService,
                private enseignantsService:EnseignantService,
                private specialisationService:SpecialisationService
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
     this.getSpecialisations();
      console.log(this.auteurs);
      
      
    }
  
closeAll() {
    this.router.navigateByUrl("/");
  }


    getEnseignants(){
      this.enseignantsService.getAll().then(data=>{
        this.enseignants=data;
        this.examinateurs=data;
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

    getSpecialisations(){
      this.specialisationService.getAll().then(data=>{
        this.specialisations=data;
        setTimeout(function(){
          $('select').formSelect();
        },0);
        
    });
  }
  
   
  
  updateAuteurs(args){
    this.auteursSelected.push(args);
    console.log(this.auteursSelected);
  }

  updateSpecialisation(spec){
    let tSp=$('#specialisation').formSelect('getSelectedValues');
      tSp.forEach(element => {
        let tm:any=this.specialisations.filter(a=>a.id==element)
        this.specialisationSelected=tm[0];
        console.log(this.specialisationSelected);
      });
    // console.log(spec);
    this.specialisationSelected=spec;
    console.log(this.specialisationSelected);
  }

  updateExaminateurs(ex){
    this.examinateursSelected.push(ex);
    console.log(this.examinateursSelected);
  }
  
  updatePrJ(prj){
    this.presidentJury=prj;
  }

  updateEncadreurs(enc){
    this.encadreursSelected.push(enc);
    console.log(this.encadreursSelected);
  }

  onSelectedFile(event) {
    this.selectedFiles=event.target.files;
  }


  
    onSaveMemoire(){
      
      let t=$('#auteurs').formSelect('getSelectedValues');
      let auteurs;
      //this.auteursSelected=[];
      t.forEach(element => {
        let tm:any=this.auteurs.filter(a=>a.id==element)
        this.auteursSelected.push(tm[0]);
      });

      console.log("SELECTREDVALUES PRJ");
      console.log($('#presidentJury').formSelect('getSelectedValues'))
      //let tPr=$('#presidentJury').formSelect('getSelectedValues');
      let prJ;
      let tmo;
      
        tmo=this.enseignants.filter(a=>a.id==this.presidentJury)
        prJ=tmo[0];
    
      console.log("TMLOOOOOOOOOOOO");
      console.log(tmo);
      
      //let tEn=$('#encadreurs').formSelect('getSelectedValues');
      let encadreurs;
      this.encadreursSelected.forEach(element => {
        let tm:any=this.enseignants.filter(a=>a.id==element)
        encadreurs=tm;
      });

      //let tEx=$('#examinateurs').formSelect('getSelectedValues');
      let examinateurs;
      this.examinateursSelected.forEach(element => {
        let tm:any=this.enseignants.filter(a=>a.id==element)
        examinateurs=tm;
      });

      //let tSp=$('#specialisation').formSelect('getSelectedValues');
      let specialisation;
        let tm:any=this.specialisations.filter(a=>a.id==this.specialisationSelected)
        specialisation=tm[0];
        console.log(this.specialisationSelected);

      console.log("AUTEURS SELECTED");
      
      console.log(this.auteursSelected);
      console.log("EXAMINATEURS SELECTED");
      
      console.log(this.examinateursSelected);
      console.log("ENCADREURS SELECTED");
      
      console.log(this.encadreursSelected);

      console.log("PRESIDENT JURY");
      
      console.log(this.presidentJury);

      console.log("SPECIALISATION SELECTED");
      
      console.log(this.specialisationSelected);

      console.log("DOCUMENT");
      console.log("CHEMIN");
      let chemin=$('#fileUpload').val();
      //let nom)chemin.slice('')
      
      console.log(chemin);
      
      console.log(this.document);
      this.document = this.selectedFiles.item(0);
      console.log("SELECTEDFILE NAME")
      console.log(this.selectedFiles.item(0).name);
      
      let nbInviter=0;

      let encad = [];
      encad.push(prJ);
      examinateurs.forEach(enc=>encad.push(enc));
      encadreurs.forEach(enc=>encad.push(enc));
      // encad.push(this.examinateursSelected);
      // encad.push(this.encadreursSelected);

      let tmp:Memoire={
         titre:this.memoire.titre,
         datePublication: new Date(),
         anneesSoutenance:  new Date(this.memoire.anneesSoutenance),
         motsCles:this.memoire.motsCles,
         resume:this.memoire.resume,
         abstrat: this.memoire.abstrat,
         document: this.selectedFiles.item(0).name,
         auteurs: this.auteursSelected,
        // inviter:this.memoire.inviter,
        encadreurs:encad,

         specialisation:specialisation,
         nbExaminateur:this.examinateursSelected.length,
         nbEncadreur:this.encadreursSelected.length,
         nbInviter: 0
      };

      console.log("-------------------------------------------")
      console.log(this.document);
      console.log("-------------------------------------------");
      console.log("TMPPPPPPPPPPPPPPPPP")
      console.log("-------------------------------------------");
      console.log(tmp)    
      console.log("-------------------------------------------");
      console.log(this.specialisationSelected);
      console.log("-------------------------------------------");


this.service.add(tmp).subscribe(res=>{
      console.log(res);
    }, err=> console.log(err)
    );
    this.service.uploadFile(this.document).subscribe(event=>{
      //alert("Le Memoire a été bien ajouter !")
        this.router.navigate(["/"]);
      },err=>{
      alert("Erreur connexion serveur!")

        console.log(err);
      }
    );
  
    // annuler(){
      
    }
  
  
  }