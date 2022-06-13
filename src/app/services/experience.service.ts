import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ExperienceModel} from "../about/models/experience.model";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService{
  private readonly aboutUrl: string = `${environment.backendUrl}/experience`;
  constructor(
    private http: HttpClient,
  ) {
  }
  public getExperienceInfo():Observable<ExperienceModel[]> {
    return this.http.get<ExperienceModel[]>(`${this.aboutUrl}`);
  }
}
