import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AboutModel} from "../models/about.model";

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

}
