import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/Forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BeerDataService } from './services/beer-data.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BeerListComponent,
    BreweryAboutComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BeerDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
