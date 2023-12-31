package com.qualco.case_study.controller;

import com.qualco.case_study.dto.*;
import com.qualco.case_study.service.CountryService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api")
public class CountryController {
    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/all-countries")
    public ResponseEntity<List<CountryView>> getCountryProperties() {
        return new ResponseEntity<>(countryService.getAllCountries(), HttpStatus.OK);
    }

    @GetMapping("/countries/{countryId}/languages")
    public ResponseEntity<List<LanguageView>> getCountryLanguages(@PathVariable Integer countryId) {
        return new ResponseEntity<>(countryService.getLanguagesByCountryId(countryId), HttpStatus.OK);
    }

    @GetMapping("/countries/statistics")
    public ResponseEntity<List<CountryStatMaxGdpDto>> getCountryStatsMaxGdp() {
        return new ResponseEntity<>(countryService.getAllCountriesStatsWithMaxGdp(), HttpStatus.OK);
    }

    @GetMapping("/countries-per-region")
    public ResponseEntity<Page<ContinentRegionCountryStatsDto>> getCountryStatsPerRegion(
            @RequestParam(required = false) String region,
            @RequestParam(required = false) Integer yearFrom,
            @RequestParam(required = false) Integer yearTo,
            Pageable pageable
    ) {
        CountryStatisticsFilter filter = new CountryStatisticsFilter();
        filter.setRegion(region);
        filter.setYearFrom(yearFrom);
        filter.setYearTo(yearTo);
        return new ResponseEntity<>(countryService.getAllCountriesStatsPerRegion(filter,pageable), HttpStatus.OK);
    }

}
