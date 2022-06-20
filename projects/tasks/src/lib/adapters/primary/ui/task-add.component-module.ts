import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAddComponent } from './task-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [TaskAddComponent],
  	providers: [],
  	exports: [TaskAddComponent] })
export class TaskAddComponentModule {
}
