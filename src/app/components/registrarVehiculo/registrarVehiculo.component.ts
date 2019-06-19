
import { Component, ViewChild, Input } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Registro } from '../../models/registro.model';
import { AlertComponent } from '../alert/alert.component';
import { Constants } from 'src/app/utils/constants.util';

import * as $AB from 'jquery';
import * as bootstrap from "bootstrap";

@Component({
    selector: 'registrar-vehiculo',
    templateUrl: './registrarVehiculo.component.html',
    styleUrls: ['./registrarVehiculo.component.css']
})
export class RegistrarVehiculoComponent {
    mensajeError = null;
    tipo: String;
    registro: Registro = new Registro();
    @ViewChild(AlertComponent) alertComponent: AlertComponent;
    @Input() refrescar: Function;

    constructor(private registroService: RegistroService) { }

    registrarIngreso() {
        this.registro.placa = this.registro.placa.toUpperCase();
        this.registroService.registrarIngreso(this.registro).subscribe(
            data => {
                $('#' + Constants.ID_MODAL_REGISTRAR_INGRESO).modal('hide');
                this.alertComponent.showAlert(Constants.MENSAJE_REGISTRO_CON_EXITO);
                this.refrescar();
            },
            error => {
                console.error(error);
                if (error.error.message) {
                    this.mensajeError = error.error.message;
                } else {
                    this.mensajeError = Constants.MENSAJE_ERROR_DESCONOCIDO;
                }
            });
    }

    openModal(vehicleType: string) {
        this.mensajeError = null;
        this.reiniciarVehiculo(vehicleType);
        this.tipo = vehicleType;
        this.registro.vehicleType = vehicleType;
        $('#' + Constants.ID_MODAL_REGISTRAR_INGRESO).modal({ backdrop: 'static', keyboard: false });
    }

    reiniciarVehiculo(tipo: string) {
        this.registro = new Registro();
    }
}
