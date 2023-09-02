import { Component, Renderer2 } from '@angular/core'
import * as SharedInformation from "../../../shared/shared-information.json";

@Component({
    selector: 'contact-us',
    templateUrl: "contact-us.component.html",
    styleUrls: ["contact-us.component.scss"]
})

export class ContactUsComponent{
   
    sharedInforamtion: any = SharedInformation;

}