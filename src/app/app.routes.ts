import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { LoginComponent } from './login/login.component';
import { EndpageComponent } from './endpage/endpage.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'customer-update', component: CustomerUpdateComponent },
  { path: 'endpage', component: EndpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
