import { Component } from "@angular/core";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent {
    constructor(private titleService:Title) {
        this.titleService.setTitle("Головна сторінка - MediSof");
    }
}