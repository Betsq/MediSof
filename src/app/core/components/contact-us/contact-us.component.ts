import { Component, Renderer2 } from '@angular/core'
import * as SharedInformation from "../../../shared/shared-information.json";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'contact-us',
    templateUrl: "contact-us.component.html",
    styleUrls: ["contact-us.component.scss"]
})

export class ContactUsComponent{
   
    constructor(private titleService:Title) {
        this.titleService.setTitle("Контакти - MediSof");
    }
    
    sharedInforamtion: any = SharedInformation;

}