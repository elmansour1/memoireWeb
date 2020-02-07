import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MemoireService } from '../../service';
import { Memoire }  from '../../model';

declare var $:any;

@Component({
  selector: 'app-memoire-list',
  templateUrl: './memoire-list.component.html',
  styleUrls: ['./memoire-list.component.css']
})
export class MemoireListComponent implements OnInit {

  memoires: Array<Memoire>;

  constructor(private router: Router, private memoireService: MemoireService) { }

  ngOnInit() {
  	this.memoireService.getAll()
  		.then(data=> this.memoires = data);
  }

  public details(id){
    this.router.navigate(['/memoires/edit/'+id]);
  }

}
