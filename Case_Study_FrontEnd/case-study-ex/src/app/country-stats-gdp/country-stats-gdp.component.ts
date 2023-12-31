import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CountriesStatisticsModel, countryStatsGdpService } from './country-stats-gdp.service';

@Component({
  selector: 'app-country-stats-gdp',
  standalone: true,
  imports: [CommonModule],
  providers: [countryStatsGdpService],
  templateUrl: './country-stats-gdp.component.html',
  styleUrl: './country-stats-gdp.component.css'
})
export class CountryStatsGdpComponent implements OnInit {

  countriesStats: CountriesStatisticsModel[] = [];
  constructor(
    private countryStatsGdpService: countryStatsGdpService
  ) {}
  

  ngOnInit(): void {
    this.showCountryStatistics()
  }

  showCountryStatistics() {
    this.countryStatsGdpService.getCountriesStatistics().subscribe(
      (data) => {
        this.countriesStats = data;
      },
      (error) => {
        console.error('Error fetching countries stats', error);
      }
    )
  }

}
