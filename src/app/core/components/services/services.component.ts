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

    expandListService(serviceList: any, serviceCard: any) {
        serviceList.style.display = serviceList.style.display == "block" ? "none" : "block";

        serviceList.classList.contains("active") ? serviceList.classList.remove("active") : serviceList.classList.add("active");
        serviceCard.classList.contains("expanded") ? serviceCard.classList.remove("expanded") : serviceCard.classList.add("expanded");
    }
}