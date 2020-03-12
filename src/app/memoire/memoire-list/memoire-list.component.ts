import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemoireService , TokenStorageService} from '../../service';
import { Memoire }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-memoire-list',
  templateUrl: './memoire-list.component.html',
  styleUrls: ['./memoire-list.component.css']
})
export class MemoireListComponent implements OnInit {

  nom=[];
  fileSimple;
  fileSwap;
  idMemoire;
  selectedFiles=null;
private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showVisitorBoard= false;
  username: string;
  currentUser: any;
  memoires: Array<Memoire>;
  public memoiresByTwo=[];
  taille:number;
  index=0;

  constructor(private router: Router, 
              private memoireService: MemoireService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  	this.memoireService.getAll()
  		.then(data=> {
        this.memoires = data;
        
        this.taille=Math.trunc(data.length/2);
        if((data.length%2)!=0) ++this.taille;
        console.log(this.taille);
        this.memoiresByTwo=new Array(this.taille);
      });

      this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.showVisitorBoard = this.roles.includes('ROLE_VISITOR');

      this.username = user.username;
    }

    this.currentUser = this.tokenStorageService.getUser();
  }

  public details(id){
    this.router.navigate(['/edit/'+id]);
  }

  afficher(filename){
    let nom;
    nom=filename.split("/")[2];
    this.router.navigate(['/afficher/'+nom]);
  }


  downloadOrLogIn(file){
    if(this.isLoggedIn){
      this.afficher(file);
    }else{
      this.router.navigate(['/login']);
    }
  }

public getPDF(id){
//       console.log(id);
//       let nom=[];
//       nom  = id.document;
//       let file = nom.split("/");
//       let t = file[2];
//       console.log(t);
//       this.memoireService.downloadFile(this.fileSwap)
//       .subscribe(
//         data => {

//           console.log("Binjour")
//           console.log(data);
// // if you want to open PDF in new tab
//           // window.open(fileURL); 
//           // var a         = document.createElement('a');
//           // a.href        = fileURL; 
//           // a.target      = '_blank';
//           // a.download    = 'bill.pdf';
//           // document.body.appendChild(a);
//           // a.click();
//         },      

//         (error) => {
//           console.log('getPDF error: ',error);
//         }
//       );
    }

    // public splitter(vare): String{
    //   //   this.nom = vare.document;
    //   // this.fileSimple = this.nom.split("/");
    //   // this.fileSwap = this.fileSimple[2];
    //   // return this.fileSwap;
    // }

    getTwoMemoires(i){
      let tmp = this.index;
      this.index=this.index+2;
      console.log("XXXXXXXXXXXXXXXXXXXXXX")
      console.log(i)
      if(i==0) return this.memoires.slice(i,i+2);
      return this.memoires.slice(i+1,i+3);      

    }


}
