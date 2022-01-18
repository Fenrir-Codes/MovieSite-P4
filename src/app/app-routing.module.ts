import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Components/home/home.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },

  { path: '', redirectTo: 'Home', pathMatch: 'full' }, /* default route it will show the main page if something has no route */
  { path: '**', redirectTo: 'Error' },   /* 404 page, if a page has a invalid path */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
