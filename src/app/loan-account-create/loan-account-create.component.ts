import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-loan-account-create',
  templateUrl: './loan-account-create.component.html',
  styleUrls: ['./loan-account-create.component.css']
})
export class LoanAccountCreateComponent implements OnInit {

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
