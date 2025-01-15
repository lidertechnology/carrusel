import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

//1. Importacion y funcion para utilizar swiperjs como elemntos web.
import { register } from 'swiper/element/bundle';
register();

// 2. Importación de la Interface para los banners.
import { BannerInterface } from '../../interfaces/banner-interface';


@Component({
  selector: 'app-carrusel',
  imports: [],
  // 3. Usamos schemas para integrar elemntos que no son nativos de angular.
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {

  // 4. Agregamos la funcion input para datos de entrada en cada carrusel.
  @Input() conector: BannerInterface[] = [];

}
