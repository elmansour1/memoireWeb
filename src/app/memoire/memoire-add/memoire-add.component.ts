import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { MemoireService } from '../../service';
import { Memoire }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-memoire-add',
  templateUrl: './memoire-add.component.html',
  styleUrls: ['./memoire-add.component.css']
})
export class MemoireAddComponent implements OnInit {

  memoire: Memoire = new Memoire();

  constructor(private router: Router, private memoireService: MemoireService) { }

  ngOnInit() {
  	// this.auteur = new Auteur();
  	$(document).ready(function(){
    $('select').formSelect();
  });
  	$('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .7, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '10%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        complete: function () { }
    });
    $(".modal").modal('open');
  }


  closeAll(){
    $(".modal").modal('close');
    this.router.navigate(['/']);
  }

}
