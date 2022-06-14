import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AboutModel} from "../../models/about.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AboutService} from "../../services/about.service";
import {App_response} from "../../routing/app_response";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public abouts : AboutModel[] = [];
  public form!: FormGroup;

  constructor(private aboutService: AboutService, private activatedRoute : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.abouts = response[App_response.ABOUT];
    });
  }

}
