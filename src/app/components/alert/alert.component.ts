import { Component, OnInit } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

    mensaje: string;

    constructor() { }

    ngOnInit(): void { }

    showAlert(mensaje: string) {
        this.mensaje = mensaje;
        setTimeout(() => {
            this.mensaje = null;
        }, 6000);
    };
}
