import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanStatementPaidComponent } from './loan-statement-paid.component';

describe('LoanStatementPaidComponent', () => {
  let component: LoanStatementPaidComponent;
  let fixture: ComponentFixture<LoanStatementPaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanStatementPaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanStatementPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
