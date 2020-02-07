import {Enseignant, Auteur } from '../model';

export class Memoire{
	public id:number;
	public titre:string;
	public datePublication: Date;
	public motsCles:string;
	public resume:string;
	public abstrat:string;
	public document:string;
	public encadreurs: Enseignant[];
	public auteurs: Auteur[];

}