import { Component, OnInit, OnDestroy } from '@angular/core';
import { product } from './product.model';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs/Subscription';
import { AccountService } from '../login/account.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit, OnDestroy {
    private productSub: Subscription;

    userName: string;
    orderList: product[] = [];
    products: product[];

    constructor(
        private accountService: AccountService,
        private productService: ProductService,
        private router: Router
    ) { }

    ngOnInit() {
        this.userName = this.accountService.getUserName();

        this.productSub = this.productService.getProductList().subscribe((products: product[]) => {
            this.products = products;
        })

    }

    buy(product: product) {
        this.orderList.push(product);
    }

    onLogout() {
        this.accountService.clearAccountInfo();
        this.router.navigate(["/login"]);
    }

    ngOnDestroy() {
        this.productSub.unsubscribe();
    }
}