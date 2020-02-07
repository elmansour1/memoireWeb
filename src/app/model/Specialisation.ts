import {Departement , Parcours}  from '../model';

export class Specialisation{
	public id?: number;
	public code: string;
	public description: string;
	public departement: Departement;
	public parcours: Parcours;
}