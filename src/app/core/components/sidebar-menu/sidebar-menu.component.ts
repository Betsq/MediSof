import {Component } from "@angular/core"
import * as SharedInformation from "../../../shared/shared-information.json";

@Component({
    selector: 'sidebar-menu',
    templateUrl: 'sidebar-menu.component.html',
    styleUrls: ['sidebar-menu.component.scss']
})

export class SidebarMenuComponent{
    sharedInformation: any = SharedInformation;
}