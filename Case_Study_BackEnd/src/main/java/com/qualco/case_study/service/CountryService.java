package com.qualco.case_study.service;

import com.qualco.case_study.dto.*;
import com.qualco.case_study.repository.CountryRepo;
import com.qualco.case_study.repository.CountryStatRepo;
import com.qualco.case_study.repository.LanguageRepo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private final CountryRepo countryRepo;
    private final LanguageRepo languageRepo;
    private final CountryStatRepo countryStatRepo;

    public CountryService(CountryRepo countryRepo, LanguageRepo languageRepo, CountryStatRepo countryStatRepo) {
        this.countryRepo = countryRepo;
        this.languageRepo = languageRepo;
        this.countryStatRepo = countryStatRepo;
    }

    public List<CountryView> getAllCountries() {
        return countryRepo.findAllByOrderByIdAsc();
    }

    public List<LanguageView> getLanguagesByCountryId(Integer countryId) {
        return languageRepo.findLanguagesByCountryId(countryId);
    }

    public List<CountryStatMaxGdpDto> getAllCountriesStatsWithMaxGdp() {
        return countryStatRepo.findMaxGdpPerPopulation();
    }

    public Page<ContinentRegionCountryStatsDto> getAllCountriesStatsPerRegion(
            CountryStatisticsFilter filter, Pageable pageable) {
        return countryStatRepo
                .findAllContinentRegionCountryStats(filter.getRegion(),
                        filter.getYearFrom(), filter.getYearTo(), pageable);
    }


}
