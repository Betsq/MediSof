import { Component } from "@angular/core";
import * as SharedInformation from "../../../shared/shared-information.json";
import { SwiperOptions } from "swiper/types";

@Component({
    selector: 'our-location',
    templateUrl: 'our-location.component.html',
    styleUrls: ['our-location.component.scss']
})

export class OurLocationComponent{
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