import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';

@Component({ selector: 'lib-task-add', templateUrl: './task-add.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class TaskAddComponent {
  readonly addTask: FormGroup = new FormGroup({text: new FormControl(), /*id: new FormControl()*/});

  constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort) {
  }

  onAddTaskClicked(addTask: FormGroup): void {
    this._addsTaskDto.add({
      //id: addTask.get('id')?.value,
      text: addTask.get('text')?.value,
    });
  }
}
