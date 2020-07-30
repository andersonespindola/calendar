import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import BR from '@angular/common/locales/br';

registerLocaleData(BR, 'pt-BR');

@Pipe({
    name: 'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return super.transform(value, "dd/MM/yyyy h:mm a", "UTC", "pt-BR");
    }
}
