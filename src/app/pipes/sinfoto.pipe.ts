import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[]): any {

    const NO_IMAGE = 'assets/img/noimage.png';

    if (!imagenes) {
      return NO_IMAGE;
    }

    return ( imagenes.length > 0 ) ? imagenes[1].url : NO_IMAGE;
  }

}
