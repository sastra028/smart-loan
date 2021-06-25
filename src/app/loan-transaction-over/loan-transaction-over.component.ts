import { Component, OnInit } from '@angular/core';
import { LoanTransactionService } from '../service/loan-transaction.service';
import { LoanTransaction } from '../model/loan-transaction.model';

@Component({
  selector: 'app-loan-transaction-over',
  templateUrl: './loan-transaction-over.component.html',
  styleUrls: ['./loan-transaction-over.component.css']
})
export class LoanTransactionOverComponent implements OnInit {

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
