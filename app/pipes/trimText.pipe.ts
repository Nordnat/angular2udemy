import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'trimText',
})


export class TrimPipe implements PipeTransform {
    transform(value: string, args: string[]) {
        if (value) {
            return value.substring(0, 50) + "...";
        }
    }
}