import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'customer-update', component: CustomerUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
