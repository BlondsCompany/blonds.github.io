import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './components/home/home.component'
import { AppRoutingModule } from './app-routing.module'
import { TodoItemComponent } from './components/todo-item/todo-item.component'
import { EmailComponent } from './email/email.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoItemComponent,
    EmailComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
