import {Enseignant, Auteur, Specialisation } from '../model';

export class Memoire{
	public id?:number;
	public titre:string;
	public datePublication: Date;
	public anneesSoutenance: Date;
	public motsCles:string;
	public resume:string;
	public abstrat:string;
	public nbEncadreur:number;
	public nbExaminateur:number;
	public nbInviter:number;
	public document:string;
	public specialisation:Specialisation;
	public encadreurs: Enseignant[];
	public auteurs: Auteur[];

	//public inviter:string;

}