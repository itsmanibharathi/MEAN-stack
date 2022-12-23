import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyserveService } from './myserve.service';
import { HttpClientModule } from '@angular/common/http';
import { NaveComponent } from './nave/nave.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddproductComponent,
    NaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MyserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
