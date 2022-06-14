import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {AboutModel} from "../models/about.model";
import {AboutService} from "../services/about.service";
import {EducationModel} from "../models/education.model";
import {HobbiesModel} from "../models/hobbies.model";
import {HobbiesService} from "../services/hobbies.service";


@Injectable({providedIn: 'root'})
export class Hobbies_resolver implements Resolve<HobbiesModel[]> {

  constructor(private hobbiesService: HobbiesService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<HobbiesModel[]> | Promise<HobbiesModel[]> | HobbiesModel[] {
    return this.hobbiesService.getHobbiesInfo();
  }
}
