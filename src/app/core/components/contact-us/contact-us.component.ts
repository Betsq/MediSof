import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Renderer2 } from '@angular/core'
import { ContactUsModel } from './models/contact-us-model';
import { SendMessageModel } from './models/viber-send-message-model';
import * as SharedInformation from "../../../shared/shared-information.json";

@Component({
    selector: 'contact-us',
    templateUrl: "contact-us.component.html",
    styleUrls: ["contact-us.component.scss"]
})

export class ContactUsComponent{
    constructor(private renderer: Renderer2, private http: HttpClient) { }
    
    sharedInforamtion: any = SharedInformation;

    contactForm: ContactUsModel = new ContactUsModel();
    rippleColor: string = "grey";

    closePopUp(){
        const componentElement = document.querySelector('contact-us');

        if(componentElement ){
            this.renderer.setStyle(componentElement, 'display', 'none');
        }
    }

    sendReqeust(){

        const header = new HttpHeaders()
        .set("Content-Type", "application/json");

        let s = new SendMessageModel(this.contactForm.message);

        console.log(s.text);

        this.http.post('https://localhost:7277/api/WeatherForecast', s, {
            headers: header
        }).subscribe();
    }
}