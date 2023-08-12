import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private renderer: Renderer2){

  }
  title = 'Medi Sof';

  openContactUsForm(){        
    const componentElement = document.querySelector('contact-us-copy');

    if(componentElement ){
      this.renderer.setStyle(componentElement, 'display', 'block');
    }
  }
}
