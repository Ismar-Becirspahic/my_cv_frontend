import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {EducationComponent} from "./education/education.component";
import {ExperienceComponent} from "./experience/experience.component";
import {LanguagesComponent} from "./languages/languages.component";
import {HobbiesComponent} from "./hobbies/hobbies.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {Route} from "./routing/route";
import {PageInvalidComponent} from "./page-invalid/page-invalid.component";
import {SkillsComponent} from "./skills/skills.component";
import {About_resolver} from "./resolvers/about_resolver";
import {App_response} from "./routing/app_response";

const routes: Routes = [

  { path: Route.EMPTY,
    component: HomeComponent },
  { path: Route.ABOUT,
        component: AboutComponent,
        resolve:{
        [App_response.ABOUT]: About_resolver,
        },
  },
  { path: Route.EDUCATION,
        component: EducationComponent },
  { path: Route.EXPERIENCE,
        component: ExperienceComponent},
  { path: Route.LANGUAGES,
        component: LanguagesComponent},
  { path: Route.HOBBIES,
        component: HobbiesComponent},
  { path: Route.SKILLS,
        component: SkillsComponent},
  { path: '**',
    component: PageInvalidComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
