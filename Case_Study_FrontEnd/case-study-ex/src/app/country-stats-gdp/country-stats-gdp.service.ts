import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface CountriesStatisticsModel {
    name: string;
    countryCode3: string;
    year: number;
    population: number;
    gdp: number;
}


@Injectable()
export class countryStatsGdpService{
    constructor(private http: HttpClient) {}
    private countryStatsUrl ='http://localhost:8080/api/countries/statistics'


    getCountriesStatistics() {
        return this.http.get<CountriesStatisticsModel[]>(this.countryStatsUrl)
    }
}