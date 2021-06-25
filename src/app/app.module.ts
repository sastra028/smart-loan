import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoanTransactionHomeComponent } from './loan-transaction-home/loan-transaction-home.component';
import { LoanTransactionDueComponent } from './loan-transaction-due/loan-transaction-due.component';
import { LoanTransactionOverComponent } from './loan-transaction-over/loan-transaction-over.component';
import { LoanTransactionCreateComponent } from './loan-transaction-create/loan-transaction-create.component';
import { LoanAccountCreateComponent } from './loan-account-create/loan-account-create.component';
import { LoanStatementPaidComponent } from './loan-statement-paid/loan-statement-paid.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUserComponent,
    EditUserComponent,
    LoanTransactionHomeComponent,
    LoanTransactionDueComponent,
    LoanTransactionOverComponent,
    LoanTransactionCreateComponent,
    LoanAccountCreateComponent,
    LoanStatementPaidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
