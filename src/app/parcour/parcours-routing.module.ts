import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { ParcoursListComponent } from './parcours-list/parcours-list.component';
import { ParcoursAddComponent } from './parcours-add/parcours-add.component';
import { ParcoursEditComponent } from './parcours-edit/parcours-edit.component';
import { ParcoursUpdateComponent } from './parcours-update/parcours-update.component';
import { ParcoursDeleteComponent } from './parcours-delete/parcours-delete.component';



const routes: Routes = [
	{
		path:'', component: ParcoursListComponent
	},
	{
		path:'add', component: ParcoursAddComponent
	},
	{
		path: 'edit/:id', component: ParcoursEditComponent
	},
	{
		path: 'update/:id', component: ParcoursUpdateComponent
	},
	{
		path: 'delete/:id', component: ParcoursDeleteComponent
	}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcoursRoutingModule { }
