import { Component, Input } from "@angular/core";

@Component({
    selector: 'social-media-icons',
    templateUrl: 'social-media-icons.component.html',
    styleUrls: ['social-media-icons.component.scss'],
 
})

export class SocialMediaIconsComponent{
    @Input() size = 50;
}
