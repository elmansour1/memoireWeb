import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DepartementAddComponent } from './departement-add/departement-add.component';
import { DepartementUpdateComponent } from './departement-update/departement-update.component';
import { DepartementDeleteComponent } from './departement-delete/departement-delete.component';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { DepartementEditComponent } from './departement-edit/departement-edit.component';

import {DepartementRoutingModule } from './departement-routing.module';
import { DepartementService } from '../service';

@NgModule({
  declarations: [
  	DepartementAddComponent,
  	DepartementUpdateComponent, 
  	DepartementDeleteComponent, 
  	DepartementListComponent, 
  	DepartementEditComponent
  	],
  imports: [
    FormsModule,
    CommonModule,
    DepartementRoutingModule
  ],
  providers:[DepartementService]
})
export class DepartementModule { }
