import { Injectable } from "@angular/core";
import { AllCountriesModel } from "../models/allCountriesModel";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class CountryService {
    private countryUrl = 'http://localhost:8080/api/all-countries'

    constructor(private http: HttpClient) {}

    getAllCountries() {
        return this.http.get<AllCountriesModel[]>(this.countryUrl);
    }

}