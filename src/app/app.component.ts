import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsPopUpComponent } from './core/components/contact-us-pop-up/contact-us-pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  title = 'Medi Sof';

  openPopUp(){
    const dialogRef = this.dialog.open(ContactUsPopUpComponent);

    dialogRef.afterClosed().subscribe();
  }
}
