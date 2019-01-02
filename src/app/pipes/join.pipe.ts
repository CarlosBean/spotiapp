import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: string, caracter: string = '', lastItem: boolean = false): any {

    return lastItem ? value.concat('. ') : value.concat(', ');

  }
}
