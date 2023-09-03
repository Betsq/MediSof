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
        autoplay: true,
        pagination: true,
        keyboard: true,
        injectStyles: [
            `.swiper-button-next,
            .swiper-button-prev {
              color: #388E3C;
            }
            .swiper-pagination-bullet-active{
                background: #388E3C;
            }`
        ]
      }
}