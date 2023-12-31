import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './country-stats.service';
import { AllCountriesModel } from '../models/allCountriesModel';

@Component({
  selector: 'app-country-stats',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.css']
})
export class CountryStatsComponent implements OnInit {

  countries: AllCountriesModel[] = [];
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.showCountries();
  }

  showCountries() {
    this.countryService.getAllCountries().subscribe(
      (data) => {
        this.countries = data; // Assign the data to the component's 'countries' property
      },
      (error) => {
        console.error('Error fetching countries', error);
      }
    );
  }

}
