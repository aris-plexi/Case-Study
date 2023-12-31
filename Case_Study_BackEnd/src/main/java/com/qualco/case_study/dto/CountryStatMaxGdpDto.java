package com.qualco.case_study.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter @AllArgsConstructor
public class CountryStatMaxGdpDto {
    private String name;
    private String countryCode3;
    private Integer year;
    private Integer population;
    private BigDecimal gdp;
}
