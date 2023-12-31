import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStatsGdpComponent } from './country-stats-gdp.component';

describe('CountryStatsGdpComponent', () => {
  let component: CountryStatsGdpComponent;
  let fixture: ComponentFixture<CountryStatsGdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryStatsGdpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryStatsGdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
