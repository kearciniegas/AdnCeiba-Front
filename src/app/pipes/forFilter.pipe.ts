import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'forFilter',
    pure: false
})
export class ForFilterPipe implements PipeTransform {
    transform(items: any[], filtro: any): any {
        if (!items || !filtro) {
            return items;
        }
        return items.filter(item => {
            let objeto = JSON.stringify(item).toUpperCase();
            filtro = filtro.toUpperCase();
            return objeto.indexOf(filtro) != -1;
        });
    }
}