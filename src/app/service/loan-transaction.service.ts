import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoanTransaction } from '../model/loan-transaction.model';

@Injectable({
  providedIn: 'root'
})
export class LoanTransactionService {

  constructor(private angularFirestore: AngularFirestore) {}

  getLoanTransactionDoc(id) {
    return this.angularFirestore
    .collection('loanTransaLoan-transaction')
    .doc(id)
    .valueChanges()
  }

  getLoanTransactionList() { 
    return this.angularFirestore
    .collection("loanTransaLoan-transaction")
    .snapshotChanges();
  }

  createLoanTransaction(loanTransaction: LoanTransaction) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("loanTransaLoan-transaction")
        .add(loanTransaction)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteLoanTransaction(loanTransaction) {
    return this.angularFirestore
      .collection("loanTransaLoan-transaction")
      .doc(loanTransaction.id)
      .delete();
  }
  
  updateLoanTransaction(loanTransaction: LoanTransaction, id) {
    return this.angularFirestore
      .collection("loanTransaLoan-transaction")
      .doc(id)
      .update({
        transactionId: loanTransaction.transactionId,
        accountId: loanTransaction.accountId,
        firstName: loanTransaction.firstName,
        lastName: loanTransaction.lastName,
        citizenId: loanTransaction.citizenId,
        status: loanTransaction.status,
        loanAmount: loanTransaction.loanAmount
      });
  }

}
