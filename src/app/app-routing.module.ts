import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SigninComponent }  from './signin/signin.component';
import { LogoutComponent }  from './logout/logout.component';

const routes: Routes = [
	{
		path:'', loadChildren:()=>import('./memoire/memoire.module').then(mod=>mod.MemoireModule)
	},
	{
		path:'auteurs', loadChildren:()=>import('./auteurs/auteur.module').then(mod=>mod.AuteurModule)
	},
	{
		path:'enseignants', loadChildren:()=>import('./enseignant/enseignant.module').then(mod=>mod.EnseignantModule)
	},
	{
		path:'parcours', loadChildren:()=>import('./parcour/parcour.module').then(mod=>mod.ParcourModule)
	},
	{
		path: 'departements', loadChildren:()=>import('./departement/departement.module').then(mod=>mod.DepartementModule)
	},
	{
		path:'specialisations', loadChildren:()=>import('./specialisation/specialisation.module').then(mod=>mod.SpecialisationModule)
	},
	{
		path: 'users', loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)
	},
	{
		path: 'roles', loadChildren:()=>import('./role/role.module').then(mod=>mod.RoleModule)
	},
	{
		path: 'login', component: LoginComponent 
	},
	{
		path: 'signin', component: SigninComponent
	},
	{
		path: 'logout', component: LogoutComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
