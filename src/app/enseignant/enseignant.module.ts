import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnseignantAddComponent } from './enseignant-add/enseignant-add.component';
import { EnseignantEditComponent } from './enseignant-edit/enseignant-edit.component';
import { EnseignantUpdateComponent } from './enseignant-update/enseignant-update.component';
import { EnseignantDeleteComponent } from './enseignant-delete/enseignant-delete.component';
import { EnseignantListComponent } from './enseignant-list/enseignant-list.component';

import { EnseignantRoutingModule} from './enseignant-routing.module';

import { EnseignantService } from '../service';


@NgModule({
  declarations: [
  	EnseignantAddComponent, 
  	EnseignantEditComponent, 
  	EnseignantUpdateComponent, 
  	EnseignantDeleteComponent, 
  	EnseignantListComponent],
  imports: [
    CommonModule,
    FormsModule,
    EnseignantRoutingModule
  ],
  providers:[EnseignantService]
})
export class EnseignantModule { }
