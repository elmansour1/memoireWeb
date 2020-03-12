import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders , HttpRequest} from '@angular/common/http';
import { HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';


import { Memoire } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MemoireService {

  public url:string = "http://localhost:8080/api";


  constructor(private http:HttpClient) { }

  public getAll():Promise<Array<Memoire>>{
		return this.http.get(this.url+"/memoires")
		.toPromise()
    	.then((response) => {
          return response as Array<Memoire>;
      	});
	}

	public get(id):Promise<Memoire>{
		return this.http.get(this.url+"/memoires/"+id)
		.toPromise()
    	.then((response) => {
          return response as Memoire;
      	});	
	}

	public add(data){
		 let headers = new HttpHeaders()
		            .set("ContentType", "application/json");

		return this.http.post(this.url+"/memoires", data);
	}

	public update(data){
		let headers = new HttpHeaders()
		            .set("ContentType", "application/json");
		return this.http.put(this.url+"/memoires", data);
	}

	public del(id){
		return this.http.delete(this.url+"/memoires/"+id);
	}

	public uploadFile(file): Observable<HttpEvent<{}>>{
		let formdata: FormData = new FormData();
    		formdata.append('file', file);

    		const req = new HttpRequest('POST','http://localhost:8080/api/uploadFile/', formdata, {
		      reportProgress: true,
		      responseType: 'json'
		    });

    	return this.http.request(req);
	}

	public downloadFile(file){
		// let tmp=file.split(" ");
		// let t= "";
		// let i =0;
		// tmp.forEach(e=>{
		// 	if((i+1)>=tmp.length){
		// 		t=t+"%20"+e
		// 	}
		// 	i++;
		// })
		// console.log(t);
		// return this.http.get(this.url+"/memoire/downloadFile/"+t);
		let url = this.url+"/memoire/downloadFile/"+file;
    	window.open(url,'_blank');

	}

	

	// downloadFile(): Observable<any>{
	// 	return this.http.get('http://localhost:8080/api/memoire/downloadFile', {responseType: ResponseContentType.Blob});
 //  }
}
