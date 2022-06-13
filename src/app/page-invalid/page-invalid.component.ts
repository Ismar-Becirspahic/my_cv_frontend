import { Component, OnInit } from '@angular/core';
import {Route} from "../routing/route";

@Component({
  selector: 'app-page-invalid',
  templateUrl: './page-invalid.component.html',
  styleUrls: ['./page-invalid.component.css']
})
export class PageInvalidComponent implements OnInit {
  public home = Route.EMPTY;
  constructor() { }

  ngOnInit(): void {
  }

}
