import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {AboutModel} from "../about/models/about.model";
import {AboutService} from "../services/about.service";
import {EducationModel} from "../about/models/education.model";
import {ExperienceModel} from "../about/models/experience.model";
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
