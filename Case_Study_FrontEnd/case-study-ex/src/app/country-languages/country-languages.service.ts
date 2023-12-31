import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface LanguagesModel {
    id: string;
    language: string;
}


@Injectable()
export class countryLanguagesService{
    constructor(private http: HttpClient) {}
    private baseUrl = 'http://localhost:8080/api';

    getLanguagesByCountryId(countryId: string) {
        return this.http.get<LanguagesModel[]>(`${this.baseUrl}/countries/${countryId}/languages`)
    }
}