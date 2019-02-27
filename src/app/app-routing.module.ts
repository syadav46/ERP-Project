import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'pagenotfound',
    component: PagenotfoundComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'details/edit/:id',
    component: EditComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'edit/delete/:id',
    component: DeleteComponent
  },
  {
    path: 'delete',
    component: DeleteComponent
  },
  {
    path: 'new',
    component: NewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
