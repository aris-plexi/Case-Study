import { Component, OnInit } from '@angular/core';
import { CountriesModel, CountryStatsService} from './country-stats.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-stats.component.html',
  providers: [CountryStatsService],
  styleUrl: './country-stats.component.css'
})
export class CountryStatsComponent implements OnInit {

  countries: CountriesModel[] = [];
  constructor(
    private countryService: CountryStatsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showCountries();
  }

  showCountries() {
    this.countryService.getAllCountries().subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error fetching countries', error);
      }
    );
  }

  showCountryLanguages(countryId: string): void {
    this.router.navigate(['/country', countryId, 'languages'])
  }

}
