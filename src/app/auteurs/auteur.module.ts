import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuteurDeleteComponent } from '../auteurs/auteur-delete/auteur-delete.component';
import { AuteurAddComponent } from '../auteurs/auteur-add/auteur-add.component';
import { AuteurUpdateComponent } from '../auteurs/auteur-update/auteur-update.component';
import { AuteurListComponent } from '../auteurs/auteur-list/auteur-list.component';
import { AuteurEditComponent } from '../auteurs/auteur-edit/auteur-edit.component';

import { AuteurRoutingModule } from './auteur-routing.module';

import { AuteurService } from '../service';


@NgModule({
  declarations: [
  	AuteurDeleteComponent, 
  	AuteurAddComponent, 
  	AuteurUpdateComponent, 
  	AuteurListComponent, 
  	AuteurEditComponent
  	],
  imports: [
    CommonModule,
    FormsModule,
    AuteurRoutingModule
  ],
  providers:[AuteurService]
})
export class AuteurModule { }
