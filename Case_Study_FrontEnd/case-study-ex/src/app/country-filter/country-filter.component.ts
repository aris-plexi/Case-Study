import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CountriesFilter, CountryFilterService, PaginatedResponse } from './country-filter.service';
import { Region, REGIONS } from './country-filter.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-country-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [CountryFilterService],
  templateUrl: './country-filter.component.html',
  styleUrl: './country-filter.component.css'
})
export class CountryFilterComponent implements OnInit {

  countries: CountriesFilter[] = [];
  regions: Region[] | undefined;
  selectedRegion: string = '';
  yearFrom: number | undefined = undefined;
  yearTo: number | undefined = undefined;
  totalElements: number = 0;
  totalPages: number = 0;
  currentPage: number = 0;
  maxPageButtons = 5;
  pageSize: number = 30;

  constructor(
    private service: CountryFilterService
  ) { }

  ngOnInit(): void {
    this.regions = REGIONS;
    this.showTable();
  }

  onRegionChange(): void {
    this.currentPage = 0;
    this.showTable();
  }

  onYearChange(): void {
    this.currentPage = 0;
    this.showTable();
  }

  goToPage(n: number): void {
    this.currentPage = n;
    this.showTable();
  }

  onNext(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.showTable();
    }
  }

  onPrev(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.showTable();
    }
  }

  getPaginationButtons(): number[] {
    let startPage: number, endPage: number;
    if (this.totalPages <= this.maxPageButtons) {
      // less than maxPageButtons total pages so show all
      startPage = 1;
      endPage = this.totalPages;
    } else {
      // more than maxPageButtons total pages so calculate start and end pages
      const maxPagesBeforeCurrentPage = Math.floor(this.maxPageButtons / 2);
      const maxPagesAfterCurrentPage = Math.ceil(this.maxPageButtons / 2) - 1;
      if (this.currentPage <= maxPagesBeforeCurrentPage) {
        // near the beginning
        startPage = 1;
        endPage = this.maxPageButtons;
      } else if (this.currentPage + maxPagesAfterCurrentPage >= this.totalPages) {
        // near the end
        startPage = this.totalPages - (this.maxPageButtons - 1);
        endPage = this.totalPages - 1; // Adjusted to prevent duplication of the last page
      } else {
        // somewhere in the middle
        startPage = this.currentPage - maxPagesBeforeCurrentPage;
        endPage = this.currentPage + maxPagesAfterCurrentPage;
      }
    }
    // Generate page numbers using the startPage and endPage
    return Array.from({ length: (endPage + 1) - startPage }, (_, i) => startPage + i);
  }
  


  showTable() {
    this.service.getAllCountriesAndFilter(this.currentPage, this.pageSize, this.selectedRegion, this.yearFrom, this.yearTo).subscribe(
      (data: PaginatedResponse) => {
        this.countries = data.content;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
      },
      (error) => {
        console.error('Error fetching countries', error);
      }
    );
  }

}
