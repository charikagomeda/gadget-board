import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt';

import { Account } from './account';
import { AccountService } from './account.service';

@Component({
    selector: 'account-create',
    templateUrl: './account-create.component.html',
})

export class AccountCreateComponent {

    errorMessages: any[];
    newAccount: Account;
    formIsActive = true; // temporary workaround for angular2 to reset form

    constructor(
        private accountService: AccountService,
        private router: Router) {
        this.newAccount = new Account();
    }

    createAccount () {
        if (!this.newAccount.username) { return; }
        if (!this.newAccount.password) { return; }
        if (!this.newAccount.email) { return; }
        this.accountService.createAccount(
            this.newAccount.username,
            this.newAccount.password,
            this.newAccount.email)
            .subscribe(
                account  => {
                    this.router.navigate(['/accounts', account.username ]);
                    this.formIsActive = false;  // temporary workaround for angular2 to reset form
                    setTimeout(()=> this.formIsActive=true, 0);  // temporary workaround for angular2 to reset form
                },
                errors => this.errorMessages = <any[]>errors);
    }

}