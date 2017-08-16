import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { AccountService } from "./account.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(
        private router: Router,
        private accountService: AccountService
    ) { }

    canActivate(): boolean {
        let authenticated = localStorage.getItem("isAuthenticated");

        if (!authenticated) {

            // redirect to login page
            this.router.navigate(["/login"]);
            // abort current navigation
            return false;
        }
        return true;
    }
}