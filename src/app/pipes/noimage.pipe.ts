import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: string ): string {
    
    if( images == null ) return 'assets/user/noimage.png';
    else return images;
  }

}
