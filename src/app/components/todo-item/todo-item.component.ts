import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Todo } from '../../models/todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input() todo: Todo | undefined

  async redirectCompany(): Promise<void> {
    window.location.href = `${this.todo?.link}`
  }
}
