import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Specialisation	} from '../model';

// import { Promise } from 'rxjs';

import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialisationService {

	public url:string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  public getAll():Promise<Array<Specialisation>>{
		return this.http.get(this.url+"/specialisations")
		.toPromise()
    	.then((response) => {
          return response as Array<Specialisation>;
      	});
	}

	public get(id):Promise<Specialisation>{
		return this.http.get(this.url+"/specialisations/"+id)
		.toPromise()
    	.then((response) => {
          return response as Specialisation;
      	});	
	}

	public add(data){
		return this.http.post(this.url+"/specialisations", data);
	}

	public update(data){
		return this.http.put(this.url+"/specialisations", data);
	}

	public del(id){
		return this.http.delete(this.url+"/specialisations/"+id);
	}
}
