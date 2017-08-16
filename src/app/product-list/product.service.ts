import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { product } from './product.model';

@Injectable()
export class ProductService {
    constructor(private http: Http) { }

    getProductList(): Observable<product[]> {
        return this.http.get("/data/products.json")
            .map((response: Response) => {
                return <product[]>response.json();
            })
    }

}