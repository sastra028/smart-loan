import { Component, OnInit } from '@angular/core';
import { LoanTransactionService } from '../service/loan-transaction.service';
import { LoanTransaction } from '../model/loan-transaction.model';

@Component({
  selector: 'app-loan-transaction-due',
  templateUrl: './loan-transaction-due.component.html',
  styleUrls: ['./loan-transaction-due.component.css']
})
export class LoanTransactionDueComponent implements OnInit {
  LoanTransactions: LoanTransaction[];

  constructor(private loanTransactionService: LoanTransactionService) { }

  ngOnInit() {
      this.loanTransactionService.getLoanTransactionList().subscribe(res => {
      this.LoanTransactions = res.map( e => {
        const id = e.payload.doc.id;
        const data = e.payload.doc.data() as LoanTransaction;
        return {id, ...data
        } as LoanTransaction;
      })
    });
  }
}