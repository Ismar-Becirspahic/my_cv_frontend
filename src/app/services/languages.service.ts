import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LanguagesModel} from "../models/languages.model";

@Injectable({
  providedIn: 'root'
})
export class LanguagesService{
  private readonly aboutUrl: string = `${environment.backendUrl}/languages`;
  constructor(
    private http: HttpClient,
  ) {
  }
  public getLanguagesInfo():Observable<LanguagesModel[]> {
    return this.http.get<LanguagesModel[]>(`${this.aboutUrl}`);
  }
}
