import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { EmailComponent } from './email/email.component'
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'email',
    component: EmailComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
