import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import { CountryLanguagesComponent } from './country-languages/country-languages.component';
import { CountryStatsGdpComponent } from './country-stats-gdp/country-stats-gdp.component';
import { CountryFilterComponent } from './country-filter/country-filter.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'country-stats', component: CountryStatsComponent },
    {path: 'country/:id/languages', component: CountryLanguagesComponent},
    {path: 'country-stats-gdp', component: CountryStatsGdpComponent},
    {path:'country-stats-filter', component: CountryFilterComponent}
];
