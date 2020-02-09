import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleUpdateComponent } from './role-update/role-update.component';
import { RoleDeleteComponent } from './role-delete/role-delete.component';
import { RoleListComponent } from './role-list/role-list.component';


import {RoleService } from '../service';
import { RoleRoutingModule }  from './role-routing.module';


@NgModule({
  declarations: [
  	RoleAddComponent, 
  	RoleEditComponent, 
  	RoleUpdateComponent, 
  	RoleDeleteComponent, 
  	RoleListComponent
  	],
  imports: [
    CommonModule,
    FormsModule,
    RoleRoutingModule
  ],
  providers:[RoleService]
})
export class RoleModule { }
