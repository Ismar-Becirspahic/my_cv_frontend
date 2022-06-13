import { Component, OnInit } from '@angular/core';
import {Route} from "../routing/route";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public languages = Route.LANGUAGES;
  public hobbies = Route.HOBBIES;
  public education = Route.EDUCATION;
  public experience = Route.EXPERIENCE;
  public skills = Route.SKILLS;
  public about = Route.ABOUT;
  public home = Route.EMPTY;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor() { }

  ngOnInit(): void {
  }

}
