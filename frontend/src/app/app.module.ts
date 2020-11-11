import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import {DropdownModule} from 'primeng/dropdown';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './shared/dashboard-header/dashboard-header.component';
import { CreateMalComponent } from './mal/create-mal/create-mal.component';
import {CalendarModule} from "primeng/calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSliderModule} from "@angular/material/slider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import { CreateMmlComponent } from './mml/create-mml/create-mml.component';
import { UpdateMalComponent } from './mal/update-mal/update-mal.component';
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {RadioButtonModule} from "primeng/radiobutton";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    CreateMalComponent,
    CreateMmlComponent,
    UpdateMalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    TableModule,
    DialogModule,
    RadioButtonModule,
    ConfirmDialogModule,
    ToastModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
