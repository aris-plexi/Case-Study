import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguagesModel, countryLanguagesService } from './country-languages.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-languages',
  standalone: true,
  imports: [CommonModule],
  providers: [countryLanguagesService],
  templateUrl: './country-languages.component.html',
  styleUrl: './country-languages.component.css'
})
export class CountryLanguagesComponent implements OnInit {

  languages: LanguagesModel[] = [];
  constructor(
    private route: ActivatedRoute,
    private languageService: countryLanguagesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const countryId = params['id'];
      this.fetchLanguages(countryId)
    })
    
  }

  fetchLanguages(countryId: string) {
    this.languageService.getLanguagesByCountryId(countryId).subscribe(
      (data) => {
        this.languages = data;
      },
      (error) => {
        console.error('Error fetching countries', error);
      }
    )
  }
}


