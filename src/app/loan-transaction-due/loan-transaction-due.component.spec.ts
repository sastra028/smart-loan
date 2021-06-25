import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTransactionDueComponent } from './loan-transaction-due.component';

describe('LoanTransactionDueComponent', () => {
  let component: LoanTransactionDueComponent;
  let fixture: ComponentFixture<LoanTransactionDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTransactionDueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTransactionDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
