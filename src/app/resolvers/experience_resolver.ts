import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {AboutModel} from "../models/about.model";
import {AboutService} from "../services/about.service";
import {EducationModel} from "../models/education.model";
import {ExperienceModel} from "../models/experience.model";
import {ExperienceService} from "../services/experience.service";


@Injectable({providedIn: 'root'})
export class Experience_resolver implements Resolve<ExperienceModel[]> {

  constructor(private experienceService: ExperienceService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<ExperienceModel[]> | Promise<ExperienceModel[]> | ExperienceModel[] {
    return this.experienceService.getExperienceInfo();
  }
}
