package com.qualco.case_study.dto;

import java.math.BigDecimal;

public interface CountryView {
    Integer getId();
    String getName();

    BigDecimal getArea();

    String getCountryCode2();
}
