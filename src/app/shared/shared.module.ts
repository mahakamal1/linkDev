import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    MenuModule
  ],
  exports:[
    FormsModule,
    CarouselModule,
    MenuModule
  ]
})
export class SharedModule { }
