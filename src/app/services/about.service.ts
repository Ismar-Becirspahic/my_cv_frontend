import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AboutModel} from "../about/models/about.model";

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private readonly aboutUrl: string = `${environment.backendUrl}/about`;
  constructor(
    private http: HttpClient,
  ) {
  }
  public getAboutInfo():Observable<AboutModel[]> {
    return this.http.get<AboutModel[]>(`${this.aboutUrl}`);
  }

  public getOneAboutInfo(id:string):Observable<AboutModel> {
    return this.http.get<AboutModel>(`${this.aboutUrl}/${id}`);  }

  public addAboutInfo(project:AboutModel):Observable<AboutModel> {
    return this.http.post<AboutModel>(`${this.aboutUrl}`, project);
  }

  public editAboutInfo(project:AboutModel, id:string):Observable<AboutModel> {
    return this.http.put<AboutModel>(`${this.aboutUrl}/${id}`,project);
  }

  public deleteAboutInfo(id:string):Observable<AboutModel> {
    return this.http.delete<AboutModel>(`${this.aboutUrl}/${id}`);
  }
}
