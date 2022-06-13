import { Component, OnInit } from '@angular/core';
import {AboutModel} from "../about/models/about.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AboutService} from "../services/about.service";
import {ActivatedRoute} from "@angular/router";
import {App_response} from "../routing/app_response";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent{

}
