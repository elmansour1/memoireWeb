import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParcoursAddComponent } from './parcours-add/parcours-add.component';
import { ParcoursEditComponent } from './parcours-edit/parcours-edit.component';
import { ParcoursUpdateComponent } from './parcours-update/parcours-update.component';
import { ParcoursDeleteComponent } from './parcours-delete/parcours-delete.component';
import { ParcoursListComponent } from './parcours-list/parcours-list.component';

import { ParcoursRoutingModule }  from './parcours-routing.module';

import { ParcoursService } from '../service';


@NgModule({
  declarations: [
  	ParcoursAddComponent, 
  	ParcoursEditComponent, 
  	ParcoursUpdateComponent, 
  	ParcoursDeleteComponent, 
  	ParcoursListComponent
  	],
  imports: [
    CommonModule,
    FormsModule,
    ParcoursRoutingModule
  ],
  providers:[ParcoursService]
})
export class ParcourModule { }
