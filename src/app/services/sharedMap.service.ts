import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedMap {

    mapa = {};

    set(key: any, value: any): void {
        this.mapa[key] = value;
    }

    get(key: any): any {
        return this.mapa[key];
    }

    reset(): void {
        this.mapa = {};
    }

}