import {Component, ViewChild } from "@angular/core"
import * as SharedInformation from "../../../shared/shared-information.json";
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter, withLatestFrom } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from "@angular/material/sidenav";


@Component({
    selector: 'sidebar-menu',
    templateUrl: 'sidebar-menu.component.html',
    styleUrls: ['sidebar-menu.component.scss']
})

export class SidebarMenuComponent{
    sharedInformation: any = SharedInformation;

    @ViewChild('drawer')
    drawer!: MatSidenav;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    router: Router) {
    router.events.pipe(
      withLatestFrom(this.isHandset$),
      filter(([a, b]) => b && a instanceof NavigationEnd)
    ).subscribe(_ => this.drawer.close());
  }
}