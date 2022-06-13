import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {LanguagesModel} from "../about/models/languages.model";
import {LanguagesService} from "../services/languages.service";


@Injectable({providedIn: 'root'})
export class Languages_resolver implements Resolve<LanguagesModel[]> {

  constructor(private languagesService: LanguagesService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<LanguagesModel[]> | Promise<LanguagesModel[]> | LanguagesModel[] {
    return this.languagesService.getLanguagesInfo();
  }
}
