import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SkillsModel} from "../about/models/skills.model";

@Injectable({
  providedIn: 'root'
})
export class SkillsService{
  private readonly aboutUrl: string = `${environment.backendUrl}/skills`;
  constructor(
    private http: HttpClient,
  ) {
  }
  public getSkillsInfo():Observable<SkillsModel[]> {
    return this.http.get<SkillsModel[]>(`${this.aboutUrl}`);
  }
}
