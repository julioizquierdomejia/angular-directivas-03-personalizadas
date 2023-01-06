import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OverMouseDirective } from '../directives/over-mouse.directive';



@NgModule({
  declarations: [
    HomeComponent,
    OverMouseDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HomeComponent,
    OverMouseDirective
  ]
})
export class PagesModule { }
