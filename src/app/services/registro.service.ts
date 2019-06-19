import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../models/registro.model';

@Injectable({ providedIn: 'root' })
export class RegistroService {

    constructor(private http: HttpClient) {
    }

    registrarIngreso(registro: Registro): Observable<any> {
        return this.http.post('http://localhost:8080/registros/entrada', registro);
    }

    registrarSalida(idRegistro: number): Observable<any> {
        let registro: Registro = new Registro();
        return this.http.patch(`http://localhost:8080/registros/salida/${idRegistro}`, null);
    }

    listar(): Observable<any> {
        return this.http.get('http://localhost:8080/registros/lista');
    }
}