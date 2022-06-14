import { Component, OnInit } from '@angular/core';
import {App_response} from "../../routing/app_response";
import {AboutModel} from "../../models/about.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AboutService} from "../../services/about.service";
import {ActivatedRoute} from "@angular/router";
import {LanguagesModel} from "../../models/languages.model";
import {LanguagesService} from "../../services/languages.service";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  public languages: LanguagesModel[] = [];

  constructor(private aboutService: LanguagesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.languages = response[App_response.LANGUAGES];
    });

  }
}



