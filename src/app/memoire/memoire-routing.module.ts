import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';


import { MemoireListComponent } from './memoire-list/memoire-list.component';
import { MemoireAddComponent } from './memoire-add/memoire-add.component';
import { MemoireEditComponent } from './memoire-edit/memoire-edit.component';
import { MemoireUpdateComponent } from './memoire-update/memoire-update.component';
import { MemoireDeleteComponent } from './memoire-delete/memoire-delete.component';
import {  AfficherPdfComponent } from './afficher-pdf/afficher-pdf.component';

const routes: Routes = [
	{ path:'', component: MemoireListComponent },
	{ path:'add', component: MemoireAddComponent },
	{ path:'edit/:id', component: MemoireEditComponent },
	{ path:'update/:id', component: MemoireUpdateComponent },
	{ path:'delete/:id', component: MemoireDeleteComponent },

	{ path:'afficher/:filename', component: AfficherPdfComponent }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoireRoutingModule { }
