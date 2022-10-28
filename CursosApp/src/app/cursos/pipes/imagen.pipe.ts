import { Pipe, PipeTransform } from '@angular/core';
import { Gsuite } from '../pages/curso/interfaces/gsuite.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(curso: Gsuite): string {
    
    if(!curso.id && !curso.alt_img ){
      return 'assets/no-image.png';
    } else if ( curso.alt_img) {
      return curso.alt_img;
    } else{

      return `assets/cursos/${curso.id}.jpg`;
      
    }

  }

}
