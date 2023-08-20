import { Component } from "@angular/core";
import * as SharedInformation from "../../../shared/shared-information.json";

@Component({
    selector: 'contact-us-section',
    templateUrl: 'contact-us-section.component.html',
    styleUrls: ['contact-us-section.component.scss']
})

export class ContactUsSectionComponent{
    sharedInformation: any = SharedInformation;
}