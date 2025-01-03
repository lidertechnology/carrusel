import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

// import function to register Swiper custom elements de https://swiperjs.com/element OJO
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


// 1 Creamos la Interface
export interface BannerInterface {
  id: string;   
  url: string;      //Url de cloudinary.
  alt: string;      // texto alternativo para seo.
  seccion: string;  // Sección para filtrado de banners en los carruseles.
}

@Component({
  selector: 'app-carrusel',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Este lo llamamos para integrar swiper JS para las Galerias y banners.
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {

  //Agregamos la funcion input para datoos de entrada en cada carrusel.
  @Input() conector: BannerInterface[] = [];

}
