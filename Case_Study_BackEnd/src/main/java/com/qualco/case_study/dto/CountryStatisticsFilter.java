package com.qualco.case_study.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class CountryStatisticsFilter {
    private String region;
    private Integer yearFrom;
    private Integer yearTo;
}
