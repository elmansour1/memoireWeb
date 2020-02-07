import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { DepartementListComponent } from './departement-list/departement-list.component';
import { DepartementAddComponent } from './departement-add/departement-add.component';
import { DepartementEditComponent } from './departement-edit/departement-edit.component';
import { DepartementUpdateComponent } from './departement-update/departement-update.component';
import { DepartementDeleteComponent } from './departement-delete/departement-delete.component';



const routes: Routes = [
	{
		path:'', component: DepartementListComponent
	},
	{
		path:'add', component: DepartementAddComponent
	},
	{
		path:'edit/:id', component: DepartementEditComponent
	},
	{
		path:'update/:id', component: DepartementUpdateComponent
	},
	{
		path:'delete/:id', component: DepartementDeleteComponent
	}
];


@NgModule({
 	imports: [RouterModule.forChild(routes)],
 	exports: [RouterModule]
})
export class DepartementRoutingModule { }
