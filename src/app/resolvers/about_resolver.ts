import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from 'rxjs';
import {AboutModel} from "../about/models/about.model";
import {AboutService} from "../services/about.service";


@Injectable({providedIn: 'root'})
export class About_resolver implements Resolve<AboutModel[]> {

  constructor(private userService: AboutService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<AboutModel[]> | Promise<AboutModel[]> | AboutModel[] {
    return this.userService.getAboutInfo();
  }
}
