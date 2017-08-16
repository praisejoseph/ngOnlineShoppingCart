import { product } from '../product-list/product.model';
export interface user {
    Id: number;
    Name: string;
    UserName: string;
    Password: string;
    Admin: boolean;
    orders?: product[]
}