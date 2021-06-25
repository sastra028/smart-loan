import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTransactionHomeComponent } from './loan-transaction-home.component';

describe('LoanTransactionHomeComponent', () => {
  let component: LoanTransactionHomeComponent;
  let fixture: ComponentFixture<LoanTransactionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTransactionHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTransactionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
