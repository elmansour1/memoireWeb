import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { MemoireService } from '../../service';

@Component({
  selector: 'app-afficher-pdf',
  templateUrl: './afficher-pdf.component.html',
  styleUrls: ['./afficher-pdf.component.css']
})
export class AfficherPdfComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute, private service: MemoireService) { }
  pdfSrc:String;
  filename:String;
  ngOnInit() {
  	this.filename=this.route.snapshot.params["filename"];
  	console.log(this.filename);
  	//this.pdfSrc=this.service.downloadFile(this.filename);
    // this.router.navigate("");
  let url = "http://localhost:8080/api/memoire/downloadFile/"+this.filename;
    
    window.open(url,'_blank');
     this.router.navigateByUrl("/");

  	// console.log("");
  	// console.log(this.pdfSrc);

  }

}
