import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemoireAddComponent } from './memoire-add/memoire-add.component';
import { MemoireUpdateComponent } from './memoire-update/memoire-update.component';
import { MemoireDeleteComponent } from './memoire-delete/memoire-delete.component';
import { MemoireEditComponent } from './memoire-edit/memoire-edit.component';
import { MemoireListComponent } from './memoire-list/memoire-list.component';


import { MemoireRoutingModule} from './memoire-routing.module';

import { MemoireService } from '../service';
import { AfficherPdfComponent } from './afficher-pdf/afficher-pdf.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
  		MemoireAddComponent, 
  		MemoireUpdateComponent, 
  		MemoireDeleteComponent, 
  		MemoireEditComponent, 
      MemoireListComponent, AfficherPdfComponent
  		],
  imports: [
    CommonModule,
    FormsModule,
    MemoireRoutingModule,
    PdfViewerModule
  ],
  providers:[MemoireService]
})
export class MemoireModule { }
