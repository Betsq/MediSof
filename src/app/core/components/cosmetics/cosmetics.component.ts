import { Component } from "@angular/core";
import *  as cosmetics from "../../../../assets/data/cosmeticList.json";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'cosmetics',
    templateUrl: 'cosmetics.component.html',
    styleUrls: ['cosmetics.component.scss']
})

export class CosmeticsComponent{
    constructor(private titleService:Title) {
        this.titleService.setTitle("Косметика - MediSof");
    }

    cosmeticsList: any = cosmetics;

    expandCosmetics(panel: any, serviceCard: any, border: any) {

        if(panel.classList.contains("active")){
            panel.classList.remove("active");
            serviceCard.classList.remove("expanded");
            panel.style.maxHeight = 0;
            border.style.height = 0;
        }
        else{
            panel.classList.add("active");
            serviceCard.classList.add("expanded");
            panel.style.maxHeight = panel.scrollHeight + "px";
            border.style.height = 4 + "px";
        }
    }
}