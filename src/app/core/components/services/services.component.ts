import { Component } from "@angular/core";
import * as serviceData from "../../../../assets/data/ServicesList.json";
import * as promotionServicecData from "../../../../assets/data/promotionServiceList.json";
import { Title } from "@angular/platform-browser";


@Component({
    selector: 'services',
    templateUrl: 'services.component.html',
    styleUrls: ['services.component.scss']
})

export class ServicesComponent{

    constructor(private titleService:Title) {
        this.titleService.setTitle("Послуги - MediSof");
    }
    
    listPromotionServicesData: any = promotionServicecData;
    listServiceData: any = serviceData;
    panelOpenState = false;

    expandListService(serviceList: any, serviceCard: any) {

        if(serviceList.classList.contains("active")){
            serviceList.classList.remove("active");
            serviceCard.classList.remove("expanded");
            serviceList.style.maxHeight = 0;
        }
        else{
            serviceList.classList.add("active");
            serviceCard.classList.add("expanded");
            serviceList.style.maxHeight = (serviceList.scrollHeight + 100) + "px";
        }
    }
}