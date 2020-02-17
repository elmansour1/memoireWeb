import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders , HttpRequest} from '@angular/common/http';
import {Http, ResponseContentType} from '@angular/http';
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
		const headers = new HttpHeaders()
		            .set("ContentType", "application/json");

		return this.http.post(this.url+"/memoires", data, headers);
	}

	public update(data){
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
		// let formdata: FormData = new FormData();
		// formdata.append('file',file);
		const headers = new HttpHeaders()
		            .set("ContentType", "application/json");
		return this.http.get(this.url +'/memoire/downloadFile/'+file,headers); 	
	}

	

	// downloadFile(): Observable<any>{
	// 	return this.http.get('http://localhost:8080/api/memoire/downloadFile', {responseType: ResponseContentType.Blob});
 //  }
}
