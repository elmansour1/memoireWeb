import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Parcours } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {

  public url:string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  public getAll():Promise<Array<Parcours>>{
		return this.http.get(this.url+"/parcours")
		.toPromise()
    	.then((response) => {
          return response as Array<Parcours>;
      	});
	}

	public get(id):Promise<Parcours>{
		return this.http.get(this.url+"/parcours/"+id)
		.toPromise()
    	.then((response) => {
          return response as Parcours;
      	});	
	}

	public add(data){
		return this.http.post(this.url+"/parcours", data);
	}

	public update(data){
		return this.http.put(this.url+"/parcours", data);
	}

	public del(id){
		return this.http.delete(this.url+"/parcours/"+id);
	}
}
