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
    .collection('loan-statement')
    .doc(id)
    .valueChanges()
  }

  getLoanStatementList() { 
    return this.angularFirestore
    .collection("loan-statement")
    .snapshotChanges();
  }

  createLoanStatement(loanStatement: LoanStatement) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("loan-statement")
        .add(loanStatement)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteLoanStatement(loanStatement) {
    return this.angularFirestore
      .collection("loan-statement")
      .doc(loanStatement.id)
      .delete();
  }
  
  updateLoanStatement(loanStatement: LoanStatement, id) {
    return this.angularFirestore
      .collection("loan-statement")
      .doc(id)
      .update({
        statementId: loanStatement.statementId,
        accountId: loanStatement.accountId,
        transactionId: loanStatement.transactionId,
        paidInterest: loanStatement.paidInterest,
        paidPrincipal: loanStatement.paidPrincipal,
        paidFine: loanStatement.paidFine,
        slip: loanStatement.slip,
      });
  }

}
