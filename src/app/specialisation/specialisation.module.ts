import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { SpecialisationAddComponent } from './specialisation-add/specialisation-add.component';
import { SpecialisationUpdateComponent } from './specialisation-update/specialisation-update.component';
import { SpecialisationDeleteComponent } from './specialisation-delete/specialisation-delete.component';
import { SpecialisationListComponent } from './specialisation-list/specialisation-list.component';
import { SpecialisationEditComponent } from './specialisation-edit/specialisation-edit.component';

import { SpecialisationRoutingModule }  from './specialisation-routing.module';

import { SpecialisationService } from '../service';


@NgModule({
  declarations: [
  	SpecialisationAddComponent, 
  	SpecialisationUpdateComponent, 
  	SpecialisationDeleteComponent, 
  	SpecialisationListComponent, 
  	SpecialisationEditComponent
  	],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpecialisationRoutingModule
  ],
  providers:[SpecialisationService]
})
export class SpecialisationModule { }
