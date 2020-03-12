import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Auteur } from '../model';


@Injectable({
  providedIn: 'root'
})
export class AuteurService {

	public url:string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  public getAll():Promise<Array<Auteur>>{
		return this.http.get(this.url+"/auteurs")
		.toPromise()
    	.then((response) => {
          return response as Array<Auteur>;
      	});
	}

	// public getAllAuteurs():

	public getAllByObservable(): Observable<Auteur[]>{
		return this.http.get(this.url+"/auteurs")
			.pipe(
				map(data => {
					return data as Auteur[];
				}))
	}

	public get(id):Promise<Auteur>{
		return this.http.get(this.url+"/auteurs/"+id)
		.toPromise()
    	.then((response) => {
          return response as Auteur;
      	});	
	}

	public add(data){
		return this.http.post(this.url+"/auteurs", data);
	}

	public update(data){
		return this.http.put(this.url+"/auteurs", data);
	}

	public del(id){
		return this.http.delete(this.url+"/auteurs/"+id);
	}
	public chercher(data){
		return this.http.get(this.url+"/auteurs/search/recherche?nom"+"="+data);
	}
}
