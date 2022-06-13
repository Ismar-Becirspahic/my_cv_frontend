import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {AboutModel} from "../about/models/about.model";
import {AboutService} from "../services/about.service";
import {EducationModel} from "../about/models/education.model";
import {EducationService} from "../services/education.service";


@Injectable({providedIn: 'root'})
export class Education_resolver implements Resolve<EducationModel[]> {

  constructor(private educationService: EducationService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<EducationModel[]> | Promise<EducationModel[]> | EducationModel[] {
    return this.educationService.getEducationInfo();
  }
}
