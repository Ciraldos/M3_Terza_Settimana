import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'newmovie', component: NewMovieComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
