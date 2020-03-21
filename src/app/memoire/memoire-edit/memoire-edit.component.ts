import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { MemoireService, AuteurService } from '../../service';
import { Memoire, Auteur }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-memoire-edit',
  templateUrl: './memoire-edit.component.html',
  styleUrls: ['./memoire-edit.component.css']
})
export class MemoireEditComponent implements OnInit {

	memoire: Memoire = new Memoire();
	public id:number;
  constructor(private router: Router, private memoireService: MemoireService, private route: ActivatedRoute) { }

    ngOnInit() {
  	 if (this.memoire == undefined) {
      this.memoire = new Memoire();
    }

    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '10%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        // complete: function () { },
        // onCloseEnd:function (){
        //   window.history.go(-2);
        // }
    });
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    if (this.id!=null && this.id!=undefined) {
      $(".modal").modal('open');
      this.memoireService.get(this.id)
      .then(data => this.memoire = data);
      // console.log(this.memoire.auteurs);
    }else{
      this.router.navigate(['/']);
    }


  }

  closeAll(){
    
    $(".modal").modal('close');
    this.router.navigate(['']);
  }

  public onEdit(){
    // $(".modal").modal('close');
    this.router.navigate(['/update/'+this.id]);
  }

  public onDeleteMemoire(){
    console.log(this.id);
  	
    let res=confirm("Êtes-vous certain de vouloir supprimer cet élément?");
  if (res) {
    this.memoireService.del(this.id)
      .subscribe(res=>{
        this.router.navigate(['']);
    },
    err=>{
      console.log(err);
      
    })
  }
  }

}

