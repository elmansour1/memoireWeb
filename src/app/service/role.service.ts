import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Role } from '../model';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public url:string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  public getAll():Promise<Array<Role>>{
		return this.http.get(this.url+"/roles")
		.toPromise()
    	.then((response) => {
          return response as Array<Role>;
      	});
	}

	public get(id):Promise<Role>{
		return this.http.get(this.url+"/roles/"+id)
		.toPromise()
    	.then((response) => {
          return response as Role;
      	});	
	}

	public add(data){
		return this.http.post(this.url+"/roles", data);
	}

	public update(data){
		return this.http.put(this.url+"/roles", data);
	}

	public del(id){
		return this.http.delete(this.url+"/roles/"+id);
	}
}
