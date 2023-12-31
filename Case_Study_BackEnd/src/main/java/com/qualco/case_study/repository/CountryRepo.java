package com.qualco.case_study.repository;

import com.qualco.case_study.dto.CountryView;
import com.qualco.case_study.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepo extends JpaRepository<Country, Integer> {

    List<CountryView> findAllByOrderByIdAsc();

}
