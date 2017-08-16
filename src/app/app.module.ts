import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AccountService } from "./login/account.service";
import { ProductListComponent } from './product-list/product-list.component';
import { HttpModule } from '@angular/http';
import { ProductService } from './product-list/product.service';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent
  ],
  providers: [
    AccountService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
