import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTransactionCreateComponent } from './loan-transaction-create.component';

describe('LoanTransactionCreateComponent', () => {
  let component: LoanTransactionCreateComponent;
  let fixture: ComponentFixture<LoanTransactionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTransactionCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTransactionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
