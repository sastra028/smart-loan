import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAccountCreateComponent } from './loan-account-create.component';

describe('LoanAccountCreateComponent', () => {
  let component: LoanAccountCreateComponent;
  let fixture: ComponentFixture<LoanAccountCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanAccountCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAccountCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
