import { Component } from '@angular/core';
import {Route} from "../../routing/route";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  public languages = Route.LANGUAGES;
  public hobbies = Route.HOBBIES;
  public education = Route.EDUCATION;
  public experience = Route.EXPERIENCE;
  public skills = Route.SKILLS;
  public about = Route.ABOUT;
  public home = Route.EMPTY;


  constructor() { }


}
