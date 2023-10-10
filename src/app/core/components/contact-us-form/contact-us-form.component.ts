import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, catchError, map, throwError } from "rxjs";

@Component({
    selector: 'contact-us-form',
    templateUrl: 'contact-us-form.component.html',
    styleUrls: ['contact-us-form.component.scss']
})

export class ContactUsFormComponent{

    constructor(private _httpClient: HttpClient, private _snackBar: MatSnackBar){

    }
    
    phoneNumber: any;
    sendingRequest: boolean = false;
    messageError: string = "Нажаль сталась помилка, зателефонуйте нам або спробуйте пізніше! Дякуємо за розуміння"

    sendEmail(){
        if(this.sendingRequest == true)
            return;

        this.sendingRequest = true;

        this._httpClient.post<HttpResponse<any>>(`https://medi-sof-be-0da09cf2a71b.herokuapp.com/Email/send/contact-us/${this.phoneNumber}`, "")
            .pipe(map((data:any) => {
                this.sendingRequest = false;
            }),
            catchError((error: any) => {
                this._snackBar.open(this.messageError, "Закрити", {
                    panelClass: ['mat-toolbar', 'mat-primary']
                });
                this.sendingRequest = false;
                return error;
            })).subscribe(res => {

            });
      }
}