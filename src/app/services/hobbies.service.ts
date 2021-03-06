import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LanguagesModel} from "../models/languages.model";
import {ExperienceModel} from "../models/experience.model";
import {HobbiesModel} from "../models/hobbies.model";

@Injectable({
  providedIn: 'root'
})
export class HobbiesService{
  private readonly aboutUrl: string = `${environment.backendUrl}/hobbies`;
  constructor(
    private http: HttpClient,
  ) {
  }
  public getHobbiesInfo():Observable<HobbiesModel[]> {
    return this.http.get<HobbiesModel[]>(`${this.aboutUrl}`);
  }
}
