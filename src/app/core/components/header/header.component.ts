import { Component } from "@angular/core";
import * as SharedInformation from "../../../shared/shared-information.json";

@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent {
    sharedInformation: any = SharedInformation;
}