import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'country-stats', component: CountryStatsComponent },
];
