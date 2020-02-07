import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { EnseignantListComponent } from './enseignant-list/enseignant-list.component';
import { EnseignantAddComponent } from './enseignant-add/enseignant-add.component';
import { EnseignantEditComponent } from './enseignant-edit/enseignant-edit.component';
import { EnseignantUpdateComponent } from './enseignant-update/enseignant-update.component';
import { EnseignantDeleteComponent } from './enseignant-delete/enseignant-delete.component';



const routes: Routes = [
	{ path:'', component: EnseignantListComponent },
	{ path:'add', component: EnseignantAddComponent },
	{ path:'edit/:id', component: EnseignantEditComponent },
	{ path:'update/:id', component: EnseignantUpdateComponent },
	{ path:'delete/:id', component: EnseignantDeleteComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
