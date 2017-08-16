import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { user } from './user.model';

@Injectable()
export class AccountService {

    constructor(private http: Http) { }

    authenticate(userName: string, password: string) {
        let apiUrl = "/data/users.json"

        return this.http.get(apiUrl)
            .map((response: Response) => {
                const userList: user[] = <user[]>response.json();

                const filterList = userList.filter((user: user, index: number, list: user[]) => {
                    return (user.UserName.toLowerCase() === userName.toLowerCase());
                });

                const isAuthenticated = ((filterList.length === 1) &&
                    (filterList[0].UserName === userName) && (filterList[0].Password === password));

                if (isAuthenticated) {
                    localStorage.setItem("isAuthenticated", <any>isAuthenticated);
                    localStorage.setItem("userName", filterList[0].UserName);
                }

                return isAuthenticated;
            });
    }

    getUserName() {
        return localStorage.getItem("userName");
    }

    clearAccountInfo() {
        localStorage.clear();
    }
}