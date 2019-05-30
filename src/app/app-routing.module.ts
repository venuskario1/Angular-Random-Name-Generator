import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NamesComponent} from './names/names.component';
import { RandomNameComponent } from './names/randomname/randomname.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'names', component:NamesComponent},
  {path:'randomname/:id', component:RandomNameComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
