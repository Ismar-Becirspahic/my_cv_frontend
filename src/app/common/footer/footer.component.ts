import { Component, OnInit } from '@angular/core';
import {Route} from "../../routing/route";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public home = Route.EMPTY;

  constructor() { }

  ngOnInit(): void {
  }

}
