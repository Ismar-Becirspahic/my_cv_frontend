import {HomeComponent} from "./common/home/home.component";
import {AboutComponent} from "./common/about/about.component";
import {EducationComponent} from "./common/education/education.component";
import {ExperienceComponent} from "./common/experience/experience.component";
import {LanguagesComponent} from "./common/languages/languages.component";
import {HobbiesComponent} from "./common/hobbies/hobbies.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {Route} from "./routing/route";
import {PageInvalidComponent} from "./common/page-invalid/page-invalid.component";
import {SkillsComponent} from "./common/skills/skills.component";
import {About_resolver} from "./resolvers/about_resolver";
import {App_response} from "./routing/app_response";
import {Languages_resolver} from "./resolvers/languages_resolver";
import {Education_resolver} from "./resolvers/education_resolver";
import {Experience_resolver} from "./resolvers/experience_resolver";
import {Hobbies_resolver} from "./resolvers/hobbies_resolver";
import {Skills_resolver} from "./resolvers/skills_resolver";

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
        component: EducationComponent,
    resolve:{
      [App_response.EDUCATION]: Education_resolver,
    },
  },
  { path: Route.EXPERIENCE,
        component: ExperienceComponent,
    resolve:{
      [App_response.EXPERIENCE]: Experience_resolver,
    },
  },
  { path: Route.LANGUAGES,
        component: LanguagesComponent,
  resolve:{
    [App_response.LANGUAGES]:Languages_resolver,
  }
  },
  { path: Route.HOBBIES,
        component: HobbiesComponent,
    resolve:{
      [App_response.HOBBIES]: Hobbies_resolver,
    },
  },
  { path: Route.SKILLS,
        component: SkillsComponent,
    resolve:{
      [App_response.SKILLS]: Skills_resolver,
    },
  },
  { path: '**',
    component: PageInvalidComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash:true}
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
