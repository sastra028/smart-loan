import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoanAccount } from '../model/loan-account.model';

@Injectable({
  providedIn: 'root'
})
export class LoanAccountService {
  constructor(private angularFirestore: AngularFirestore) {}

  getLoanAccountDoc(id) {
    return this.angularFirestore
    .collection('loan-account')
    .doc(id)
    .valueChanges()
  }

  getLoanAccountList() { 
    return this.angularFirestore
    .collection("loan-account")
    .snapshotChanges();
  }

  createLoanAccount(loanAccount: LoanAccount) {
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
        .collection("loan-account")
        .add(loanAccount)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  deleteLoanAccount(loanAccount) {
    return this.angularFirestore
      .collection("loan-account")
      .doc(loanAccount.id)
      .delete();
  }
  
  updateLoanAccount(loanAccount: LoanAccount, id) {
    return this.angularFirestore
      .collection("loan-account")
      .doc(id)
      .update({
        accountId: loanAccount.accountId, 
        firstName: loanAccount.firstName, 
        lastName: loanAccount.lastName, 
        citizenId: loanAccount.citizenId, 
        bankName: loanAccount.bankName, 
        baneAccountName: loanAccount.baneAccountName, 
        baneAccountId: loanAccount.baneAccountId, 
        telMain: loanAccount.telMain, 
        tel1: loanAccount.tel1, 
        tel2: loanAccount.tel2, 
        lineId: loanAccount.lineId, 
        email: loanAccount.email, 
        address: loanAccount.address, 
        career: loanAccount.career, 
        salary: loanAccount.salary, 
        relationshipAccountId: loanAccount.relationshipAccountId, 
        relationshipDetail: loanAccount.relationshipDetail, 
        picture: loanAccount.picture, 
        other: loanAccount.other
      });
  }
}
