import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';
import { CompaniesComponent } from './companies/companies.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { HomeComponent } from './home/home.component';
import { MyFilterPipe } from 'app/pipefilter';


@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    TechnologiesComponent,
    HomeComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
