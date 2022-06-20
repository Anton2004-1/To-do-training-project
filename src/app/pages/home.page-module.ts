import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HeadComponentModule } from '../../../projects/features/src/lib/adapters/primary/ui/head.component-module';
import { PicturesComponentModule } from '../../../projects/features/src/lib/adapters/primary/ui/pictures.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  HeadComponentModule,
  PicturesComponentModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
