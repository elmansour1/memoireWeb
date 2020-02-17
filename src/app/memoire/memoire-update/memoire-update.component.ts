import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { MemoireService, AuteurService , EnseignantService} from '../../service';
import { Memoire ,Auteur, Enseignant}  from '../../model';

declare var $:any;

@Component({
  selector: 'app-memoire-update',
  templateUrl: './memoire-update.component.html',
  styleUrls: ['./memoire-update.component.css']
})
export class MemoireUpdateComponent implements OnInit {

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
	id: number;
  constructor(private router: Router, 
  				private memoireService: MemoireService, 
  				private route: ActivatedRoute,
  				private auteurService:AuteurService,
                private enseignantsService:EnseignantService) { }

  ngOnInit() {
  	this.memoire = new Memoire();
  	$('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '10%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        // complete: function () { 
        //   // $('.datepicker').datepicker();
        // },
        // onCloseEnd:function(){window.history.go(-1)}
          });
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    if (this.id!=null && this.id!=undefined) {
      $(".modal").modal('open');
      this.memoireService.get(this.id)
      .then(data => this.memoire = data);
    }else{
      this.router.navigate(['/']);
    }


    this.getAuteurs();
     this.getEnseignants();
      console.log(this.auteurs);
    
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
  

  closeAll(){
    
    $(".modal").modal('close');
    this.router.navigate(['/']);
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
      // console.log("AUTEURS SELECTED");
      
      // console.log(this.auteursSelected);
      // console.log("DOCUMENT");
      // console.log("CHEMIN");
      // let chemin=$('#fileUpload').val();
      // //let nom)chemin.slice('')
      
      // console.log(chemin);
      
      // console.log(this.document);
      // this.document = this.selectedFiles.item(0);
      // console.log(this.selectedFiles.item(0).name);
      
      this.memoire={
      	id: this.memoire.id,
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
    this.memoireService.update(this.memoire).subscribe(res=>{
      console.log(res);
    }, err=> console.log(err)
    );
    this.memoireService.uploadFile(this.document).subscribe(event=>{
        this.router.navigate(["/"]);
      },err=>
        console.log(err)
      );
    }
  

}
