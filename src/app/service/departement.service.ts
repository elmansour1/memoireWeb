import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Departement } from '../model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  public url:string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  public getAll():Promise<Array<Departement>>{
		return this.http.get(this.url+"/departements")
		.toPromise()
    	.then((response) => {
          return response as Array<Departement>;
      	});
	}

	public get(id):Promise<Departement>{
		return this.http.get(this.url+"/departements/"+id)
		.toPromise()
    	.then((response) => {
          return response as Departement;
      	});	
	}

	public add(data){
		return this.http.post(this.url+"/departements", data);
	}

	public update(data){
		return this.http.put(this.url+"/departements", data);
	}

	public del(id){
		return this.http.delete(this.url+"/departements/"+id);
	}
}
