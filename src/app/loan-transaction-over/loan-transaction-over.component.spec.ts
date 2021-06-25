import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTransactionOverComponent } from './loan-transaction-over.component';

describe('LoanTransactionOverComponent', () => {
  let component: LoanTransactionOverComponent;
  let fixture: ComponentFixture<LoanTransactionOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTransactionOverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTransactionOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
