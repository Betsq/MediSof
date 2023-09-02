import { Component } from "@angular/core";
@Component({
    selector: 'cosmetics',
    templateUrl: 'cosmetics.component.html',
    styleUrls: ['cosmetics.component.scss']
})

export class CosmeticsComponent{
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