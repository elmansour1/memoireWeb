import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserListComponent } from './user-list/user-list.component';


import { UserRoutingModule } from './user-routing.module';

import { UserService } from '../service';


@NgModule({
  declarations: [
  	UserAddComponent, 
  	UserEditComponent, 
  	UserUpdateComponent, 
  	UserDeleteComponent, 
  	UserListComponent
  	],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  providers:[UserService]
})
export class UserModule { }
