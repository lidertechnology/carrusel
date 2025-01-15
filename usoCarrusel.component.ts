// Angular Core
import { Component, ChangeDetectionStrategy, ViewEncapsulation, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';

// Componentes externos
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';


//Firebase
import { collection, onSnapshot, query, Unsubscribe, where } from 'firebase/firestore';



//Material
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';

// Interfaces
import { BannerInterface } from '../../interfaces/banner-interface';

// Servicios Propios de Firebase.
import { GetService } from '../../firebase/get.service';
import { CarruselInterface } from '../../interfaces/carrusel-interface';



@Component({
    selector: 'app-tienda',
    imports: [
        HeaderComponent, 
        FooterComponent,
        MatButtonModule, 
        MatIconModule, 
        MatTabsModule, 
        MatDividerModule, 
        ScrollingModule, 
        MatChipsModule,
        CommonModule,
        CarruselComponent
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tienda.component.html',
    styleUrl: './tienda.component.css'
})
export class TiendaComponent implements OnInit, OnDestroy {

    // Estas colecciones refieren a la función @swich
    coleccion: any;
    lamys = [] = [];
    parkers = [] = [];
    pillots = [] = [];
  


// 1. Llamo el servicio get que tiene la instancia de Firestore incluida
private db = inject(GetService); 

// 2. Signals para los banners de cada categoria por separado.
bannersEscritura = signal<CarruselInterface[]>([]);
bannersTecnologia = signal<CarruselInterface[]>([]);
bannersAgendas = signal<CarruselInterface[]>([]);
bannersOficina = signal<CarruselInterface[]>([]);
bannersEscolares = signal<CarruselInterface[]>([]);

// 3. Variable para describirse de los cambios y evitar perdida de moria.
private unsubscribeSnapshot: Unsubscribe | undefined;

// 4. Usamos gnOnInit para inicilizar variables que dependen de datos externos como firestore.
ngOnInit() {
  this.obtenerBanners('Escritura', this.bannersEscritura);
  this.obtenerBanners('Agendas', this.bannersAgendas);
  this.obtenerBanners('Tecnologia', this.bannersTecnologia);
  this.obtenerBanners('Oficina', this.bannersOficina);
  this.obtenerBanners('Escolares', this.bannersEscolares);
}

// 5. Obtenemos los banners de las categorias correspondientes, usando directamente la biblioteca de funciones de firestore.
private obtenerBanners(categoria: string, bannersSignal: any) { // Recibe el signal como argumento
  const bannersRef = collection(this.db.firestore, 'Banners');
  const q = query(bannersRef, where('categoria', '==', categoria));

  this.unsubscribeSnapshot = onSnapshot(q, (querySnapshot) => {
    const bannersData: BannerInterface[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data() as BannerInterface;
      bannersData.push(data);
    });
    bannersSignal.set(bannersData); // Asigna al signal correspondiente
  });
}

// 6. Se activa cuando se sale del componente ejecutando la funcion limpiarSuscripcion.
// asi evitamos perdidas de memoria.
ngOnDestroy() {
  this.limpiarSuscripcion();
}


// FUNCIÓN QUE DESUSCRIBE A LOS CAMBIOS DE FIREBASE, EVITA PERDIDA DE MEMORIA INNECESARIA.
private limpiarSuscripcion() {
  if (this.unsubscribeSnapshot) {
    this.unsubscribeSnapshot();
    this.unsubscribeSnapshot = undefined;
  }
}

}

