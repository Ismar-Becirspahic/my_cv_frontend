import { Component, OnInit } from '@angular/core';
import {EducationModel} from "../../models/education.model";
import {FormGroup} from "@angular/forms";
import {AboutService} from "../../services/about.service";
import {ActivatedRoute} from "@angular/router";
import {App_response} from "../../routing/app_response";
import {ExperienceModel} from "../../models/experience.model";
import {ExperienceService} from "../../services/experience.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public experienceModels: ExperienceModel[] = [];
  public form!: FormGroup;

  constructor(private experienceService: ExperienceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.experienceModels = response[App_response.EXPERIENCE];
    });
  }

}
