import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { SpecialisationListComponent } from './specialisation-list/specialisation-list.component';
import { SpecialisationAddComponent } from './specialisation-add/specialisation-add.component';
import { SpecialisationEditComponent } from './specialisation-edit/specialisation-edit.component';
import { SpecialisationUpdateComponent } from './specialisation-update/specialisation-update.component';
import { SpecialisationDeleteComponent } from './specialisation-delete/specialisation-delete.component';



const routes: Routes = [
	{
		path:'', component: SpecialisationListComponent
	},
	{
		path:'add', component: SpecialisationAddComponent
	},
	{
		path:'edit/:id', component: SpecialisationEditComponent
	},
	{
		path:'update/:id', component: SpecialisationUpdateComponent
	},
	{
		path:'delete/:id', component: SpecialisationDeleteComponent
	}
];


@NgModule({
  	imports: [RouterModule.forChild(routes)],
 	exports: [RouterModule]
})
export class SpecialisationRoutingModule { }
