import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {AboutModel} from "../models/about.model";
import {AboutService} from "../services/about.service";
import {EducationModel} from "../models/education.model";
import {SkillsModel} from "../models/skills.model";
import {SkillsService} from "../services/skills.service";


@Injectable({providedIn: 'root'})
export class Skills_resolver implements Resolve<SkillsModel[]> {

  constructor(private skillsService: SkillsService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<SkillsModel[]> | Promise<SkillsModel[]> | SkillsModel[] {
    return this.skillsService.getSkillsInfo();
  }
}
