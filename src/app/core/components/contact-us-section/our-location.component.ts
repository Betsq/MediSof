import { Component } from "@angular/core";
import * as SharedInformation from "../../../shared/shared-information.json";

@Component({
    selector: 'our-location',
    templateUrl: 'our-location.component.html',
    styleUrls: ['our-location.component.scss']
})

export class OurLocationComponent{
    sharedInformation: any = SharedInformation;

}