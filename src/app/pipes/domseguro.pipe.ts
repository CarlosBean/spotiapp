import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string): any {
    const url = environment.audio_url;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
