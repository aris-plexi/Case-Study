package com.qualco.case_study.repository;

import com.qualco.case_study.dto.ContinentRegionCountryStatsDto;
import com.qualco.case_study.dto.CountryStatMaxGdpDto;
import com.qualco.case_study.model.CountryStat;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CountryStatRepo extends JpaRepository<CountryStat, Integer> {

    @Query("SELECT new com.qualco.case_study.dto.CountryStatMaxGdpDto(c.name, c.countryCode3, cs.id.year, cs.population, cs.gdp) " +
            "FROM CountryStat cs " +
            "JOIN cs.country c " +
            "WHERE cs.population > 0 AND cs.gdp > 0 AND " +
            "cs.gdp / cs.population = (SELECT MAX(cs2.gdp / cs2.population) FROM CountryStat cs2 WHERE cs2.country.id = cs.country.id) " +
            "ORDER BY cs.country.id")
    List<CountryStatMaxGdpDto> findMaxGdpPerPopulation();

    @Query("SELECT new com.qualco.case_study.dto.ContinentRegionCountryStatsDto(" +
            "c.region.continent.name, c.region.name, c.name, cs.id.year, cs.population, cs.gdp) " +
            "FROM CountryStat cs " +
            "JOIN cs.country c " +
            "JOIN c.region r " +
            "JOIN r.continent co " +
            "WHERE (:region IS NULL OR r.name = :region) " +
            "AND (:yearFrom IS NULL OR cs.id.year >= :yearFrom) " +
            "AND (:yearTo IS NULL OR cs.id.year <= :yearTo) " +
            "ORDER BY co.name, r.name, c.name, cs.id.year")
    Page<ContinentRegionCountryStatsDto> findAllContinentRegionCountryStats(
            @Param("region") String region,
            @Param("yearFrom") Integer yearFrom,
            @Param("yearTo") Integer yearTo,
            Pageable pageable);
}
