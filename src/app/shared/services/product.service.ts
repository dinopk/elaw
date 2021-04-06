import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ProductService {
    public product = new BehaviorSubject<any>(null);
    public products = this.product.asObservable();
    public productList: Array<object> = [];

    public setProducts(value): void {
        this.productList.push(value);
        this.product.next(this.productList);
    }

    public deleteProducts(value): void {
        this.productList = this.productList.filter(item => item != value);
        console.log(this.productList);
        this.product.next(this.productList);
      }
}