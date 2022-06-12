import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TasksPage } from './tasks.page';
import { TaskListComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/task-list.component-module';
import { FirebaseTasksServiceModule } from '../../../projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-tasks.service-module';
import { PicturesComponentModule } from '../../../projects/features/src/lib/adapters/primary/ui/pictures.component-module';
import { HeadComponentModule } from '../../../projects/features/src/lib/adapters/primary/ui/head.component-module';
import { TaskAddComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/task-add.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TasksPage,
        }
      ]),
  TaskListComponentModule,
  FirebaseTasksServiceModule,
  PicturesComponentModule,
  HeadComponentModule,
  TaskAddComponentModule
],
  	declarations: [TasksPage],
  	providers: [],
  	exports: [] })
export class TasksPageModule {
}
