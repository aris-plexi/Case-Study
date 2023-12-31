package com.qualco.case_study.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@Embeddable
public class CountryLanguageId implements Serializable {
    private static final long serialVersionUID = 8166280119928706362L;
    @Column(name = "country_id", nullable = false)
    private Integer countryId;

    @Column(name = "language_id", nullable = false)
    private Integer languageId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        CountryLanguageId entity = (CountryLanguageId) o;
        return Objects.equals(this.languageId, entity.languageId) &&
                Objects.equals(this.countryId, entity.countryId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(languageId, countryId);
    }

}