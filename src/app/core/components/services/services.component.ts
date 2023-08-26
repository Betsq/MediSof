import { Component } from "@angular/core";
import * as serviceData from "../../../../assets/data/ServicesList.json";
import { ServiceData } from "./services.model";

@Component({
    selector: 'services',
    templateUrl: 'services.component.html',
    styleUrls: ['services.component.scss']
})

export class ServicesComponent{

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
            serviceList.style.maxHeight = serviceList.scrollHeight + "px";
        }
    }
}