import { Component, OnInit } from '@angular/core';
import {ExperienceModel} from "../about/models/experience.model";
import {FormGroup} from "@angular/forms";
import {ExperienceService} from "../services/experience.service";
import {ActivatedRoute} from "@angular/router";
import {App_response} from "../routing/app_response";
import {HobbiesModel} from "../about/models/hobbies.model";
import {HobbiesService} from "../services/hobbies.service";

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  public hobbiesModels: HobbiesModel[] = [];
  public form!: FormGroup;

  constructor(private hobbiesService: HobbiesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.hobbiesModels = response[App_response.HOBBIES];
    });
  }

}
