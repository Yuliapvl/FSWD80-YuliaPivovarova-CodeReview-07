import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { NavbarComponent } from './navbar/navbar.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { TravelpageComponent } from './travelpage/travelpage.component';
import { FooterComponent } from './footer/footer.component';
import { TravelsectionService } from "./shared/travelsection.service";
import { TravelListComponent } from './travel-list/travel-list.component';


@NgModule({
declarations: [
AppComponent,
NavbarComponent,
HerosectionComponent,
HomepageComponent,
BlogpageComponent,
TravelpageComponent,
FooterComponent,
TravelListComponent
],

imports: [
BrowserModule,
AppRoutingModule,
ReactiveFormsModule,
AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
AngularFireDatabaseModule, // we will import the classes here too
FormsModule
],

providers: [TravelsectionService],
bootstrap: [AppComponent]
})
export class AppModule { }


