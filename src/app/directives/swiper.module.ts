import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SwiperDirective } from "./swiper.directive";
import { LazyImgDirective } from "./lazy-image.directive";

@NgModule({
  declarations: [SwiperDirective, LazyImgDirective],
  imports: [CommonModule],
  exports: [SwiperDirective, LazyImgDirective]
})

export class DirectivesModule {}