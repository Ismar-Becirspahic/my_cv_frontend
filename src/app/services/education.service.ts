import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LanguagesModel} from "../about/models/languages.model";
import {ExperienceModel} from "../about/models/experience.model";
import {EducationModel} from "../about/models/education.model";

@Injectable({
  providedIn: 'root'
})
export class EducationService{
  private readonly aboutUrl: string = `${environment.backendUrl}/education`;
  constructor(
    private http: HttpClient,
  ) {
  }
  public getEducationInfo():Observable<EducationModel[]> {
    return this.http.get<EducationModel[]>(`${this.aboutUrl}`);
  }
}
