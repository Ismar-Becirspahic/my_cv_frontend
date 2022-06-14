import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from "@angular/material/select";
import { HomeComponent } from './common/home/home.component';
import {MatCardModule} from "@angular/material/card";
import { FooterComponent } from './common/footer/footer.component';
import { AboutComponent } from './common/about/about.component';
import { LanguagesComponent } from './common/languages/languages.component';
import { EducationComponent } from './common/education/education.component';
import { ExperienceComponent } from './common/experience/experience.component';
import { SkillsComponent } from './common/skills/skills.component';
import { HobbiesComponent } from './common/hobbies/hobbies.component';
import { PageInvalidComponent } from './common/page-invalid/page-invalid.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {AboutService} from "./services/about.service";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    LanguagesComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    HobbiesComponent,
    PageInvalidComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
  ],
  providers: [ AboutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
