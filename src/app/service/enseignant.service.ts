import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Enseignant } from '../model';


@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  public url:string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  public getAll():Promise<Array<Enseignant>>{
		return this.http.get(this.url+"/enseignants")
		.toPromise()
    	.then((response) => {
          return response as Array<Enseignant>;
      	});
	}

	public get(id):Promise<Enseignant>{
		return this.http.get(this.url+"/enseignants/"+id)
		.toPromise()
    	.then((response) => {
          return response as Enseignant;
      	});	
	}

	public add(data){
		return this.http.post(this.url+"/enseignants", data);
	}

	public update(data){
		return this.http.put(this.url+"/enseignants", data);
	}

	public del(id){
		return this.http.delete(this.url+"/enseignants/"+id);
	}
}
