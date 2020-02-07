import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
  FooterComponent,
  SearchBarComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports:[
  FooterComponent,
  SearchBarComponent
  ]
})
export class ComponentModule { }
