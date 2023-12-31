import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";



export interface CountriesFilter {
    continentName: string;
    regionName: string;
    countryName: string;
    year: number;
    population: number;
    gdp: number;
}

export interface PaginatedResponse {
    content: CountriesFilter[];
    totalPages: number;
    totalElements: number;
}

@Injectable()
export class CountryFilterService {
    constructor(private http: HttpClient) { }
    private countryFilterUrl = 'http://localhost:8080/api/countries-per-region'


    getAllCountriesAndFilter(page: number = 0, size: number, region?: string, yearFrom?: number, yearTo?: number ) {
        let params = new HttpParams();
        if (region) params = params.append('region', region);
        if (yearFrom) params = params.append('yearFrom', yearFrom.toString());
        if (yearTo) params = params.append('yearTo', yearTo.toString());

        params = params.append('page', page.toString());
        params = params.append('size', size.toString());

        const requestUrl = `${this.countryFilterUrl}?${params.toString()}`;
        console.log('Making API call to:', requestUrl);

        return this.http.get<PaginatedResponse>(this.countryFilterUrl, { params })
    }
}