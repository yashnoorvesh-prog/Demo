import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ViewComponent } from './view/view.component';
import { TestingComponent } from './testing/testing.component';
import { HttpModule } from '@angular/http';
import { View1Component } from './view1/view1.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    TestingComponent,
    View1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
