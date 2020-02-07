import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { AuteurListComponent } from './auteur-list/auteur-list.component';
import { AuteurAddComponent } from './auteur-add/auteur-add.component';
import { AuteurUpdateComponent } from './auteur-update/auteur-update.component';
import { AuteurEditComponent } from './auteur-edit/auteur-edit.component';
import { AuteurDeleteComponent } from './auteur-delete/auteur-delete.component';

const routes: Routes = [
	{ path: '', component: AuteurListComponent },
	{ path: 'add', component: AuteurAddComponent },
	{ path: 'update/:id', component: AuteurUpdateComponent },
	{ path: 'edit/:id', component: AuteurEditComponent },
	{ path: 'delete/:id', component: AuteurDeleteComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuteurRoutingModule { }
