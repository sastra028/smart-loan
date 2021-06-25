import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-loan-transaction-create',
  templateUrl: './loan-transaction-create.component.html',
  styleUrls: ['./loan-transaction-create.component.css']
})
export class LoanTransactionCreateComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      contact: ['']
    })      
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.createUser(this.userForm.value);
    this.router.navigate(['list-users']); 
   };
}
