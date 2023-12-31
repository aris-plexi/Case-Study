package com.qualco.case_study.repository;

import com.qualco.case_study.dto.LanguageView;
import com.qualco.case_study.model.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface LanguageRepo extends JpaRepository<Language, Integer> {

    @Query("SELECT l FROM Language l JOIN l.countryLanguages cl WHERE cl.country.id = :countryId")
    List<LanguageView> findLanguagesByCountryId(Integer countryId);
}
