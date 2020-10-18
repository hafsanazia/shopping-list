import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatInputModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './search.pipe';
import { SharedService } from './service/shared.service';
import { MatButtonModule } from '@angular/material/button';

const appRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "cart", component: CartComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    SearchPipe,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
