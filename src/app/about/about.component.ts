import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AboutModel} from "./models/about.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AboutService} from "../services/about.service";
import {App_response} from "../routing/app_response";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public abouts : AboutModel[] = [];
  public form!: FormGroup;
  public aboutx : AboutModel | undefined;

  constructor(private aboutService: AboutService, private activatedRoute : ActivatedRoute, private formBuilder : FormBuilder) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.abouts = response[App_response.ABOUT];
    });
    this.form = this.formBuilder.group({
      first_name: [this.aboutx?.first_name || '', Validators.required],
      email: [this.aboutx?.email || '', [Validators.required,Validators.email]],
      numberOfProjectsCompleted: [this.aboutx?.numberOfProjectsCompleted || '', Validators.required],
      yearsOfExperience: [this.aboutx?.yearsOfExperience || '', Validators.required],
      last_name: [this.aboutx?.last_name || '', Validators.required],
      description: [this.aboutx?.description || '', Validators.required],

    });
  }
  submit(id: string): void {
    const user: AboutModel = this.form.value;
    this.aboutService.editAboutInfo(user,id).subscribe(value =>{
      this.aboutx = user;
    });
  }

}
