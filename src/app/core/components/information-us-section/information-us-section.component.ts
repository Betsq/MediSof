import { Component } from "@angular/core";
import * as SharedInformation from "../../../shared/shared-information.json";
import { SwiperOptions } from "swiper/types";

@Component({
    selector: 'information-us-section',
    templateUrl: 'information-us-section.component.html',
    styleUrls: ['information-us-section.component.scss']
})

export class InformationUsSectionComponent{
    sharedInformation: any = SharedInformation;

    public config: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 25,
        navigation: true,
        loop: true,
        scrollbar: {
          el: '.swiper-scrollbar',
          enabled: true,
          draggable: true
        }
      }
}