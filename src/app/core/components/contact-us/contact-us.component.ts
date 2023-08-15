import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Renderer2 } from '@angular/core'
import { ContactUsModel } from './models/contact-us-model';
import { SendMessageModel } from './models/viber-send-message-model';


@Component({
    selector: 'contact-us-form',
    templateUrl: "contact-us-form.component.html",
    styleUrls: ["contact-us-form.component.scss"]
})

export class ContactUsFormComponent{
    constructor(private renderer: Renderer2, private http: HttpClient) { }
    
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