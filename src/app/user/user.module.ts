import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';



@NgModule({
  declarations: [
    CreateTodoComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
