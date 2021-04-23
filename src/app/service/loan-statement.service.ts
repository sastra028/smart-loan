import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoanStatement } from '../model/loan-statement.model';

@Injectable({
  providedIn: 'root'
})
export class LoanStatementService {

  constructor(private angularFirestore: AngularFirestore) {}

  getLoanStatementDoc(id) {
    return this.angularFirestore
    .collection('loanTransaLoan-transaction')
    .doc(id)
    .valueChanges()
  }

  getLoanStatementList() { 
    return this.angularFirestore
    .collection("loanTransaLoan-transaction")
    .snapshotChanges();
  }

  createLoanStatement(LoanStatement: LoanStatement) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("loanTransaLoan-transaction")
        .add(LoanStatement)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteLoanStatement(LoanStatement) {
    return this.angularFirestore
      .collection("loanTransaLoan-transaction")
      .doc(LoanStatement.id)
      .delete();
  }
  
  updateLoanStatement(LoanStatement: LoanStatement, id) {
    return this.angularFirestore
      .collection("loanTransaLoan-transaction")
      .doc(id)
      .update({
        accountId: LoanStatement.accountId,
        firstName: LoanStatement.firstName,
        lastName: LoanStatement.lastName,
        citizenId: LoanStatement.citizenId,
        status: LoanStatement.status,
        loanAmount: LoanStatement.loanAmount
      });
  }

}
