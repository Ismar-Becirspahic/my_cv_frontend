import { Component, OnInit } from '@angular/core';
import {AboutModel} from "../about/models/about.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AboutService} from "../services/about.service";
import {ActivatedRoute} from "@angular/router";
import {App_response} from "../routing/app_response";
import {EducationModel} from "../about/models/education.model";
import {EducationService} from "../services/education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  public educationModels: EducationModel[] = [];
  public form!: FormGroup;

  constructor(private educationService: EducationService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.educationModels = response[App_response.EDUCATION];
    });
  }
}
