import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthenticationGuard } from './login/authentication-guard.service';

const appRoutes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "products",
        canActivate: [AuthenticationGuard],
        component: ProductListComponent
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "login",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: [AuthenticationGuard]
})
export class AppRoutingModule { }

