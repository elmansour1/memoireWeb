import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { RoleListComponent }  from './role-list/role-list.component';
import { RoleAddComponent }  from './role-add/role-add.component';
import { RoleEditComponent }  from './role-edit/role-edit.component';
import { RoleUpdateComponent }  from './role-update/role-update.component';
import { RoleDeleteComponent }  from './role-delete/role-delete.component';


const routes : Routes = [
	{
		path:'', component: RoleListComponent
	},
	{
		path:'add', component: RoleAddComponent
	},
	{
		path: 'edit/:id', component: RoleEditComponent
	},
	{
		path: 'update/:id', component: RoleUpdateComponent
	},
	{
		path: 'delete/:id', component: RoleDeleteComponent
	}
];



@NgModule({
  	imports: [RouterModule.forChild(routes)],
 	exports: [RouterModule]
})
export class RoleRoutingModule { }
