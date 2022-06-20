import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturesComponent } from './pictures.component';

@NgModule({ imports: [CommonModule],
  	declarations: [PicturesComponent],
  	providers: [],
  	exports: [PicturesComponent] })
export class PicturesComponentModule {
}
