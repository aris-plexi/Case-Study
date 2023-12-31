import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


export interface CountriesModel {
    id: string;
    name: string;
    area: number;
    countryCode2: string;
}

@Injectable()
export class CountryStatsService {
    constructor(private http: HttpClient) { }
    private countryUrl = 'http://localhost:8080/api/all-countries'

    getAllCountries() {
        return this.http.get<CountriesModel[]>(this.countryUrl);
    }

}