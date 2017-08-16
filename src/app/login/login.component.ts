import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from './account.service';
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";

@Component({
    selector: 'store-login',
    styleUrls: ['login.component.css'],
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    userName: string;
    password: string;
    authenticationSub: Subscription;
    invalidAuthentication: boolean = false;

    constructor(
        private accountService: AccountService,
        private router: Router
    ) { }

    ngOnInit() { }

    onSubmit() {
        this.invalidAuthentication = false;
        this.authenticationSub = this.accountService.authenticate(this.userName, this.password)
            .subscribe((isAuthenticated) => {
                if (isAuthenticated) {
                    this.router.navigate(["/products"]);
                } else {
                    this.invalidAuthentication = true;
                }
            });
    }

    ngOnDestroy() {
        if (this.authenticationSub) {
            this.authenticationSub.unsubscribe();
        }
    }

}