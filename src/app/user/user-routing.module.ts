import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { UserListComponent }  from './user-list/user-list.component';
import { UserAddComponent }  from './user-add/user-add.component';
import { UserEditComponent }  from './user-edit/user-edit.component';
import { UserUpdateComponent }  from './user-update/user-update.component';
import { UserDeleteComponent }  from './user-delete/user-delete.component';


const routes : Routes = [
	{
		path:'', component: UserListComponent
	},
	{
		path:'add', component: UserAddComponent
	},
	{
		path: 'edit/:id', component: UserEditComponent
	},
	{
		path: 'update/:id', component: UserUpdateComponent
	},
	{
		path: 'delete/:id', component: UserDeleteComponent
	}
];


@NgModule({
  	imports: [RouterModule.forChild(routes)],
 	exports: [RouterModule]
})
export class UserRoutingModule { }
