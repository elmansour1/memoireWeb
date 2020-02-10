import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url:string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  public getAll():Promise<Array<User>>{
		return this.http.get(this.url+"/utilisateurs")
		.toPromise()
    	.then((response) => {
          return response as Array<User>;
      	});
	}

	public get(id):Promise<User>{
		return this.http.get(this.url+"/utilisateurs/"+id)
		.toPromise()
    	.then((response) => {
          return response as User;
      	});	
	}

	public add(data){
		return this.http.post(this.url+"/utilisateurs", data);
	}

	public update(data){
		return this.http.put(this.url+"/utilisateurs", data);
	}

	public del(id){
		return this.http.delete(this.url+"/utilisateurs/"+id);
	}
}
