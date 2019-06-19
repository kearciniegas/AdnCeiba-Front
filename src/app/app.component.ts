import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistroService } from './services/registro.service';
import { RegistrarVehiculoComponent } from './components/registrarVehiculo/registrarVehiculo.component';
import { TotalPagoComponent } from './components/totalPago/totalPago.component';
import { Constants } from './utils/constants.util';
import {Registro} from './models/registro.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    @ViewChild(RegistrarVehiculoComponent) registrarVehiculo: RegistrarVehiculoComponent;
    @ViewChild(TotalPagoComponent) totalPago: TotalPagoComponent;
    registros: Array<any>;
    numeroMotos: number;
    numeroCarros: number;
    textFiltro: string;

    constructor( private registroService: RegistroService) { }

    ngOnInit() {
        this.listarVehiculos();
    }


    get listarVehiculosFunc() {
        return this.listarVehiculos.bind(this);
    }

    listarVehiculos() {
        this.registroService.listar().subscribe(data => {
            this.registros = data;
            this.registros = this.registros.filter(c => c.fechaSalida === null);
            this.contarVehiculos(data);
        });
    }

    contarVehiculos(registro: Array<any>) {
        this.numeroCarros = 0;
        this.numeroMotos = 0;
        registro.forEach((element) => {
// tslint:disable-next-line: triple-equals
            if (element.vehicleType == Constants.TIPO_VEHICULO_CARRO) {
                this.numeroCarros++;
            } else {
                this.numeroMotos++;
            }
        });
    }

    registrarIngreso(vehicleType: string) {
        this.registrarVehiculo.openModal(vehicleType);
    }

    registrarSalida(id: number) {
        this.registroService.registrarSalida(id).subscribe(data => {
            this.totalPago.mostrarPago(data);
            this.listarVehiculos();
        });
    }
}
