import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {App_response} from "../routing/app_response";
import {SkillsModel} from "../about/models/skills.model";
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skillsModels: SkillsModel[] = [];
  public form!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.skillsModels = response[App_response.SKILLS];
    });
  }

}
