import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(images: any[]): any {

    const NO_IMAGE = 'assets/img/noimage.png';

    if (!images) {
      return NO_IMAGE;
    }

    return images.length > 0 ? images[0].url : NO_IMAGE;
  }

}
