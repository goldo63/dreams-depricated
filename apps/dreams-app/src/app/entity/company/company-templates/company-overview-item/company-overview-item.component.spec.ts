import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOverviewItemComponent } from './company-overview-item.component';

describe('CompanyOverviewItemComponent', () => {
  let component: CompanyOverviewItemComponent;
  let fixture: ComponentFixture<CompanyOverviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyOverviewItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyOverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
