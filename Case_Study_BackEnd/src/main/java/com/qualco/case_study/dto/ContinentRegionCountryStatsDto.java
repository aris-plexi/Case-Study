package com.qualco.case_study.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter @AllArgsConstructor
public class ContinentRegionCountryStatsDto {
    private String continentName;
    private String regionName;
    private String countryName;
    private Integer year;
    private Integer population;
    private BigDecimal gdp;
}
